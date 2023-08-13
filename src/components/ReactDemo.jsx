// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, memo, useEffect, useDebugValue } from "react";

const UserCardComponent = () => {
  const [name, setName] = useState();
  const [location, setLocation] = useState();


  return (
    <div className="card" >
      <div>Name: <input value={name} onChange={(e) => setName(e.target.value)} /></div>
      <div>Location: <input value={location} onChange={(e) => setLocation(e.target.value)} /></div>
    </div>
  );
}

const useStatus = () => {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(Math.random() > 0.5)
  }, []);
  return status;
};

const UserStatusComponent = () => {
  const status = useStatus();
  return (
    <div className="card" >

      User Connected?: <div className={String(status)}> </div> {String(status)}
    </div>
  );
}

const ReRenderedComponent = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="a-box">
      <ComponentB />
      <ComponentC count={count} onClick={onClick} />
    </div>
  );
};

const ComponentB = () => {
  return <div className="a1-box">
    <div>Hooks Demo</div>
  </div>;
};

const ComponentC = ({ count, onClick }) => {
  return (
    <div className="a2-box">
      <button onClick={onClick}>click </button>{count}
    </div>
  );
};

const UserCardsComponent = ({ stories }) => {
  const items = stories.slice();
  items.push({ id: 'create', label: 'Create Story' });
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="card" style={{
      backgroundColor: isHover && '#ddd'
    }}>
      <ul
        onPointerEnter={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}

      >
        {items.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

export const ReactDemo = () => {
  const [stories] = useState(initialStories)

  return (
    < div className="react-demo" >
      github.com/siwalikm/demo-debug-app
      <UserCardComponent />
      <UserStatusComponent />
      <ReRenderedComponent />
      <UserCardsComponent stories={stories} />
    </div >
  );
};
