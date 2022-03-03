import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="App">
      <div className="flex justify-center space-x-4 p-4">
        <Link to="/">
          <Button text="Home" />
        </Link>
        <Link to="/add-user">
          <Button text="Add User" />
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/add-user" component={AddUser} />
      </Switch>
    </div>
  );
}

const Button = ({ text }) => {
  return (
    <button className="px-4 py-2 bg-blue-500 rounded text-white">
      {" "}
      {text}{" "}
    </button>
  );
};
