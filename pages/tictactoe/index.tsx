import React, {useState} from 'react';
import TicTacToeBoard from "../../src/components/tictactoe/tictactoe-board";
import TicTacToeIcon from "../../src/components/tictactoe/tictactoe-icon";
import BackgroundGrid from "../../src/components/BackgroundGrid";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export const isBrowser = typeof window !== "undefined";
export const ws = isBrowser ? new WebSocket('ws://localhost:8080') : null;
const Index = () => {
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
        };
        if (ws.readyState === 1) {
            ws.send(JSON.stringify({"whoIam": "who"}))
        }
    }

    function onClick(e: any) {
        console.log(board)
        if (ws !== null) {
            const target = e.target
            const [, rowStr, colStr] = target.id.split('-');
            const row = parseInt(rowStr);
            const col = parseInt(colStr);

            ws.send(JSON.stringify({row, col}));
        }
    }


    return (

        <div id="background" className="w-full h-full">

            <BackgroundGrid className={playerYou === "X" ? "text-info"
                : playerYou === "O" ? "text-error"
                    : "text-primary"}
            />

            <div className="w-screen h-full"
                 style={{background: "linear-gradient(125deg, rgba(99,102,241,.25) 0%, rgba(49,46,129,.05) 34%, rgba(45,49,131,0) 51%, rgba(30,58,138,.05) 74%, rgba(232,121,240,.25) 100%)"}}>
                <Header/>


                <div className="flex justify-around w-full py-10">
                    <p className="flex gap-2 font-bold text-accent text-xl items-center">You: <TicTacToeIcon
                        player={playerYou}/></p>
                    <p className="flex gap-2 font-bold text-accent text-xl items-center">Turn: <TicTacToeIcon
                        player={turn}/></p>
                    <p className="flex gap-2 font-bold text-accent text-xl items-center">Winner: <TicTacToeIcon
                        player={winner}/></p>
                </div>
                <div className="flex justify-center p-10">
                    <TicTacToeBoard board={board} onClick={onClick}/>
                </div>


                <div className='h-[36vh]'/>
                <Footer/>
            </div>

        </div>
    );
};

export default Index;