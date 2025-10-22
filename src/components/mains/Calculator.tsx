import { useState } from "react"
import styled from "styled-components";
export default function Calculator(){

    const[inputOne,setInputOne]=useState("");
    const[inputTwo,setInputTwo]=useState("");

    const[result, setResult]=useState("");

    function add(){
        setResult(String(Number(inputOne)+ Number(inputTwo)))
    }
    function subtract(){
        setResult(String(Number(inputOne)- Number(inputTwo)))
    }
    function multiply(){
        setResult(String(Number(inputOne)* Number(inputTwo)))
    }
    function divide(){
        setResult(String(Number(inputOne)/ Number(inputTwo)))
    }

    function clearCalc(){
        setInputOne("");
        setInputTwo("");
        setResult("");
    }


    const CalculatorSection = styled.section`
  background-color: #f0f8f0;
  padding: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  @media screen and (max-width: 1000px) {
    align-items: stretch;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  text-align: center;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  width: 200px;
  background-color: #fff;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 1000px) {
    button {
      width: 50%;
    }
  }
`;

const CalcButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  background-color: #004d00;
  color: #fffdd0;
  cursor: pointer;

  &:hover {
    background-color: #006600;
  }
`;

const Output = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`;
    
function power(){
let base = Number(inputOne);
let power = Number(inputTwo);
let result = 1;

    if( power >= 0){
        for (let i = 0; i < power; i++) {
            result = result * base;
        }
    }
    else {
        let pos = 1;
        for (let i = 0; i < Math.abs(power); i++) {
            pos = pos * base;
        }
        result = 1 / pos;

    }
    setResult(String(result));
}


    
   return (
  <>
     <CalculatorSection>
      <h2>Calculator</h2>

      <div>
        <Label htmlFor="one">First number:</Label>
        <Input
          type="text"
          id="one"
          value={inputOne}
          onChange={(e) => setInputOne(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="two">Second number:</Label>
        <Input
          type="text"
          id="two"
          value={inputTwo}
          onChange={(e) => setInputTwo(e.target.value)}
        />
      </div>

      <ButtonGroup >
        <CalcButton onClick={add}> + </CalcButton>
        <CalcButton onClick={subtract}> - </CalcButton>
        <CalcButton onClick={multiply}> * </CalcButton>
        <CalcButton onClick={divide}> / </CalcButton>
        <CalcButton onClick={power}> ** </CalcButton>
        <CalcButton onClick={clearCalc}> Clear </CalcButton>
      </ButtonGroup>

    <Output style={{ color: Number(result) < 0 ? "red" : "#2f4f2f" }}>{result}</Output>


    </CalculatorSection>
  </>
);

}