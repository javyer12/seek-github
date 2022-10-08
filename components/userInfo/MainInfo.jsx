import React from 'react';
import "../../styles/small_queries.css";
import { Typography, Stack } from "@mui/material";

function MainInfo({ data: { name, login, created_at } }) {

      return (
            <>
                  <Stack
                        className="main_info"
                        direction="row"
                        sx={{ justifyContent: "space-between" }}>
                        <Typography variant="h4">{name}</Typography>
                        <Typography variant="subtitle2" sx={{ marginTop: "1.5%" }}>{created_at}</Typography>
                  </Stack>
                  <Typography variant="caption">{`@${login}`}</Typography>
            </>
      )
}

export default MainInfo
