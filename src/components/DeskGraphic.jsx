import React, { useEffect, useState } from 'react'


function DeskGraphic({ deskHeight }) {

  const [height, setHeight] = useState()

  useEffect(() => {
    console.log('...');
    getHeightPercentage()
  }, [])

  function getHeightPercentage() {
    const percantage = parseFloat(deskHeight / 1.25)
    console.log(percantage);
    setHeight(percantage)
  }


  return (
    <div className='relative border-red-500 border-2 z-0 h-80 text-gray-500 dark:text-gray-400'>

      {/* Only move Desk Upper to change the hight */}
      {/* top-0 == 0rem // desk is at highest point */}
      {/* top-16 == 4rem // desk is at lowest point */}
      <svg className={`absolute top-[${parseFloat(height * 4)}rem]`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 330" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><rect width="577.220271" height="182.237832" rx="20" ry="20" transform="matrix(.909215 0-.512193 0.610408 104.261819 8.447484)" fill="rgba(210,219,237,0)" stroke="currentColor" stroke-width="2" /><rect width="20.873056" height="146.9142" rx="0" ry="0" transform="matrix(1 0 0 0.558687 493.99207 119.686914)" fill="rgba(210,219,237,0)" stroke="currentColor" /><rect width="20.873056" height="146.9142" rx="0" ry="0" transform="matrix(1 0 0 0.558687 125.134875 119.686914)" fill="rgba(210,219,237,0)" stroke="currentColor" /></svg>

      <svg className='absolute bottom-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 330" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g transform="translate(0 0.000001)"><rect width="31.066973" height="101.950693" rx="3" ry="3" transform="matrix(.895789 0 0 1 121.656684 201.765968)" fill="currentColor" stroke="currentColor" stroke-width="1.5" /><rect width="31.066973" height="101.950693" rx="3" ry="3" transform="matrix(.895789 0 0 1 490.513872 201.765968)" fill="currentColor" stroke="currentColor" stroke-width="1.5" /><rect width="31.066973" height="101.950693" rx="3" ry="3" transform="matrix(.895789 0-.370631 0.441701 140.549735 281.200813)" fill="currentColor" stroke="currentColor" stroke-width="1.5" /><rect width="31.066973" height="101.950693" rx="3" ry="3" transform="matrix(.895789 0-.370631 0.441701 509.406923 281.200813)" fill="currentColor" stroke="currentColor" stroke-width="1.5" /></g></svg>

    </div>
  )
}

export default DeskGraphic
