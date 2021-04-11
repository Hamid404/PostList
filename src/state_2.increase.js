import React,{useState} from "react";

const FuncComponent = ()=>{
    const [counter, setcounter] = useState(1);
       const incCounter=()=>{
       console.log("counter clicked"); 
       setcounter(counter+1);
    }
    return <div>
        <h3>{counter}</h3>
        <button onClick={incCounter}>inc Counter</button>
    </div>
}

export default FuncComponent;