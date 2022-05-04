import './App.css';
import MathExpression from './components/MathExpression';

function App() {
/*
  this is the main container and will consist of 3 components:
  *math expression - gen random numbers
  *user input - send call to api, get response
  *feedback - response passed as prop and displayed
*/
const randomNumberLeft = Math.floor((Math.random() * 100) + 1)
const randomNumberRight = Math.floor((Math.random() * 100) + 1)

  return (
    <>
      <MathExpression left={randomNumberLeft} right={randomNumberRight}/>
    </>
  );
}

export default App;
