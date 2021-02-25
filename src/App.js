import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import { Fade } from 'react-bootstrap';
import Layout from "./views/Layout";
import Home from './views/Home';
import BingoCard from './views/BingoCard';
import data from "./data.json";
import "./App.css";

const App = props => {
  return (
    <Layout>
      <Router>
        <div>
          <Switch>
            <FadingRoute path="/nintendo" component={BingoCard} />
            <FadingRoute path="/microsoft" component={BingoCard} />
            <FadingRoute path="/blizzard" component={BingoCard} />
            <FadingRoute path="/playstation" component={BingoCard} />
            {/* <Route path="/ea" component={About} />
          <Route path="/square" component={About} /> */}
            {/* <FadingRoute path="/custom" component={BingoCard} /> */}
            <FadingRoute path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </Layout>
  );
}

const FadingRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <Fade appear={true}>
          <Component {...routeProps} data={data[path.substr(1)]} />
        </Fade>
      )}
    />
  );
}

export default App;