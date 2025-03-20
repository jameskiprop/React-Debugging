import { useState } from "react";
import Counter from "./Counter";
import UserGreeting from "./UserGreeting";

function App() {
  const [user, setUser] = useState("Guest"); //default value for useState

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Debugging Checkpoint</h1>
      <Counter />
      <UserGreeting user={user} /> {/* Bug: Passing null user */}
      <button onClick={() => setUser("James")}>Login</button>
    </div>
  );
}

export default App;
