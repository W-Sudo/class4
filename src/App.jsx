import { useState,useRef } from "react";

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

export default function App() {
    const showStory= false;
    const [xItem, setXItem] = useState([]);
    const [yItem, setYItem] = useState([]);
    const [zItem, setZItem] = useState([]);
    const [name,setName] = useState("Bob");
    const [ukus,setUkus] = useState("us");
    const customname=useRef();
    const xItems = ["Willy the Goblin","Big Daddy","Father Christmas"];
    const yItems = ["the soup kitchen","Disneyland","the White House"];
    const zItems = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];
    const [isUs,setIsUs]=useState(true);
    function handleClick(event){
        event.preventDefault();
        setXItem(randomValueFromArray(xItems));
        setYItem(randomValueFromArray(yItems));
        setZItem(randomValueFromArray(zItems));
        const customName=customname.current.value;
        if(customName!=""){setName(customName);}
        else{setName("Bob")}
        if(ukus=="us"){
          setIsUs(true);
        }else{
          setIsUs(false);
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
          <input type="radio" value="us" checked={ukus === "us"} onChange={()=>setUkus("us")}/>
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} onChange={()=>setUkus("uk")}/>
        </div>
        <div>
          <button onClick={handleClick}>Generate random story</button>
        </div>
        {(xItem!=""||showStory)&& (
          <p>
            It was {isUs?"94 fahrenheit":"34 centigrade"} outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}. {name} saw the whole thing, but was not surprised — {xItem} weighs {isUs?"300 pounds":"21 stone"}, and it was a hot day.
          </p>
        )}
      </>
    );
}