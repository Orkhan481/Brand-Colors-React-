import React from 'react'
import { getContrastYIQ } from '../helpers'

const Copied = ({color}) => {
  return (
    <div className='copied' style={{"--bgClip" : `#${color}`,"--textClip":`${getContrastYIQ(color)}`}}>
    Copied #{color} to Clipboard
    </div>
  )
}

export default Copied
