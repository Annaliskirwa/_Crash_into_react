import {Bar1, Bar2, MyCatsAge} from "./components/bars";
import StateButton from "./components/StateButton";
import EffectComp from "./components/EffectComp";

function App() {
  let x = catsAge(23)
  return (
    <div>
     {/* <StateButton/> */}
     <EffectComp/>
    </div>
  );
}

function catsAge(age){
  return age + 5;
}

export default App;
