import { useState, useEffect } from "react";

function Todo() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return; //toDo가 비워져있으면 함수 작동 X
        }
        setToDos((curentArray) => [toDo, ...curentArray]); //toDo Array currentArray를 합친다 ([], ...[]) = 함수 두개 합침
        setToDo(""); // 인풋 초기화
    };
    console.log(toDos);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do,,,"
                ></input>
                <button>Add To do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {/*map 은 JS 함수 배열안에 들어있는 모든것들을 item 으로 받아 함수 실행 */}
        </div>
    );
}

export default Todo;
