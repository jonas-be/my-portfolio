import React, {useEffect, useRef, useState} from 'react';


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

    // useEffect(() => console.log("re-render because board changed:", board), [board])

    useEffect(() => {

        if (ws !== null) {
            // listen for messages from the server
            ws.onmessage = function (event) {
                const data = JSON.parse(event.data);

                if (data.board !== undefined) {

                    let boardTmp = board

                    // update board with new game state
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            boardTmp[i][j].value = data.board[i][j];
                        }
                    }
                    setBoard(boardTmp)


                    console.log(boardTmp)
                    console.log(board)

                    // TODO: update turn indicator
                    // const turnEl = document.getElementById('turn');
                    // turnEl.innerHTML = `Turn: ${data.turn}`;

                    // TODO: display winner if game is over
                    // const winnerEl = document.getElementById('winner');
                    // if (data.winner) {
                    //     winnerEl.innerHTML = `Winner: ${data.winner}`;
                    // }
                }
            };
        }
        return () => {
            if (ws !== null) {
                ws.close();
            }
        };
    }, [ws?.onmessage])

    function updateBoard(newBoard: any) {
        setBoard(newBoard)

        console.log(newBoard)
        console.log(board)
    }

    function onClick(e: any) {
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
            <table>
                <caption className="text-accent text-lg pb-6">About me</caption>
                <tbody>
                {board.map(row =>
                    <tr key={row.toString()}>
                        {row.map(cell =>
                            <td key={cell.id} className="p-1">
                                <button id={cell.id} onClick={onClick}
                                        className="bg-accent rounded-3xl p-2 text-center w-20 h-20">{cell.value}</button>
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
