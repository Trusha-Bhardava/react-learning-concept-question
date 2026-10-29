{/* usestate hook Stores a value. Updates the value. */}

import { useState } from "react";

function UseStatehook()
{
    {/* create state with initial value 0 */}
    const [count,setCount] = useState(0);

    return (
        <div>
            {/* display current count */}
            <h1>{count}</h1>

            {/* increase count when button is clicked */}

            <button onClick={() => setCount (count + 1)}>
                Increase
            </button>
        </div>
    )
}

export default UseStatehook;