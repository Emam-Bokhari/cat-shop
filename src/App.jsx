import { useState } from "react"
import Carts from "./components/Carts/Carts"
import Cats from "./components/Cats/Cats"
import Header from "./components/Header/Header"

const App = () => {
  const [selectCat, setSelectCat] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const handleCat = (cat) => {
    let count = cat.price
    const include = selectCat.find(item => item.id === cat.id)

    if (include) {
      return alert("Already included")
    }

    selectCat.forEach(item => {
      count = count + item.price
    })

    if (count > 500) {
      return alert("Your balance is over")
    }

    const toralRemaining= 500-count 
    setRemaining(toralRemaining)

    setTotalCost(count)
    const newCat = [...selectCat, cat]
    setSelectCat(newCat)
  }

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10">
        <Header />
        <div className="flex flex-col md:flex-row gap-5">
          <Cats handleCat={handleCat} />
          <Carts selectCat={selectCat} totalCost={totalCost} remaining={remaining}/>
        </div>
      </div>
    </div>
  )
}
export default App