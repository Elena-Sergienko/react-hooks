import React from "react";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";

// https://www.youtube.com/watch?v=ks8oftGP2oc
// 20:29

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

            <hr/>

            <h3>List</h3>
            <List/>
        </div>
    );
}

export default App;
