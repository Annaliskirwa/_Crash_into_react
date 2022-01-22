import {Bar1, Bar2} from "./components/bars";

function App() {
  return (
    <div>
      <h1>Trying out warevaaaaa, oh react it is</h1>
      <MyAge></MyAge>
      <Bar1></Bar1>
      <Bar2/>
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

export default App;
