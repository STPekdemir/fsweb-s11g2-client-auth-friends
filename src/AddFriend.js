import { nanoid } from "nanoid";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function AddFriend() {
  const history = useHistory();

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:9000/api/friends", friendData, {
        headers: { Authorization: token },
      })

      .then((res) => {
        console.log(res.data);
        setfriendData({ ...friendData, name: "", age: "", email: "" });
        history.push("/friendlist");
      })

      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setfriendData({ ...friendData, [event.target.name]: event.target.value });
  };

  const [friendData, setfriendData] = useState({
    id: nanoid(),
    name: "",
    age: "",
    email: "",
  });

  return (
    <div>
      <h1>Add Friend</h1>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Friend Name
          <input
            name="name"
            type="text"
            onChange={handleOnChange}
            value={friendData.name}
          />
        </label>
        <label>
          Friend Email
          <input
            name="email"
            type="email"
            onChange={handleOnChange}
            value={friendData.email}
          />
        </label>
        <label>
          Friend Age
          <input
            name="age"
            type="number"
            onChange={handleOnChange}
            value={friendData.age}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddFriend;
