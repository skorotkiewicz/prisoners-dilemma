import { render } from "preact";
import { Route, Switch } from "wouter";
import AppProvider from "./context/AppContext";
import Layout from "./components/Layout";
import Game from "./pages/Game";
import About from "./pages/About";
import App from "./app";
import "./styles/index.scss";

render(
  <AppProvider>
    <Switch>
      <Route path="/" component={App} />
      <Layout>
        <Route path="/game" component={Game} />
        <Route path="/about" component={About} />
      </Layout>
    </Switch>
  </AppProvider>,
  document.getElementById("app")
);
