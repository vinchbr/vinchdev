import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../features/navbar/Navbar";
import { Container, Grid } from "semantic-ui-react";
import { MobileNavbar } from "../features/navbar/MobileNavbar";
import { Homepage } from "../features/homepage/Homepage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Grid>
        <Grid.Row only="computer tablet">
          <Grid.Column>
            <Navbar />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only="mobile">
          <Grid.Column>
            <MobileNavbar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container className="padded-container">
        {location.pathname === "/" ? <Homepage /> : <Outlet />}
      </Container>
    </div>
  );
}

export default App;
