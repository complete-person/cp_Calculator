import { useState } from 'react';

const Calculator = () => {
    let [result, setResult] = useState("");
    let [value, setValue] = useState(""); 

    //update value
    const updateVal = (e) => {
        if (value.length != 10) {
            setValue(value.concat(e.target.name));
        }
    }

    //clear
    const clear = () => {
        setValue("");
        setResult("");
    }

    //delete 
    const delVal = () => {
        setValue(value.slice(0, -1))
    }

    //result
    const calcResult = () => {
        try {
            setResult(eval(value.toString()));
        } catch (error) {
            setResult("Error")
        }
    }

    
    return ( 
        <div className="calculator">
            <div className="display">
                <input value={value} readOnly className="prev_value" />
                <input value={result} readOnly className="new_value" />
            </div>
            <div className="keypad">
                <button
                    onClick={clear}
                    name="ac" 
                    className='keypad_btn clear red'>Ac</button>
                <button
                    onClick={delVal}
                    name="del" 
                    className='keypad_btn red'>Del</button>
                <button
                    onClick={updateVal}
                    name="/" 
                    className='keypad_btn blue'>/</button>
                <button
                    onClick={updateVal}
                    name="7" 
                    className='keypad_btn'>7</button>
                <button
                    onClick={updateVal}
                    name="8" 
                    className='keypad_btn'>8</button>
                <button
                    onClick={updateVal}
                    name="9" 
                    className='keypad_btn'>9</button>
                <button
                    onClick={updateVal}
                    name="*" 
                    className='keypad_btn blue'>*</button>
                <button
                    onClick={updateVal}
                    name="4" 
                    className='keypad_btn'>4</button>
                <button
                    onClick={updateVal}
                    name="5" 
                    className='keypad_btn'>5</button>
                <button
                    onClick={updateVal}
                    name="6" 
                    className='keypad_btn'>6</button>
                <button
                    onClick={updateVal}
                    name="-" 
                    className='keypad_btn blue'>-</button>
                <button
                    onClick={updateVal}
                    name="1" 
                    className='keypad_btn'>1</button>
                <button
                    onClick={updateVal}
                    name="2" 
                    className='keypad_btn'>2</button>
                <button
                    onClick={updateVal}
                    name="3" 
                    className='keypad_btn'>3</button>
                <button
                    onClick={updateVal}
                    name="+" 
                    className='keypad_btn blue'>+</button>
                <button
                    onClick={calcResult}
                    name="=" 
                    className='keypad_btn equal blue'>=</button>
                <button
                    onClick={updateVal}
                    name="0" 
                    className='keypad_btn'>0</button>
                <button
                    onClick={updateVal}
                    name="." 
                    className='keypad_btn blue'>.</button>
            </div>
        </div>
    );
}
 
export default Calculator;