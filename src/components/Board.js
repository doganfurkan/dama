import React from 'react'
import Box from './Box'

export default function Board(){

    const yapi = [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0]

    const fnc = () => {
        let donut = [];
        for(let i = 0;i<64;i++){
            donut.push(yapi[i])
        }
        return donut;
    }
  return (
    <div id="board">
        {
            fnc().map((item,key) => {
                return <Box key={key} item={item}></Box>
            })
        }
    </div>
  )
}
