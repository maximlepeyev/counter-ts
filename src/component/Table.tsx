import React from "react";

type PropsType = {
    count: number
}

export const Table = (props: PropsType) => {
    return (
        <div className={'content'}>
            {props.count}
        </div>
    )
}