import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import logo from '@/assets/The Dragon News.png'
import { showCurrentDateTime } from "@/utils/getCurrectDate";

const Header = () => {
    const currentDate = showCurrentDateTime();
    return (
        <Box className="w-full my-5">
            <Container>
                <Image className="mx-auto" src={logo} width={500} height={500} alt="the dragon news" />
                <Typography variant="body2" textAlign={'center'} color={'gray'} className="my-1 mt-5">Journalism Without Fear or Favour</Typography>
                <Typography variant="body2" textAlign={'center'} color={'black'} className="mb-2">{currentDate}</Typography>
            </Container>
        </Box>
    );
};

export default Header;