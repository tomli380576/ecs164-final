import {
  Stack,
  Typography,
  Avatar
} from "@mui/material";

export const TitleBar: React.FC = () => {
  return (
    <Stack direction='column'
      justifyContent="center"
      spacing={1}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <div></div>
        <Typography variant="h3">
          UC Davis MyDegree
        </Typography>


        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <Avatar />
          <Typography variant="h6">
            &nbsp;
            Student
          </Typography>
        </div>
      </Stack>

      <div style={{ height: '10px', backgroundColor: '#ffd966' }}></div>


      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <Avatar sx={{ marginRight: "10px" }} />
          <Typography variant="body1" sx={{ maxWidth: '30%' }}>
            Student&nbsp;Name:<br />
            SID:<br />
            student@ucdavis.edu
          </Typography>
        </div>

        <Typography variant="body1" sx={{ maxWidth: '30%' }}>
          Level: Undergraduate <br />
          Major(s): Computer Science (LS, BS) <br />
          Minor(s): Design (LS, BA)
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: '30%' }}>
          Academic Standing <br />
          Senior (160 units completed) <br />
          Active Student (Winter Quarter 2022)
        </Typography>


      </Stack>
    </Stack >
  )
}

