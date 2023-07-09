import { useEffect, useState } from "react";
import { API_PATH } from "../constants";
import { useParams, Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  avatar: string;
  hobbies: Array<string>;
  theme: string;
}

const getData = async ({ userId }: { userId: any }) => {
  const response = await fetch(`${API_PATH}/${userId}`);
  const data = await response.json();
  return data;
};

export const UserDetails = () => {
  const { userId } = useParams();
  console.log(userId);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getData({ userId }).then((data) => setUser(data));
  }, [userId]);

  if (!user) return null;
  return (
    <>
      <div className="grid-container">
        <Link to="/" className="btn">
          Go Back
        </Link>
        <div
          className="grid-item"
          key={user.id}
          style={{ background: user.theme }}
        >
          <img
            src={user.avatar}
            alt={user.name}
            style={{ transform: "scale(1.6) translateY(-50px)" }}
          />
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
      </div>
    </>
  );
};
