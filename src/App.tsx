import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { TestComponent } from './TestComponent';
import { Requirement } from './Requirement'
import { Stack } from "@mui/material";

function App() {

  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Requirement/>
      </Stack>
      
    </div>
    
  )
}

export default App
