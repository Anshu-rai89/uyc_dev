import React from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MainBody from "./component/MainBody";
import ConstructionPage from "./component/UnderConstruction";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundImage:  `url('../img/main_cover.png')`}}>
        <Header />
        <Switch>
          <Route path="/" component={MainBody} />
          <Route path="/construction" component={ConstructionPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
