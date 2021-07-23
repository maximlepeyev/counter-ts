import React from 'react';

type PropsType = {
    callback: ()=> void
    name: string
    disable: boolean
}

export const Button = (props: PropsType) => {
    return (
        <button onClick={props.callback} disabled={props.disable}>{props.name}</button>
    )
}