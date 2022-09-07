import React from 'react';
import "../../styles/small_queries.css";
import { Typography, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

function Description({ data: { bio } }) {

      return (
            <>
                  <Stack sx={{
                        justifyContent: 'center'
                  }}>
                        {bio != null ?
                              <Typography variant="body1">{bio}</Typography> :
                              <Typography variant='p' className="no_user">User from Github  <GitHubIcon /></Typography>
                        }
                  </Stack>
            </>
      )
}

export default Description