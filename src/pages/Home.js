
import { Button, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeProvider2 } from '..';
import createPalette from '@mui/material/styles/createPalette';



export default function Home({mycolor2}) {
  // console.log(mycolor2);
  const theme = useTheme()
  const theme2 = useContext(ThemeProvider2)
  // console.log(theme2);
  return (
    <>
      <h1>How Are You !</h1>
      <Button style={{color:theme }}>Button</Button>Using MUI<br></br>
      <Button style={{color:theme2 }}>Button</Button>Using useContext React Hooks<br></br>
      <Button style={{color:mycolor2 }}>Button</Button>Using Props Drilling<br></br>
    </>
  )
}
