import { useMemo, useState } from "react";

export default function WithMemo() {
    function expensiveCalculation (num){
        console.log('Calculation...');
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    }
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation =  useMemo(() => expensiveCalculation(count), [count])
    
    function increment() {
        setCount((c)=>(c+1));
    }
    function addTodo() {
        setTodos((t)=>[...t, 'New Todo'])
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment} >Increment</button>

            {todos.map((todo, index)=>(
                <p key={index} >{todo}</p>
            ))}
            <button onClick={addTodo}>Add Todo</button>

            <p>Expensive Calculation</p>
            {calculation}   
        </div>
    )
    
}
