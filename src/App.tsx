import './App.css'
import { Major } from './Major';
import { TitleBar } from './TitleBar';
import { Stack } from '@mui/material'
import { QuickLinks } from './QuickLinks';

function App() {
  return (
    <Stack direction="column">
      <TitleBar />
      <Major />
    </Stack>
  )
}

export default App
