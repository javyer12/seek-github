import React from 'react';
import "../../styles/small_queries.css";
import { Paper, Stack, Typography } from "@mui/material";
function PaperInfo({ data: { public_repos, followers, following } }) {
      return (
            <>
                  <Paper elevation={3} mt={4} className="paper_info-repo" xs={{ width: "100%" }}>
                        <Stack spacing={3} direction="row"
                              sx={{ justifyContent: "space-evenly", margin: "5%" }}
                        >
                              <Stack sx={{ justifyContent: "space-evenly" }} >
                                    <Typography variant='h5' >Repos</Typography>
                                    <Typography variant='h6' align="center">{public_repos}</Typography>
                              </Stack>
                              <Stack sx={{ justifyContent: "space-evenly" }}>
                                    <Typography variant='h5' >Followers</Typography>
                                    <Typography variant='h6' align="center">{followers}</Typography>
                              </Stack>
                              <Stack sx={{ justifyContent: "space-evenly" }} >
                                    <Typography variant='h5'>Followings</Typography>
                                    <Typography variant='h6' align="center">{following}</Typography>
                              </Stack>
                        </Stack>
                  </Paper>
            </>
      )
}

export default PaperInfo