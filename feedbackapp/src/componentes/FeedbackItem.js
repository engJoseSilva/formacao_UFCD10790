import React, { useState } from 'react';
import {FaTimes} from "react-icons/fa";

function FeedbackItem({item, handleDelete}) {

  return (
    <div className='card'>
        <div className='num-display'> {item.pontuacao}</div>
        <div className='text-display'>  {item.texto}</div>
        <button onClick={()=> handleDelete(item.id)} className="close">
            <FaTimes/>
        </button>
    </div>
  )
}

export default FeedbackItem