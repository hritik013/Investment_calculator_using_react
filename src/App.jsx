import { useState } from 'react';
import Results from './compoents/Result.jsx';
import UserInput from './compoents/UserInput.jsx';
import Header from './compoents/header.jsx';

function App() {
  const [userInput, setUserInput]= useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 10,
    duration: 5,
  });
  const inputIsValid=  userInput.duration>=1;
  function handleChange(inputIdentifier,newValue){
    setUserInput(prevInput=>{
   return{
       ...prevInput,
       [inputIdentifier]:+newValue,
    };
    });
   }
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className='center'>Please Enter a Valid Duration(greater than 0).</p>}
    {inputIsValid &&<Results input={userInput}/> }
    </>
  )
}

export default App
