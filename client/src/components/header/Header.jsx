import { AppBar, Toolbar, styled, Button, Avatar } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
  background: #FFFFFF;
  color: black;
`;

const Container = styled(Toolbar)`
  justify-content: space-between;
  & > a {
    padding: 5px;
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  & > div {
    display: flex;
    align-items: center;
    & > * {
      margin-right: 10px;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const logout = async () => navigate('/account');
        
  return (
    <Component>
      <Container>
        <Link to='/'>
          <Avatar alt="Blogger" src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-10.png" sx={{ width: 50, height: 50 }} />
        </Link>
        <div>
          <Link to='/'><Button>HOME</Button></Link>
          <Link to='/about'><Button>ABOUT</Button></Link>
          <Link to='/contact'><Button>CONTACT</Button></Link>
          <Button onClick={logout}>LOGOUT</Button>
        </div>
      </Container>
    </Component>
  )
}

export default Header;
