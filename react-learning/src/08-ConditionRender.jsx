import { useState } from "react";

{/*  Conditional Rendering means Display different content depending on a condition. The UI changes based on a condition. */}



function ConditionRender()
{
{/* When the component loads for the first time, start with false value. */}

const [isLoggedIn, setIsLoggedIn] = useState(false);

return (
    <div>
        <h1> {isLoggedIn ? "welcome to you" : "please login" }</h1>

         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {/* in ititial state {false} */}
        {isLoggedIn ? "Logout" : "Login"}
        </button>

    </div>
)
}

export default ConditionRender;
