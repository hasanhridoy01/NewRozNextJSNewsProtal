import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/pexels-pixabay-159652.jpg";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box className="my-5">
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
      <Grid
        className="my-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        <Grid item xs={6}>
          <Card sx={{ overflow: 'hidden' }}>
            <CardMedia
              className="my-2"
              sx={{
                overflow: 'hidden',
                "&:hover": {
                  transform: "scale(1.03)",
                  transition: "transform 0.5s ease-in-out",
                },
              }}
            >
              <Image className="mx-auto" src={topNews2} alt="top news" />
            </CardMedia>
            <CardContent>
              <p className="w-[100px] bg-red-500 text-white px-2 mt-2 mb-3 p-1 rounded">
                Technology
              </p>
              <Typography variant="h6">
                Bitcoin Climbs as Elon Musk Says Teals Likely to Accepts it
                Again{" "}
              </Typography>
              <Typography variant="body1" gutterBottom className="my-3">
                By Zahid Hasan Hridoy - May 9 2024{" "}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet diam non ligula porttitor ultrices.
              </Typography>
            </CardContent>
            <CardActions>{/* Actions for the card */}</CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia className="my-2">
              <Image className="mx-auto" src={topNews2} alt="top news" />
            </CardMedia>
            <CardContent>
              <p className="w-[100px] bg-red-500 text-white px-2 mt-2 mb-3 p-1 rounded">
                Technology
              </p>
              <Typography variant="h6">
                Bitcoin Climbs as Elon Musk Says Teals Likely to Accepts it
                Again{" "}
              </Typography>
              <Typography variant="body1" gutterBottom className="my-3">
                By Zahid Hasan Hridoy - May 9 2024{" "}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet diam non ligula porttitor ultrices.
              </Typography>
            </CardContent>
            <CardActions>{/* Actions for the card */}</CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia className="my-2">
              <Image className="mx-auto" src={topNews2} alt="top news" />
            </CardMedia>
            <CardContent>
              <p className="w-[100px] bg-red-500 text-white px-2 mt-2 mb-3 p-1 rounded">
                Technology
              </p>
              <Typography variant="h6">
                Bitcoin Climbs as Elon Musk Says Teals Likely to Accepts it
                Again{" "}
              </Typography>
              <Typography variant="body1" gutterBottom className="my-3">
                By Zahid Hasan Hridoy - May 9 2024{" "}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet diam non ligula porttitor ultrices.
              </Typography>
            </CardContent>
            <CardActions>{/* Actions for the card */}</CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia className="my-2">
              <Image className="mx-auto" src={topNews2} alt="top news" />
            </CardMedia>
            <CardContent>
              <p className="w-[100px] bg-red-500 text-white px-2 mt-2 mb-3 p-1 rounded">
                Technology
              </p>
              <Typography variant="h6">
                Bitcoin Climbs as Elon Musk Says Teals Likely to Accepts it
                Again{" "}
              </Typography>
              <Typography variant="body1" gutterBottom className="my-3">
                By Zahid Hasan Hridoy - May 9 2024{" "}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet diam non ligula porttitor ultrices.
              </Typography>
            </CardContent>
            <CardActions>{/* Actions for the card */}</CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
