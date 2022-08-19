import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaArrowDown, FaArrowUp } from "react-icons/fa"


function DeskController() {

    const [deskHeight, setDeskHeight] = useState(0)

    useEffect(() => {
        async function setUp() {
            // fetchHeight()
        }
        setUp()
    }, [])

    async function fetchHeight() {
        const res = await fetch('http://localhost:5000/height')
        const data = await res.text()
        const toReturn = parseFloat(data.substring(1, data.length - 2)) // substring to remove "

        console.log(toReturn);

        setDeskHeight(toReturn)
        console.log(deskHeight);
    }

    async function fetchSetPosition(positionName: string) {
        const res = await fetch(`http://localhost:5000/height?position_name=${positionName}`, {
            method: "POST"
        })
        const data = await res.text()
        console.log(data);
        return data
    }

    return (
        <>
            <Header />

            {/* <DeskGraphic deskHeight={deskHeight} /> */}

            <div className='flex flex-col items-center'>

                <button onClick={() => { fetchSetPosition("stand") }} className="h-[40vh] w-full md:w-2/3 flex justify-center items-center text-gray-500 dark:text-gray-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-2xl text-sm p-2.5">
                    <FaArrowUp className='text-gray-500 dark:text-white text-4xl' />
                </button>
                <br />
                <button onClick={() => { fetchSetPosition("sit") }} className="h-[40vh] w-full md:w-2/3 flex justify-center items-center text-gray-500 dark:text-gray-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-2xl text-sm p-2.5">
                    <FaArrowDown className='text-gray-500 dark:text-white text-4xl'/>

                </button>
                <br />
            </div>




            <Footer />
        </>
    )
}

export default DeskController
