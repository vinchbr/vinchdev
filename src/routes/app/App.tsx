import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../features/navbar/Navbar";
import { Grid } from "semantic-ui-react";
import { MobileNavbar } from "../../features/navbar/MobileNavbar";

export const App = () => {
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
      <Outlet />
    </div>
  );
};

export default App;
