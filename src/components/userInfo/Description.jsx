import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/small_queries.css";
import { Typography, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const Description = ({ data }) => {
      const { bio } = data;
      return (
            <Stack sx={{
                  justifyContent: 'center'
            }}>
                  {bio != null ?
                        <Typography variant="body1">{bio}</Typography> :
                        <Typography variant='p' className="no_user">User from Github  <GitHubIcon /></Typography>
                  }
            </Stack>
      );
}
Description.propTypes = {
      bio: PropTypes.string,
}
export default Description