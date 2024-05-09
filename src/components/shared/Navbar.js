"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";

//icons.....................!
import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Header from "./Header";

const navItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Pages",
    pathName: "/pages",
  },
  {
    route: "Category",
    pathName: "/categories/news?category=all-news",
  },
  {
    route: "News",
    pathName: "/news",
  },
  {
    route: "Contact",
    pathName: "/contact",
  },
  {
    route: "About",
    pathName: "/about",
  },
];

const Navbar = () => {
  const [activeButton, setActiveButton] = React.useState(null);

  // Function to handle button click
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <>
      <Header />
      <AppBar position="sticky" className="" sx={{ background: "#00a1a1" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} width={100} height={100} alt="logo" />

            <Box className="w-full text-center">
              {navItems.map((item, index) => (
                <Link key={item.route} href={item.pathName}>
                  <Button
                    className={`text-white ${
                      activeButton === index ? "active" : ""
                    }`}
                    sx={{
                      marginRight: "10px",
                      backgroundColor: activeButton === index ? "#ef4444" : "",
                    }}
                    onClick={() => handleButtonClick(index)}
                  >
                    {item.route}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box>
              <Stack
                direction={"row"}
                spacing={1}
                sx={{ "& svg": { color: "white" } }}
              >
                <IconButton aria-label="delete">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <YouTubeIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <InstagramIcon />
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
