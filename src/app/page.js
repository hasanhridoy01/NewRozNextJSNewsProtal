import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Grid spacing={2} className="my-5" container>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
