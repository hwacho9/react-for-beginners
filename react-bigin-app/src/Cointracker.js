import { useState, useEffect } from "react";
import Todo from "./Todo";

function Cointracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json()) //response를 받아오고 받아온 response 에서 json 파일을 얻는다
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        // map을 사용하면 react 는 element 에 key 를 준다
        <div>
            <Todo />
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading,,,</strong> : null}
            <ul>
                {coins.map((coin) => (
                    <li>
                        {coin.name} ({coin.symbol}):{coin.quotes.USD.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cointracker;
