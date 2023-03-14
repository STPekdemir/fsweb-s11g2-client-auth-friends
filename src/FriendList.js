import axios from "axios";
import { useEffect, useState } from "react";

function Friend(props) {
  const { name, email } = props.friend;
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}

function FriendList() {
  const token = localStorage.getItem("token");
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
}

export default FriendList;
