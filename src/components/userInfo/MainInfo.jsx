import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/small_queries.css";
import { Typography, Stack } from "@mui/material";

function MainInfo({ data: { name, login, createdAt } }) {

      return (
            <>
                  <Stack
                        className="main_info"
                        direction="row"
                        sx={{ justifyContent: "space-between" }}>
                        <Typography variant="h4">{name}</Typography>
                        <Typography variant="subtitle2" sx={{ marginTop: "1.5%" }}>{createdAt}</Typography>
                  </Stack>
                  <Typography variant="caption">{`@${login}`}</Typography>
            </>
      )
}
MainInfo.propTypes = {
      name: PropTypes.string,
      createdAt: PropTypes.string,
}
export default MainInfo
