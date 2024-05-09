import { Box, Button, Container, Typography } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

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
    pathName: "/category",
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

const Footer = () => {
  return (
    <div>
      <Box className="px-2 py-10" sx={{ background: "#00a1a1" }}>
        <Container>
          <Box
            className="w-full text-center"
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
          </Box>
          <Box className="w-full text-center mt-5">
            {navItems.map((item) => (
              <Link key={item} href={item.pathName}>
                <Button className="text-white" sx={{ fontSize: "14px" }}>
                  {item.route}
                </Button>
              </Link>
            ))}
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#f5f5f5", textAlign: "center", marginTop: "20px" }}
          >
            @2024 The Dragon News Design By Zahid Hasan Hridoy
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
