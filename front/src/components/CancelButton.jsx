import React from 'react'
import { useNavigate } from 'react-router-dom'

const CancelButton = () => {
  const nav = useNavigate();
  return (
    <div>
      <button onClick={() => {nav(-1)}} className='px-[30px] py-[10px] rounded-md border-2 border-black'>戻る</button>
    </div>
  )
}

export default CancelButton
