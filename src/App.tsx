import { useEffect, useState } from "react";
import "./App.css";

interface User {
  id: number;
  name: string;
  avatar: string;
  hobbies: Array<string>;
  theme: string;
}

const getData = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/siwalikm/demo-proxyman-app/users/"
  );
  const data = await response.json();
  return data;
};

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    getData().then((data) => setUsersList(data));
  }, []);

  return (
    <>
      <div className="grid-container">
        {usersList.map((user) => (
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
        ))}
      </div>
    </>
  );
}

export default App;
