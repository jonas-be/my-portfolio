import React from 'react';
import {AnimationOnScroll} from "react-animation-on-scroll";
import TicTacToeIcon from "./tictactoe-icon";

const TicTacToeField = ({cell, onClick}: Props) => {
    return (
        <div>
            {cell.value === "x" ?
                <AnimationOnScroll animateIn="animate__rotateIn">
                    <button id={cell.id} onClick={onClick}
                            className={`btn bg-info/75 animate-pulse rounded-4xl p-2 flex justify-center items-center w-24 h-24`}>
                        <TicTacToeIcon player={cell.value}/>
                    </button>
                </AnimationOnScroll>
                : cell.value === "o" ?
                    <AnimationOnScroll animateIn="animate__rotateIn">
                        <button id={cell.id} onClick={onClick}
                                className={`btn bg-error/75 animate-pulse rounded-4xl p-2 flex justify-center items-center w-24 h-24`}>
                            <TicTacToeIcon player={cell.value}/>
                        </button>
                    </AnimationOnScroll>
                    :
                    <button id={cell.id} onClick={onClick}
                            className={`btn bg-accent rounded-4xl p-2 flex justify-center items-center w-24 h-24`}>
                        <TicTacToeIcon player={cell.value}/>
                    </button>
            }
        </div>
    );
};

type Props = {
    cell: { id: string, value: string }
    onClick: any
};

export default TicTacToeField;
