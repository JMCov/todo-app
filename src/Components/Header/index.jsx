import { Navbar, Text } from '@mantine/core';
import './header.css';

function Header({ incomplete }) {
  return (
    <>
      <Navbar className="navbar">
        <Text className="navbar-text">Home</Text>
      </Navbar>
      <header data-testid="todo-header" className="header">

        <h1 data-testid="todo-h1">To Do List: {incomplete.length} items pending</h1>

      </header>
    </>
  );
}

export default Header;
