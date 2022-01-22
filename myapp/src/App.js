import {Bar1, Bar2, MyCatsAge} from "./components/bars";

function App() {
  let x = catsAge(23)
  return (
    <div>
      <h1><MyCatsAge age = {23}/></h1>
      <h2> The cat will die at {x}</h2>
    </div>
  );
}

function catsAge(age){
  return age + 5;
}

export default App;
