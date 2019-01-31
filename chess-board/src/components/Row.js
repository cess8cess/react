import React from 'react'
import Square from './Square'

const Row = (props) => {
    const { x } = props;
    return (
        <div className="board-row">
            <Square x={x} y={1} />
            <Square x={x} y={2} />
            <Square x={x} y={3} />
            <Square x={x} y={4} />
            <Square x={x} y={5} />
            <Square x={x} y={6} />
            <Square x={x} y={7} />
            <Square x={x} y={8} />
        </div>
    )
}


export default Row;
