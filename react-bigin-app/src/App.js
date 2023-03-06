import { useState, useEffect } from "react";
import Todo from "./Todo";

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {}, []);
    return (
        <div>
            <Todo />
            <h1>The Coins!</h1>
            {loading ? <strong>Loading,,,</strong> : null}
        </div>
    );
}

export default App;
