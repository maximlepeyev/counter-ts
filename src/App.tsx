import React, { useState } from 'react';
import './App.css';
import { Button } from './component/Button';
import { Table } from './component/Table';
import { CounterValue } from './component/CounterValue';

export type CounterValueType = {
    maxValue: number;
    minValue: number;
};

function App() {
    let [count, setCount] = useState(0);
    let [counterValue, setCounterValue] = useState({
        maxValue: 0,
        minValue: 0,
    });

    const countInc = () => {
        debugger;
        setCount((count += 1));
        if (count > counterValue.maxValue) {
            setCount(counterValue.maxValue);
        }
    };
    const resetCount = () => {
        setCount(counterValue.minValue);
    };

    const changeCounterValue = (value: number, id: string) => {
        id === 'maxValue'
            ? setCounterValue({ ...counterValue, maxValue: value })
            : setCounterValue({ ...counterValue, minValue: value });
    };

    const setCounterValueButton = () => {
        setCount((count = counterValue.minValue));
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
                        count === counterValue.maxValue
                            ? 'tableWrapperContent'
                            : 'tableWrapper'
                    }
                >
                    <Table count={count} />
                </div>
                <div className={'buttonWrapper'}>
                    <Button
                        callback={countInc}
                        name={'inc'}
                        disable={count === counterValue.maxValue}
                    />
                    <Button
                        callback={resetCount}
                        name={'reset'}
                        disable={count === -counterValue.minValue}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
