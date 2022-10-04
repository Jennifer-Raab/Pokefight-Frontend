import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Link,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/Jennifer-Raab/Pokefight-Frontend"
      >
        Jennifer & Niklas
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function StickyFooter() {
  const [value, setValue] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "40vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
            <BottomNavigationAction
              label="Instagram"
              icon={<InstagramIcon />}
            />
            <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
            <BottomNavigationAction
              label="Email"
              icon={<AlternateEmailIcon />}
            />
          </BottomNavigation>

          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
