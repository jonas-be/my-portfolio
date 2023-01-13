import React, {useState} from 'react';
import {FiCircle, FiX} from "react-icons/fi";
import {AnimationOnScroll} from "react-animation-on-scroll";


export const isBrowser = typeof window !== "undefined";
export const ws = isBrowser ? new WebSocket('ws://localhost:8080') : null;
const TicTacToeBoard = () => {
    const [board, setBoard] = useState(
        [
            [{id: "cell-0-0", value: ""}, {id: "cell-0-1", value: ""}, {id: "cell-0-2", value: ""}],
            [{id: "cell-1-0", value: ""}, {id: "cell-1-1", value: ""}, {id: "cell-1-2", value: ""}],
            [{id: "cell-2-0", value: ""}, {id: "cell-2-1", value: ""}, {id: "cell-2-2", value: ""}]
        ]
    );
    const [playerYou, setPlayerYou] = useState("");
    const [turn, setTurn] = useState("");
    const [winner, setWinner] = useState("");

    if (ws !== null) {
        ws.onopen = function (event) {
            console.log(event)
        }

        ws.onmessage = function (event) {
            const data = JSON.parse(event.data);

            console.log(data)

            if (data.board !== undefined) {
                let boardTmp = [
                    [{id: "cell-0-0", value: ""}, {id: "cell-0-1", value: ""}, {id: "cell-0-2", value: ""}],
                    [{id: "cell-1-0", value: ""}, {id: "cell-1-1", value: ""}, {id: "cell-1-2", value: ""}],
                    [{id: "cell-2-0", value: ""}, {id: "cell-2-1", value: ""}, {id: "cell-2-2", value: ""}]
                ]

                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        boardTmp[i][j].value = data.board[i][j];
                    }
                }
                setBoard(boardTmp)
            }
            if (data.turn !== undefined) {
                setTurn(data.turn)
            }
            if (data.winner !== undefined) {
                setWinner(data.winner)
            }
            if (data.playerYou !== undefined) {
                setPlayerYou(data.playerYou)
            }

            console.log(turn, winner, playerYou)
        };
    }

    function onClick(e: any) {
        console.log(board)
        if (ws !== null) {

            const target = e.target

            // get row and col of clicked cell
            const id = target.id;
            const [, rowStr, colStr] = id.split('-');
            const row = parseInt(rowStr);
            const col = parseInt(colStr);

            console.log({id, target, e})
            console.log({rowStr, colStr})
            console.log({row, col})

            // send move to server
            ws.send(JSON.stringify({row, col}));
        }
    }


    return (
        <div>
            <p className="flex text">playerYou: {playerYou}</p>
            <p className="flex text">turn: {turn}</p>
            <p className="flex text">winner: {winner}</p>

            <table>
                <caption className="text-accent text-lg pb-6">About me</caption>
                <tbody>
                {board.map(row =>
                    <tr key={row[0].id.toString() + "-r"}>

                        {row.map(cell =>
                            <td key={cell.id} className="p-1">
                                {cell.value === "x" ?
                                    <AnimationOnScroll animateIn="animate__flash">
                                        <button id={cell.id} onClick={onClick}
                                                className={`btn bg-info/75 animate-pulse rounded-3xl p-2 flex justify-center items-center w-20 h-20`}>
                                            <FiX className="text-info text-5xl"/>
                                        </button>
                                    </AnimationOnScroll>
                                    : cell.value === "o" ?
                                        <AnimationOnScroll animateIn="animate__flash">
                                            <button id={cell.id} onClick={onClick}
                                                    className={`btn bg-error/75 animate-pulse rounded-3xl p-2 flex justify-center items-center w-20 h-20`}>
                                                <FiCircle className="text-error text-5xl"/>
                                            </button>
                                        </AnimationOnScroll>
                                        :
                                        <button id={cell.id} onClick={onClick}
                                                className={`btn bg-accent rounded-3xl p-2 flex justify-center items-center w-20 h-20`}>
                                            {cell.value === "X" ?
                                                <FiX className="text-info text-5xl"/>
                                                : cell.value === "O" ?
                                                    <FiCircle className="text-error text-5xl"/>
                                                    :
                                                    ""
                                            }
                                        </button>
                                }
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default TicTacToeBoard;