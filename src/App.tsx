import { useState } from "react";
import Customer from "./pages/Customer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Customer />
    </>
  );
}

export default App;
