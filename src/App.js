import useLoremipsum from "./libs/useLoremipsum";


function App() {
  const baconipsum = useLoremipsum(2);
  console.log(baconipsum);

  return (
    <div 
    style={{
      display:'grid',
      placeItems:'center',
      margin:'50px',
      padding:'35px',
      lineHeight:'1.75',
      border:'1px solid black',
    }}
    >
      {baconipsum}
    </div>
  );
}

export default App;
