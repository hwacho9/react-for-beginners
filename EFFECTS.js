import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
    useEffect(() => {
        console.log("Created");
        return () => console.log("destroyed"); //cleanup function
    }, []);
    return <h1>Hello</h1>;
}

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [showing, setShowing] = useState(false);
    const onShowing = () => setShowing((prev) => !prev);
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    useEffect(() => {
        console.log("I run only once"); //useEffect 는 우리 코드가 딱 한번만 실행될 수 있게 한다
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' changes");
    }, [keyword]); //keyword 가 변화할 때만 실행된다 []에 넣은 변수가 변화할때 싫행
    useEffect(() => {
        console.log("I run when 'counter' changes");
    }, [counter]);
    useEffect(() => {
        console.log("I run when 'keyword & counter' changes");
    }, [keyword, counter]);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onShowing}>{showing ? "Hide" : "Show"}</button>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here"
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
            <h1 className={styles.title}>Welcome back!</h1>
            <Button text={"Continue"} />
        </div>
    );
}

export default App;
