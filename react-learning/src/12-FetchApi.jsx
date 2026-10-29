// we use useeffect because we want to fetch the data when the component loads.
import { useEffect, useState } from "react";

function FetchApi()
{
    // store user received from api
    const [users, setUser] = useState([]);

    useEffect(()  => {
        // This sends a request to the API.
        fetch("https://jsonplaceholder.typicode.com/users")
       //  The API sends data as JSON.
        .then((Response) => Response.json())
        // The received data is stored in state.
        .then((data) => {
            setUser(data);
        });
    }, []);
    // [] symbol says Fetch the data only once when the page first loads.

    return (
        <div>
            <h1>Users</h1>
       // Now users is no longer empty. React loops through the array and displays each user's name.
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}

        </div>
    )
}

export default  FetchApi;