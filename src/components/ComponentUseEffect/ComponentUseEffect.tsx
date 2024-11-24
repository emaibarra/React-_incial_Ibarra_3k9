import { useEffect, useState } from "react"


export const ComponentUseEffect = () => {
    const [ estate,setEstate]= useState(false);
    
    useEffect(()=>{
        console.log(estate);
    }, [estate]);
    
    useEffect(()=>{
        console.log("Componente levantado");
        return () =>{
            console.log("Componente desmontado");
        }
    }, []);


  return (
    <div>
        <p>{estate ? "Es true" :"Es false"}</p>
        <button onClick={()=>{
            setEstate(!estate);
        }}>cambiar estado</button>
    </div>
  )
}
