import Cart from "../Cart/Cart"
import PropTypes from 'prop-types'

const Carts = ({ selectCat, totalCost, remaining }) => {
    return (
        <div>
            <div>
                <h2 className="text-2xl font-semibold bg-violet-200 py-2 text-center rounded-md md:w-80 lg:w-96 md:mt-10">Total Cart: {selectCat.length}</h2>
                
                <p className="mt-5 text-center">Total Cost: ${totalCost}</p>
                <p className="mt-5 text-center">Remaining Balance: ${remaining}</p>
               
                <div>
                    {
                        selectCat.map((item, index) => <Cart key={index} data={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

Carts.propTypes = {
    selectCat: PropTypes.array.isRequired,
    totalCost:PropTypes.number.isRequired,
    remaining:PropTypes.number.isRequired
}

export default Carts