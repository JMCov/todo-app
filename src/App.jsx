import React from 'react';

import Todo from './Components/Todo';
import Footer from './Components/Footer';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Todo />
        <Footer />
      </>
    );
  }
}
