import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the api") //useEffect 는 우리 코드가 딱 한번만 실행될 수 있게 한다
  }, []);
  return (
    <div>
      <input type="text" placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
