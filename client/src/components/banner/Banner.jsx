import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
    opacity: 0;
    animation: fade-in 2s forwards;
    
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(50%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
            <Heading>INSIGHTS</Heading>
        </Image>
    )
}

export default Banner;
