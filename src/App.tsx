import { useState } from "react";
import "./App.scss";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="count" onClick={() => setCount(count + 1)}>
        Нажми на меня: {count}
      </div>
    </div>
  );
}
