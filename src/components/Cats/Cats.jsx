import { useEffect } from "react"
import { useState } from "react"
import Cat from "../Cat/Cat"

const Cats=()=>{
    const [cats,setCat]=useState([])
    useEffect(()=>{
        fetch("catData.json")
        .then(res=>res.json())
        .then(data=>setCat(data))
    },[])
    
    return (
        <div>

           <div className="grid grid-cols-3 gap-5 my-10 border-2 border-green-500">
           {
                cats.map(item=><Cat key={item.id} data={item} />)
            }
           </div>

        </div>
    )
}
export default Cats