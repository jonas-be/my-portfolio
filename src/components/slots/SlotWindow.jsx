import React from 'react'
import SlotSpinner from '../SlotSpinner'

function SlotWindow() {
  return (
    <div className='flex justify-around border-2 border-gray-500 rounded-3xl p-5'>
      <SlotSpinner />
      <SlotSpinner />
      <SlotSpinner />
      <SlotSpinner />
      <SlotSpinner />
      
    </div>
  )
}

export default SlotWindow
