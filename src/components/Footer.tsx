import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: "text.disabled",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        // position:"sticky",
        // postion:"fixed",
        // position:"relative",
        // bottom:"0"
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography
              color="black"
              variant="h5"
              fontWeight={700}
              fontStyle="italic"
            >
              fatih.aksoy1988@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="textPrimary"
              variant="subtitle1"
              fontWeight={700}
              fontStyle="italic"
            >
              {`Copyright©${new Date().getFullYear()} Fatih Aksoy`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
