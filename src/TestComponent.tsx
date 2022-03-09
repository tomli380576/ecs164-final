import React from "react";
import { Stack, Button } from "@mui/material";

export const TestComponent = () => {


  return (
    <Stack direction='column' spacing={2} sx={{ width: '50%' }}>
      <Button variant="contained" onClick={() => { console.log("ECS") }}>
        ECS
      </Button>

      <Button variant="outlined" onClick={() => { console.log("164") }}>
        164
      </Button>

      <Button variant="contained" onClick={() => { console.log("Final") }}>
        Final
      </Button>
    </Stack>
  );
}