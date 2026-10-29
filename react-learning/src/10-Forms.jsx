{/* A React form combines everything you've already learned: useState onChange onClick Event Handling */}
import { useState } from "react";

function Forms() {

  // Store the name entered by the user
  const [name, setName] = useState("");

  // Run when the form is submitted
  function handleSubmit(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Display the entered name
    alert(`Hello ${name}`);
  }

  return (
    <div>

      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        {/* User enters their name */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <br />
        <br />

        {/* Submit the form */}
        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default Forms;