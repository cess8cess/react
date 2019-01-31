import React from 'react'

const Square = (props) => {
    const { x, y } = props;
    const sum = x + y;

    let className = ((sum % 2) === 0) ? "square-even" : "square-odd";


    return (
        <div className={className}>
            {renderXLabel(x, y)}
            {renderYLabel(x, y)}
            {renderPiece(x, y)}
        </div>
    )
}

const renderXLabel = (x, y) => {
    if (x === 1) {
        return <div className="labelX" style={{ top: -20 }}>{renderAtoH(y)}</div>
    } else if (x === 8) {
        return <div className="labelX" style={{ bottom: -20 }}>{renderAtoH(y)}</div>
    }
}

const renderYLabel = (x, y) => {
    if (y === 1) {
        return <div className="labelY" style={{ left: -20, }}>{9 - x}</div>
    } else if (y === 8) {
        return <div className="labelY" style={{ right: -20, }}>{9 - x}</div>
    }
}

const renderAtoH = (y) => {
    switch (y) {
        case 1:
            return 'A';
        case 2:
            return 'B';
        case 3:
            return 'C';
        case 4:
            return 'D';
        case 5:
            return 'E';
        case 6:
            return 'F';
        case 7:
            return 'G';
        case 8:
            return 'H';
        default:
            return '';
    }
}

const renderPiece = (x, y) => {
    if (x === 7) {
        return <img alt="" src="images/pawn_white.png" />
    } else if (x === 2) {
        return <img alt="" src="images/pawn_black.png" />
    } else if (x === 1) {
        if (y === 1 || y === 8) {
            return <img alt="" src="images/rook_black.png" />
        } else if (y === 2 || y === 7) {
            return <img alt="" src="images/knight_black.png" />
        } else if (y === 3 || y === 6) {
            return <img alt="" src="images/bishop_black.png" />
        } else if (y === 4) {
            return <img alt="" src="images/queen_black.png" />
        } else if (y === 5) {
            return <img alt="" src="images/king_black.png" />
        }
    } else if (x === 8) {
        if (y === 1 || y === 8) {
            return <img alt="" src="images/rook_white.png" />
        } else if (y === 2 || y === 7) {
            return <img alt="" src="images/knight_white.png" />
        } else if (y === 3 || y === 6) {
            return <img alt="" src="images/bishop_white.png" />
        } else if (y === 4) {
            return <img alt="" src="images/queen_white.png" />
        } else if (y === 5) {
            return <img alt="" src="images/king_white.png" />
        }
    }
}


export default Square;