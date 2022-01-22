import {Bar1, Bar2} from "./components/bars";

function App() {
  let x = aCat();
  return (
    <div>
      <h1>Trying out warevaaaaa, oh react it is</h1>
      <MyAge></MyAge>
      <Bar1></Bar1>
      <Bar2/>
      {x}
      <br></br>
      {aCat()}
    </div>
  );
}

function MyAge(){
  return(
    <div>
      <h2 className="" >Starting out on components</h2>
      <p style={{color:"red"}}>My age is 23</p>
    </div>
  )
}

function aCat(){
  return 23
}

export default App;
