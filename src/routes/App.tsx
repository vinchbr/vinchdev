import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {Container, Grid} from "semantic-ui-react";
import { Navbar } from "../features/navbar/Navbar";
import {MobileNavbar} from "../features/navbar/MobileNavbar";

function App() {
    const location = useLocation()

  return (
    <Grid className="App">
        <Grid.Row only='computer tablet'>
            <Grid.Column>
                <Navbar />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row only='mobile'>
            <Grid.Column>
                <MobileNavbar />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Container>
          { location.pathname !== '/' ? (
              <Outlet />
          ) : (
              <div>Homepage</div>
          )}
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <Counter />*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <span>*/}
        {/*    <span>Learn </span>*/}
        {/*    <a*/}
        {/*      className="App-link"*/}
        {/*      href="https://reactjs.org/"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*      React*/}
        {/*    </a>*/}
        {/*    <span>, </span>*/}
        {/*    <a*/}
        {/*      className="App-link"*/}
        {/*      href="https://redux.js.org/"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*      Redux*/}
        {/*    </a>*/}
        {/*    <span>, </span>*/}
        {/*    <a*/}
        {/*      className="App-link"*/}
        {/*      href="https://redux-toolkit.js.org/"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*      Redux Toolkit*/}
        {/*    </a>*/}
        {/*    ,<span> and </span>*/}
        {/*    <a*/}
        {/*      className="App-link"*/}
        {/*      href="https://react-redux.js.org/"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*      React Redux*/}
        {/*    </a>*/}
        {/*  </span>*/}
        {/*</header>*/}
      </Container>
        </Grid.Row>
    </Grid>
  );
}

export default App;
