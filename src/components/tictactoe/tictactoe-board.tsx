import React from 'react';
import TicTacToeField from "./tictactoe-field";


const TicTacToeBoard = ({board, onClick}: Props) => {
    return (
        <table>
            <caption></caption>
            <tbody>
            {board.map(row =>
                <tr key={row[0].id.toString() + "-r"}>

                    {row.map(cell =>
                        <td key={cell.id} className="p-2">
                            <TicTacToeField cell={cell} onClick={onClick}/>
                        </td>
                    )}
                </tr>
            )}
            </tbody>
        </table>
    );
};

type Props = {
    board: { id: string, value: string }[][]
    onClick: any
};

export default TicTacToeBoard;