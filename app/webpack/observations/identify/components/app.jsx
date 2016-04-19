import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import StatsControlContainer from "../containers/stats_control_container";
import ObservationsGridContainer from "../containers/observations_grid_container";
import ObservationModalContainer from "../containers/observation_modal_container";
import SearchBarContainer from "../containers/search_bar_container";

import SideBar from "./side_bar";

const App = () => (
  <Grid fluid>
    <Row>
      <Col xs={12}>
        <h2>Identify</h2>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <SearchBarContainer />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <StatsControlContainer />
      </Col>
    </Row>
    <Row className="mainrow">
      <Col xs={9}>
        <ObservationsGridContainer />
      </Col>
      <Col xs={3} className="sidebar-col">
        <SideBar />
      </Col>
    </Row>
    <ObservationModalContainer />
  </Grid>
);
export default App;