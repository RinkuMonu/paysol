import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid2 container>
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Typography>Secret Money Solution Services</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Typography>Quick Links</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Typography>Products</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Typography>Contact Info</Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Footer;
