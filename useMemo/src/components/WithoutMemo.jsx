import { useState } from "react"
export default function WithoutMemo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const expensivecalculation = (num) => {
        console.log('calculation...');
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    }
    const calculation = expensivecalculation(count);
    const increment = () => {
        setCount((c) => (c + 1))
    }
    const add = () => {
        setTodos((t)=>[...t, 'New Todo'])
    }
    return (
        <div>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>
            })}
            <button onClick={add} >Add Todo</button>
            <p>Count: {count}</p>
            <button onClick={increment} >+</button>
            <p>Expensive Collection</p>
            {calculation}
        </div>
    )
}
