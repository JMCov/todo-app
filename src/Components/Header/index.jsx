import { createStyles, Header, Navbar, Group } from '@mantine/core';
import { Link } from 'react-router-dom'
import Login from '../Login';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    color: theme.colors.gray[0],
    height: '100%',
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,

  },
  spacer: {
    marginLeft: 'auto',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
    padding: '5px'
  },
}));

const HeaderComponent = () => {
  const { classes } = useStyles();
  return (
    <Header>
      <Navbar className={classes.navbar}>
        <Group spacing="xs">
          <Link default to="/" className={classes.link}>Home</Link>
          <Link to="/settings" className={classes.link}>Settings</Link>
          <div className={classes.spacer}>
          <Login />
          </div>
      </Group>
    </Navbar>
    </Header >
  )
};

export default HeaderComponent;
