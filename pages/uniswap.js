import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import _get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

import txDecoder from 'ethereum-tx-decoder';
import BN from 'bignumber.js';
import traverse from 'traverse';

import Root from '../components/Root';
import abi from '../lib/erc20-abi02';
require('buffer');

// 合约地址
const contratTwo = {
    "0xdac17f958d2ee523a2206206994597c13d831ec7": "USDT",
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": "WETH",
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": "USDC",
    "0xb6EE9668771a79be7967ee29a63D4184F8097143": "CXO"
};

const decimals = {
    "USDT": 6,
    "WETH": 18,
    "USDC": 6,
    "CXO": 18
};

const useStyles = makeStyles(theme => ({
    cont: {
        display: 'flex',
        flexDirection: 'column'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        fontSize: '16px',
        padding: "0px 0px 20px 0px"
    },
    lableFont: {
        fontWeight: 500,
        color: '#000'
    },
    messageFont: {
        fontWeight: 500,
        color: 'red',
        background: '#ccc',
        borderRadius: '6px 6px',
        height: "auto",
        lineHeight: "auto",
        marginBottom: "30px",
        padding: "20px 10px"
    },
    btn: {
        margin: '10px 0 60px 0'
    },
    exp: {
        display: 'flex',
        backgroundColor: grey[200],
        padding: theme.spacing(1),
        borderRadius: '4px',
        position: 'relative'
    },
    lnk: {
        marginRight: theme.spacing(2)
    },
    ready: {
        backgroundColor: '#44b700',
        color: '#44b700'
    },
    pending: {
        backgroundColor: yellow[500],
        color: yellow[500]
    },
    failed: {
        backgroundColor: red[500],
        color: red[500]
    },
    dot: {
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        position: 'absolute',
        top: -theme.spacing(1),
        left: -theme.spacing(1),
        width: theme.spacing(2),
        height: theme.spacing(2),
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1
        },
        '100%': {
            transform: 'scale(1.6)',
            opacity: 0
        }
    }
}));

function formatEventValues(values, precision = 1e0) {
    if (!values) {
        return [];
    }
    const trimValues = Object.keys(values).reduce((ret, k) => {
        if (!/^\d+$/.test(k) && k !== 'length') {
            ret[k] = values[k];
        }
        return ret;
    }, {});
    const ret = traverse(trimValues).map(function (v) {
        if (Object.hasOwnProperty.call(v, '_hex')) {
            console.log('bignumber');
            const bn = new BN(v.toString()).dividedBy(precision);
            this.update(bn.c.join(""));
        }
    });
    return ret;
}

function inHandleData(newArr) {
    let newObj = {};
    for (let i = 0; i < newArr.length; i++) {
        const it = newArr[0];
        const keys = Object.keys(it).filter(re => re.indexOf("token") > -1);
        keys.forEach((key, index) => {
            newObj[`transactionPair${index}`] = {
                name: contratTwo[it[key]] || "is null",
                code: it[key]
            };
            newObj[`amount${index}`] = {
                code: contratTwo[it[key]],
                num: new BN(it[`amount${index}Desired`]).div(BN(10).pow(decimals[contratTwo[it[key]]])).toString()
            };
        });
        newObj[`recipient${i}`] = it.recipient;
        newObj.fee = it.fee;
    }
    return newObj;
}

function outHandleData(newArr) {
    let newObj = {};
    if (newArr[2].recipient !== newArr[3].recipient) {
        return { message: "受益人不同，请检查交易体！" };
    }
    newObj['transactionPair0'] = {
        name: "WETH",
        code: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    };
    newObj['transactionPair1'] = {
        name: contratTwo[newArr[3].token],
        code: newArr[3].token
    };
    newObj['amount0'] = {
        code: "WETH",
        num: new BN(newArr[2].amountMinimum).div(BN(10).pow(decimals["WETH"])).toString()
    };
    newObj["amount1"] = {
        code: contratTwo[newArr[3].token],
        num: new BN(newArr[3].amountMinimum).div(BN(10).pow(decimals[contratTwo[newArr[3].token]])).toString()
    };
    newObj['recipient0'] = newArr[2].recipient;
    return newObj;
}

