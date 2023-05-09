import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const StyledTypography = styled(Typography)`
    text-align: center;
`;

const Categories = ({ category }) => {
    return (
        <Box>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                                <StyledTypography variant="h6">All Categories</StyledTypography>
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={`/?category=`}>
                                <StyledTypography variant="body1">All</StyledTypography>
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        <StyledTypography variant="body1">{category.type}</StyledTypography>
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default Categories;
