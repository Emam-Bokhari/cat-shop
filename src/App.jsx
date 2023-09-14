import Cats from "./components/Cats/Cats"
import Header from "./components/Header/Header"

const App = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10">
      <Header />
      <Cats/>
      </div>
    </div>
  )
}
export default App