function decodeTx(rawTx) {
    if (!rawTx) {
        return { message: "请输入Decode数据" };
    }
    if (!/^0x/.test(rawTx)) {
        rawTx = '0x' + rawTx;
    }
    let newArr = [];
    const fnDecoder = new txDecoder.FunctionDecoder(abi);
    const decode = fnDecoder.decodeFn(rawTx);
    for (const it of decode.data) {
        const decodeChi = fnDecoder.decodeFn(it);
        const newParams = formatEventValues(decodeChi.params || decodeChi);
        newArr.push(Object.assign({}, newParams, { sighash: decodeChi.sighash, signature: decodeChi.signature }));
    }
    let newObj = {};
    // 判断是出金还是入金
    const check01 = newArr.filter(it => it.signature === "refundETH()" || it.signature.indexOf("mint((address") > -1);
    const check02 = newArr.filter(it => it.signature.indexOf("decreaseLiquidity") > -1 || it.signature.indexOf("collect") > -1 || it.signature.indexOf("unwrapWETH9") > -1 || it.signature.indexOf("sweepToken") > -1);
    // const check02
    if (check01.length >= 2) {
        newObj.type = "入金";
        newObj = Object.assign(newObj, inHandleData(newArr));
    } else if (check02.length >= 4) {
        newObj.type = "出金";
        newObj = Object.assign(newObj, outHandleData(newArr));
    } else {
        newObj.message = "ABI暂时不支持！";
    }
    return newObj;
}

const TX_TYPES = {
    DEFAULT: 10,
    ERC20: 20,
    XRP: 30,
    EOS: 40
};

const Decode = function () {
    const classes = useStyles();
    const [rawTx, setRawTx] = useState('');
    const [decTx, setDecTx] = useState({ message: 'decode' });
    const [disabled, setDisabled] = useState(true);

    return (
        <Root>
            <div className={classes.cont}>
                <TextField
                    multiline
                    id='raw'
                    label='Raw transaction'
                    rows={3}
                    className={classes.tx}
                    value={rawTx}
                    onChange={e => {
                        setRawTx(e.target.value);
                        setDisabled(e.target.value ? false: true);
                    }}
                    variant='outlined'
                />
                <Button
                    size='large'
                    variant='contained'
                    color='secondary'
                    className={classes.btn}
                    disabled={disabled}
                    onClick={async _ => {
                        setDecTx({ message: 'waiting...' });
                        try {
                            const tx = await decodeTx(rawTx);
                            setDecTx(tx);
                        } catch (e) {
                            setDecTx({ message: `error message: ${e.message || e}` });
                            console.log(e);
                        }
                    }}
                >
                    Decode Tx
                </Button>
                {
                    (decTx.message && decTx.message !== "decode") && <div className={classes.messageFont}>
                        {decTx.message}
                    </div>
                }
                {
                    !decTx.message && <>
                        <div className={classes.flexRow}>
                            <div className={classes.lableFont}>出金\入金：</div>
                            <div>{decTx.type}</div>
                        </div>
                        <div className={classes.flexRow}>
                            <div className={classes.lableFont}>交易对：</div>
                            <div className={classes.cont}>
                                <div>
                                    {decTx.transactionPair0.name}(
                                    <Link href={`https://etherscan.io/address/${decTx.transactionPair0.code}`}>
                                        <a className={classes.anchor}>{decTx.transactionPair0.code}</a>
                                    </Link>
                                    ) ~
                                </div>
                                <div>
                                    {decTx.transactionPair1.name}(
                                    <Link href={`https://etherscan.io/address/${decTx.transactionPair1.code}`}>
                                        <a className={classes.anchor}>{decTx.transactionPair1.code}</a>
                                    </Link>
                                    )
                                </div>
                            </div>
                        </div>
                        <div className={classes.flexRow}>
                            <div className={classes.lableFont}>受益人地址：</div>
                            <div>{decTx.recipient0}</div>
                        </div>
                        <div className={classes.flexRow}>
                            <div className={classes.lableFont}>充值数额：</div>
                            <div>{decTx.amount0.code}:</div>
                            <div>{decTx.amount0.num}---</div>
                            <div>{decTx.amount1.code}:</div>
                            <div>{decTx.amount1.num}</div>
                        </div>
                    </>
                }
            </div>
        </Root>
    );
};

export default Decode;
