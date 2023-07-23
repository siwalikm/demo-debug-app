import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserList } from "../fetch";
import { User } from "../constants";

export const UserList = () => {
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    getUserList().then((data) => setUsersList(data));
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
