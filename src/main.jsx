import { render } from "preact";
import { Route, Switch } from "wouter";
import AppProvider from "./context/AppContext.jsx";
import Layout from "./components/Layout.jsx";
import Game from "./pages/Game.jsx";
import About from "./pages/About.jsx";
import App from "./app.jsx";
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
