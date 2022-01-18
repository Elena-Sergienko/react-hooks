import React, {useState} from "react";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";

// https://www.youtube.com/watch?v=ks8oftGP2oc
// 9:32

function App() {
    const username = useInput('');
    const password = useInput('');


    return (
        <div>
            <h3>useInput</h3>
            <input type="text" {...username} placeholder="Username"/>
            <input type="text" {...password} placeholder="Password"/>
            <button onClick={() => console.log(username, password)}>Click</button>
            <hr/>
            <h3>useHover</h3>
            <Hover/>
        </div>
    );
}

export default App;
