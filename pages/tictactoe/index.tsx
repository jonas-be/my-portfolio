import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import React from "react";
import "animate.css/animate.min.css";
import BackgroundGrid from "../../src/components/BackgroundGrid";
import TicTacToeBoard from "../../src/components/tictactoe-board";

function Index() {

    return (
        <div id="background" className="w-full h-full">

            <BackgroundGrid/>

            <div className="w-screen h-full"
                 style={{background: "linear-gradient(125deg, rgba(99,102,241,.25) 0%, rgba(49,46,129,.05) 34%, rgba(45,49,131,0) 51%, rgba(30,58,138,.05) 74%, rgba(232,121,240,.25) 100%)"}}>
                <Header/>


                <TicTacToeBoard/>


                <div className='h-[32.5vh]'/>
                <Footer/>
            </div>

        </div>
    );
}

export default Index;
