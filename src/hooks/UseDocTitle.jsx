import React from 'react'
import { useEffect } from 'react'
const UseDocTitle = (title) => {
    useEffect(()=>{
    document.title = `${title} / Cinematic Verse`
  })
  return null;
}

export default UseDocTitle
