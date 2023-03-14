import "./App.css";
import Login from "./Login";
import FriendList from "./FriendList";
import AddFriend from "./AddFriend";
import { Link, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      <div>
        <nav style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/">Login</Link>
          <Link to="/friendList">Friend List</Link>
          <Link to="/addfriend">Add Friend</Link>

          <Link to="logout">Logout</Link>
        </nav>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute exact path="/friendList" component={FriendList} />
          <PrivateRoute exact path="/addfriend" component={AddFriend} />
          <PrivateRoute exact path="/logout" component={Logout} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
