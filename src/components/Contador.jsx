import { useState } from "react";

export default function Contador() {
    const [count, setCount] = useState(0);
    return (
       <div>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
        <p>Contador: {count}</p>
       </div>
    );
}