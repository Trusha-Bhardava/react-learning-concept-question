{/* example: Fetch data from an API, Change the page title, Start a timer,  Play music after the page loads
 Get the user's location : sometime Fetch data only once, Change the title only when needed, Start a timer only once
This is where useEffect help */}

    import { useEffect } from "react";

function UseEffectLesson() {

  useEffect(() => {

    document.title = "React Learning";  
    console.log(document.title);

  }, []);
   // [] symbol says Run only once when the component first loads.
  return (
    <div>
      <h1>change title</h1>
    </div>
  );
}

export default UseEffectLesson;

