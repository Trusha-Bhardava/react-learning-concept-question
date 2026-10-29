{/* onChange runs a function whenever the value of an input changes. */}
{/* example = Typing in a text box,Selecting an option,Checking a checkbox */}

import {useState} from "react";

function Onchange()
{
    {/* store input valur */}
    const [name,setName] = useState("");

    return (
        <div>
            <h1> enter your name:</h1>

            <input type="text" onChange={(event) => setName (event.target.value)} />

            <h2>{name}</h2>
        </div>
    )
}

export default Onchange;

