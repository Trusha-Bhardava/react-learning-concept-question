{/* clickling Login shows:Login Successful  Clicking Logout shows:Logout Successful */}

function EventHandling()
{
    function showmessage()
    {
        alert("login succesfully");
    }

    function showmessage2()
    {
        alert("logout successfully");
    }

    return (
        <div>
            <button onClick={showmessage}>login</button><br/><br/>
             <button onClick={showmessage2}>logout</button>
        </div>
    )
}

export default EventHandling;