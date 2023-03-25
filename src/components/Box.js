import React from 'react'

export default function Box({item}) {
  return (
    <div className='box'>
        <div className={`tas tasNo${item}`}></div>
    </div>
  )
}
