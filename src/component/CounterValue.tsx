import React from 'react';
import { CounterValueType } from '../App';

type PropsType = {
    counterValue: CounterValueType;
    changeCounterValue: (value: number, id: string) => void;
    setCounterValueButton: () => void;
};

export const CounterValue = (props: PropsType) => {
    return (
        <div>
            <div>
                <div>
                    <p>Max Value</p>
                    <input
                        id={'maxValue'}
                        type='number'
                        onChange={(e) =>
                            props.changeCounterValue(
                                (props.counterValue.maxValue = Number(
                                    e.currentTarget.value
                                )),
                                'maxValue'
                            )
                        }
                    />
                </div>
                <div>
                    <p>Min Value</p>
                    <input
                        id={'minValue'}
                        type='number'
                        onChange={(e) =>
                            props.changeCounterValue(
                                (props.counterValue.minValue = Number(
                                    e.currentTarget.value
                                )),
                                'minValue'
                            )
                        }
                    />
                </div>
            </div>
            <div>
                <button onClick={props.setCounterValueButton}>Set</button>
            </div>
        </div>
    );
};
