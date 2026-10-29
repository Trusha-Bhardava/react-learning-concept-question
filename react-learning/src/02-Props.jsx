
function  Student(props)
{
    return (
        <div>
            <h2> {props.name} </h2>
            <p>  {props.age}  </p>
        </div>
    );
}

function Propslesson()
{
   return (
    <div>
         {/* Passing different values */}
      <Student name="Rahul" age={20} />

      <Student name="Amit" age={21} />

      <Student name="Priya" age={19} />
    </div>
   )
}

export default Propslesson;