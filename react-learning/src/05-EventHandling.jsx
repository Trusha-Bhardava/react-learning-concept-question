{/* event handling means telling react what to do when an event happens. */}

function EventHandling()
{
    {/* this function run when button is clicked */}

    function Showmessage()
    {
        alert("button clicked");
    }

    return (
        <div>
            <button onClick={Showmessage}>
                 click Me
            </button>
        </div>
    )
}

export default EventHandling;