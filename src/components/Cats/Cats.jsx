import { useEffect } from "react"
import { useState } from "react"
import Cat from "../Cat/Cat"
import PropTypes from 'prop-types'

const Cats=({handleCat})=>{
    const [cats,setCat]=useState([])
    useEffect(()=>{
        fetch("catData.json")
        .then(res=>res.json())
        .then(data=>setCat(data))
    },[])
    
    return (
        <div>

           <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 my-10">
           {
                cats.map(item=><Cat key={item.id} data={item} handleCat={handleCat}/>)
            }
           </div>

        </div>
    )
}

    Cats.propTypes={
        handleCat:PropTypes.func.isRequired
    }

export default Cats