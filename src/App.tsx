import React, {useState} from 'react';
import './App.css';
import {Button} from "./component/Button";
import {Table} from "./component/Table";

function App() {
    let [count, setCount] = useState(0)

    const countInc = () => {
        setCount(count+=1)
        if(count > 8) {
            setCount(8)
        }
    }
    const resetCount = () => {
        setCount(0)
    }



    return (
        <div className="App">
            <div className={'counterWrapper'}>
                <div className={count === 8? 'tableWrapperContent': 'tableWrapper'}>
                    <Table count={count}/>
                </div>
                <div className={'buttonWrapper'}>
                    <Button callback={countInc} name={'inc'} disable={count === 8}/>
                    <Button callback={resetCount} name={'reset'} disable={count === 0}/>
                </div>
            </div>
        </div>
    );
}

export default App;
