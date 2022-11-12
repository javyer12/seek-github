import React from "react";
import "../../styles/small_queries.css";
import { CardMedia, Grid, Stack } from "@mui/material";
import MainInfo from "../userInfo/MainInfo";
import Description from "../userInfo/Description";
import PaperInfo from "../userInfo/PaperInfo";
import Localization from "../userInfo/Localization";


const UserCard = ({ data }) => {
      const { avatarUrl, login } = data;

      return (
            <Grid
                  className="info_section"
                  container
                  spacing={2}
                  sx={{
                        marginTop: "2%",
                        width: "100%"
                  }}
            >
                  <Grid item xs={3} >
                        <CardMedia
                              className="avatar"
                              component="img"
                              alt={login}
                              image={avatarUrl}
                              sx={{
                                    borderRadius: "50%",
                                    marginLeft: "2%",
                                    marginTop: "4%"
                              }}
                        />
                  </Grid>
                  <Grid item xs={9}>
                        <Stack
                              direction="column"
                              spacing={1}
                              sx={{
                                    margin: '3%'
                              }}
                        >
                              <MainInfo data={data} />
                              <Description data={data} />
                              <PaperInfo data={data} />
                              <Localization data={data} />
                        </Stack>
                  </Grid>
            </Grid>
      );
}

export default UserCard;
