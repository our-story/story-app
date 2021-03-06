import React, {Fragment} from 'react';
import { Route } from 'react-router-dom'

import {
  Container,
} from 'semantic-ui-react'

// Components
//import Footer from "../../components/footer";

//Containers
import AppHeader from "../header";
import Home from '../home'
import About from '../about'
import CreateStory from "../create-story";

const App = () => (
  <Fragment>
    <AppHeader />
    <Container as="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/create-story" component={CreateStory} />
    </Container>

  </Fragment>
)

export default App
