// this is props destructing example    

function student({props})
{
    return (
        <div>
        <h2> {props.name} </h2>
        <p>  {props.age} </p>
        </div>
    );
}

    function Student({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>

      <p>{age}</p>
    </div>
  );
}