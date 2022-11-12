import React from 'react';
import "../../styles/small_queries.css";
import { Paper, Stack, Typography } from "@mui/material";

const PaperInfo = ({ data: { publicRepos, followers, following } }) => {
      return (
            <Paper elevation={3} mt={4} className="paper_info-repo" xs={{ width: "100%" }}>
                  <Stack spacing={3} direction="row"
                        sx={{ justifyContent: "space-evenly", margin: "5%" }}
                  >
                        <Stack sx={{ justifyContent: "space-evenly" }} >
                              <Typography className="tg" variant='h5' >Repos</Typography>
                              <Typography className="tg" variant='h6' align="center">{publicRepos}</Typography>
                        </Stack>
                        <Stack sx={{ justifyContent: "space-evenly" }}>
                              <Typography className="tg" variant='h5' >Followers</Typography>
                              <Typography className="tg" variant='h6' align="center">{followers}</Typography>
                        </Stack>
                        <Stack sx={{ justifyContent: "space-evenly" }} >
                              <Typography className="tg" variant='h5'>Followings</Typography>
                              <Typography className="tg" variant='h6' align="center">{following}</Typography>
                        </Stack>
                  </Stack>
            </Paper>
      )
}

export default PaperInfo