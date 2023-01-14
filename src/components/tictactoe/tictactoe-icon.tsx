import React from 'react';
import {FiCircle, FiX} from "react-icons/fi";

const TicTacToeIcon = ({player}: Props) => {
    if (player !== null) {
        return (
            player.toUpperCase() === "X" ? <FiX className="text-info text-4xl"/>
                : player.toUpperCase() === "O" ? <FiCircle className="text-error text-4xl"/>
                    : <></>
        );
    } else {
        return (<></>)
    }
};

type Props = {
    player: string
};

export default TicTacToeIcon;
