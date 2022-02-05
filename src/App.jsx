import React, {useState} from "react";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";

// https://www.youtube.com/watch?v=ks8oftGP2oc

function App() {
    const username = useInput('');
    const password = useInput('');

    const [value, setValue] = useState("")
    const debouncedSearch = useDebounce(search, 500);

    function search (query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }

    const onChange = e => {
        setValue(e.target.value);
        debouncedSearch(e.target.value);
    }

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
            <h3>Search</h3>
            <input type="text" value={value} onChange={onChange}/>

            <hr/>
            <h3>List</h3>
            <List/>
        </div>
    );
}

export default App;
