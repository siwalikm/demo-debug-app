import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserDetails } from "../fetch";
import { User } from "../constants";

export const UserDetails = () => {
  const [hobbyCount, setHobbyCount] = useState<string | number>();
  const { userId } = useParams();
  const [user, setUser] = useState<User>();

  const sumOfHobbies = (input: User) => {
    // let result = 0;
    // for (let i = 0; i < input.hobbies.length; i++) {
    //   result = i + 1;
    // }
    // setHobbyCount(result);
    setHobbyCount(input.hobbies.length);
  };

  useEffect(() => {
    getUserDetails({ userId }).then((data) => setUser(data));
  }, [userId]);

  if (!user) return null;
  return (
    <>
      <div className="grid-container">
        <div>
          <span>
            <Link to="/" className="btn">
              Go Back
            </Link>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <div>
            <button className="btn" onClick={() => sumOfHobbies(user)}>
              count hobbies
            </button>
            {hobbyCount && `${user.name} has ${hobbyCount} hobbies`}
          </div>
        </div>
      </div>
    </>
  );
};
