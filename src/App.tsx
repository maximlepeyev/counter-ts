import React, { useState } from 'react';
import './App.css';
import { Button } from './component/Button';
import { Table } from './component/Table';
import { CounterValue } from './component/CounterValue';

export type CounterValueType = {
    count: number;
    maxValue: number;
    minValue: number;
};

function App() {
    // let [count, setCount] = useState(0);
    let [counterValue, setCounterValue] = useState({
        count: 0,
        maxValue: 0,
        minValue: 0,
    });

    const countInc = () => {
        debugger;
        setCounterValue({ ...counterValue, count: counterValue.count + 1 });
        if (counterValue.count > counterValue.maxValue) {
            setCounterValue({
                ...counterValue,
                maxValue: counterValue.maxValue,
            });
        }
    };
    const resetCount = () => {
        setCounterValue({ ...counterValue, count: counterValue.minValue });
    };

    const changeCounterValue = (value: number, id: string) => {
        id === 'maxValue'
            ? setCounterValue({ ...counterValue, maxValue: value })
            : setCounterValue({ ...counterValue, minValue: value });
    };

    const setCounterValueButton = () => {
        setCounterValue({ ...counterValue, count: counterValue.minValue });
    };

    return (
        <div className='App'>
            <CounterValue
                counterValue={counterValue}
                changeCounterValue={changeCounterValue}
                setCounterValueButton={setCounterValueButton}
            />
            <div className={'counterWrapper'}>
                <div
                    className={
                        counterValue.count === counterValue.maxValue
                            ? 'tableWrapperContent'
                            : 'tableWrapper'
                    }
                >
                    <Table count={counterValue.count} />
                </div>
                <div className={'buttonWrapper'}>
                    <Button
                        callback={countInc}
                        name={'inc'}
                        disable={counterValue.count === counterValue.maxValue}
                    />
                    <Button
                        callback={resetCount}
                        name={'reset'}
                        disable={counterValue.count === -counterValue.minValue}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
