import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:9000/api/login", userData)
      .then((res) => {
        console.log(res.data);
        setUserData({
          username: "",
          password: "",
        });
        localStorage.setItem("token", res.data.token);
        history.push("/friendlist");
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Username
          <input
            value={userData.username}
            name="username"
            onChange={handleOnChange}
          />
        </label>
        <label>
          Password
          <input
            value={userData.password}
            name="password"
            onChange={handleOnChange}
            type="password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Login;
