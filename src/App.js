import useLoremipsum from "./libs/useLoremipsum";


function App() {
  const baconipsum = useLoremipsum(12);
  console.log(baconipsum);

  return (
    <div className="App">
    </div>
  );
}

export default App;
