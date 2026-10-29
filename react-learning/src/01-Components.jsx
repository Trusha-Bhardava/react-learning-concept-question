// one component
function Header() {
  return <h1>My Website</h1>;
}

// multiple component
function App() {
  return (
    // parent element is need when you write more child elment
    <div>
      <h1>My Portfolio</h1>

      <p>I am learning React.</p>

         <Header />

      <button>Contact Me</button>
    </div>
  );
}

export default App;