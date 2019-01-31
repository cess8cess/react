import React from 'react'
import Row from './Row';

export default function Board() {
    return (
        <div className="board">
            <Row x={1} />
            <Row x={2} />
            <Row x={3} />
            <Row x={4} />
            <Row x={5} />
            <Row x={6} />
            <Row x={7} />
            <Row x={8} />
        </div>
    )
}
