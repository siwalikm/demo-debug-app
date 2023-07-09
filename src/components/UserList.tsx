import { useEffect, useState } from "react";
import { API_PATH } from "../constants";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  avatar: string;
  hobbies: Array<string>;
  theme: string;
}

const getData = async () => {
  const response = await fetch(API_PATH);
  const data = await response.json();
  return data;
};

export const UserList = () => {
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    getData().then((data) => setUsersList(data));
  }, []);

  return (
    <>
      <div className="grid-container">
        {usersList.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <div
              className="grid-item"
              key={user.id}
              style={{ background: user.theme }}
            >
              <img src={user.avatar} alt={user.name} />
              <h2>{user.name}</h2>
              {user?.hobbies?.length > 0 && (
                <div className="hobby">
                  <ul>
                    {user?.hobbies.map((hobby) => (
                      <li key={hobby}>{hobby}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
