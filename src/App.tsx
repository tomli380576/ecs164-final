import './App.css'
import { Major } from './Major';
import { TitleBar } from './TitleBar';
import { Stack } from '@mui/material'

function App() {
  return (
    <Stack direction="column">
      <TitleBar />
      <Major />
    </Stack>
  )
}

export default App
