import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3" align="center">Getting in touch is easy!</Typography>    
                <Text variant="h5" align="center">
                    Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/deshanvimukthi-1999" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/deshan-vimukthi/" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                    </Box>
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/deshanvimukthi/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>
                    or send me an Email 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="mailto:vimukthipdd@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>
                    </Box>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;
