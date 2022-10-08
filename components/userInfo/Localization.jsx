import React from 'react';
import "../../styles/small_queries.css";
import { Grid, Typography, Stack } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';
import WorkIcon from '@mui/icons-material/Work';
function Localization({ data: { location, blog, twitter_username, company } }) {

      return (
            <>
                  <Grid container
                        spacing={2}
                        sx={{
                              marginTop: '5%'
                        }}
                  >
                        <Grid item xs={6}>
                              <Grid item >
                                    <Stack direction="row" spacing={2}>
                                          <LocationOnIcon />
                                          {location != null ?
                                                <Typography className="link_text">{location}</Typography>
                                                :
                                                <Typography className="link_text">No Location</Typography>
                                          }
                                    </Stack>
                              </Grid>
                              <Grid item >
                                    <Stack direction="row" spacing={2} sx={{ marginTop: "3%" }}>
                                          <TwitterIcon />
                                          {twitter_username != null ?
                                                <Typography className="link_text">{`@${twitter_username}`}</Typography>
                                                :
                                                <Typography className="link_text">No User</Typography>
                                          }
                                    </Stack>
                              </Grid>
                        </Grid>
                        <Grid item xs={6}>
                              <Grid item >
                                    <Stack direction="row" spacing={2} >
                                          <PublicIcon />
                                          {blog != null || blog === undefined ?
                                                <a style={{ textdecoration: 'none', color: "black" }} target="_blank" rel="noopener noreferrer" href={blog}><Typography className="link_text">{blog}</Typography></a>
                                                :
                                                <Typography className="link_text">No Blogs</Typography>
                                          }
                                    </Stack>
                              </Grid>
                              <Grid item >
                                    <Stack direction="row" spacing={2} sx={{ marginTop: "3%" }}>
                                          <WorkIcon />
                                          {company != null ?
                                                <Typography className="link_text">{company}</Typography>
                                                :
                                                <Typography className="link_text">No Company</Typography>

                                          }
                                    </Stack>
                              </Grid>
                        </Grid>
                  </Grid>
            </>
      )
}

export default Localization