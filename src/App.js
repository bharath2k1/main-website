import "./App.css";
import ContactComponent from "./Components/Contact/ContactComponent";
import HomeComponent from "./Components/Home/HomeImg/HomeComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />

        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/opportunities" component={Opportunities} />
          <Route exact path="/solutions" component={Services} />
          <Route exact path="/contact-us" component={ContactComponent} />
        </Switch>
      </div>
    </Router>
  );
}

function Services() {
  return <p>Solutions that help you.</p>;
}
function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

// <NavbarComponent />
//       <HomeComponent />
//       <ScrollArrow />

export default App;
