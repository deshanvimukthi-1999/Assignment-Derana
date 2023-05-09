import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
  border-radius: 0 0 50% 50%;
  padding: 100px 0;
`;

const Wrapper = styled(Box)`
  padding: 20px;
`;

const Title = styled(Typography)`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
  margin-bottom: 20px;
`;

const Text = styled(Typography)`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  margin-bottom: 20px;
`;

const SocialIcon = styled(Box)`
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
`;

const About = () => {
  return (
    <Box>
      <Banner>
        <Title variant="h3" style={{textAlign: "center"}}>Deshan Vimukthi</Title>
      </Banner>
      <Wrapper>
        <Text variant="h5">
          I'm a Software Engineer based in SriLanka. I've built websites,
          desktop applications and corporate software.
          <br />
          If you are interested, you can view some of my favorite projects here{' '}
          <Link
            href="https://github.com/deshanvimukthi-1999"
            color="inherit"
            target="_blank"
          >
            <GitHub />
          </Link>
        </Text>
        <Text variant="h5">
          Need something built or simply want to have chat? Reach out to me on{' '}
          <SocialIcon>
            <Link
              href="https://www.linkedin.com/in/deshan-vimukthi/"
              color="inherit"
              target="_blank"
            >
              <LinkedIn fontSize="large" />
            </Link>
          </SocialIcon>
          or send me an Email{' '}
          <SocialIcon>
            <Link
              href="mailto:vimukthipdd@gmail.com?Subject=This is a subject"
              target="_blank"
              color="inherit"
            >
              <Email fontSize="large" />
            </Link>
          </SocialIcon>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
