import React from "react"
import { Box } from '@material-ui/core';
import image from '../images/coronavirus-4914028_1920.jpg'

const Image = () => {

  return <Box style={{
    display: 'block',
    maxWidth: '100%',
    height: 'auto'
  }}>
    <img src={image}></img>
  </Box >
}

export default Image
