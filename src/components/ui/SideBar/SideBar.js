import { Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import topNews from "@/assets/pexels-markusspiske-97050.jpg";
import Image from "next/image";

const SideBar = () => {
  return (
    <Box sx={{ marginTop: '20px' }}>
      <Card>
        <CardMedia>
          <Image className="mx-auto" src={topNews} alt="top news" />
        </CardMedia>
        <CardContent>
          <p className="w-[100px] bg-red-500 text-white px-2 mt-2 mb-3 p-1 rounded">
            Technology
          </p>
          <Typography variant="h5">
            Bitcoin Climbs as Elon Musk Says Teals Likely to Accepts it Again{" "}
          </Typography>
          <Typography variant="body1" gutterBottom className="my-3">
            By Zahid Hasan Hridoy - May 9 2024{" "}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet diam non ligula porttitor ultrices. Sed posuere, lorem at
            malesuada feugiat, nulla dolor efficitur libero, sed ultricies risus
            dolor non turpis. Morbi in volutpat justo. Aliquam consectetur
            vestibulum sapien id tincidunt. Quisque ut metus nunc. Nulla
            facilisi. Nunc vel sapien a velit tempus venenatis eget non urna.
          </Typography>
        </CardContent>
        <CardActions>{/* Actions for the card */}</CardActions>
      </Card>
    </Box>
  );
};

export default SideBar;
