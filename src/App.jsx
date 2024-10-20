import { useState,useRef } from "react";

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

export default function App() {
    const [showStory,setShowStory] = useState(false);
    const [xItem, setXItem] = useState([]);
    const [yItem, setYItem] = useState([]);
    const [zItem, setZItem] = useState([]);
    const [name,setName] = useState("Bob");
    const [ukus,setUkus] = useState("us");
    const [temp,setTemp] = useState("94 fahrenheit");
    const [weight,setWeight]= useState("300 pounds");
    const customname=useRef();
    const xItems = ["Willy the Goblin","Big Daddy","Father Christmas"];
    const yItems = ["the soup kitchen","Disneyland","the White House"];
    const zItems = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

    function handleClick(event){
        event.preventDefault();
        setXItem(randomValueFromArray(xItems));
        setYItem(randomValueFromArray(yItems));
        setZItem(randomValueFromArray(zItems));
        setShowStory(true);
        const customName=customname.current.value;
        if(customName!=""){setName(customName);}
        else{setName("Bob")}
        if(ukus=="uk"){
            setTemp("34 centigrade");
            setWeight("21 stone");
        }else{
            setTemp("94 fahrenheit");
            setWeight("300 pounds");
        }
    }

    return (
      <>
        <div>
            <label htmlFor="customname" >Enter custom name:</label>
            <input 
            type="text" 
            placeholder=""
            ref={customname}
            />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus === "us"} onChange={(e)=>setUkus("us")}/>
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} onChange={(e)=>setUkus("uk")}/>
        </div>
        <div>
          <button onClick={handleClick}>Generate random story</button>
        </div>
        {showStory && (
          <p>
            It was {temp} outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}. {name} saw the whole thing, but was not surprised — {xItem} weighs {weight}, and it was a hot day.
          </p>
        )}
      </>
    );
}