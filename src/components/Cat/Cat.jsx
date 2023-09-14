import PropTypes from 'prop-types'

const Cat=({data,handleCat})=>{
    const {name,price,url,breed}=data

    const handleSelectCat=()=>{
        handleCat(data)
    }
    return (
        <div>
            <div className="rounded-md  shadow-lg bg-gray-100">
                <img className="h-60 w-full rounded-md" src={url}  />
                <h2 className="mt-5 px-2">Cat Name: {name}</h2>
                <p className="mt-2 px-2">Breed: {breed}</p>
                <p className="mt-5 px-2 text-center">Price:<span className="font-semibold"> ${price}</span> </p>
                <div className="text-center py-5">
                <button onClick={handleSelectCat} className="bg-violet-300 px-6 py-1 font-semibold text-lg rounded-md hover:bg-violet-400">Buy</button>
                </div>
            </div>
        </div>
    )
}

    Cat.propTypes={
        data:PropTypes.object.isRequired,
        handleCat:PropTypes.func.isRequired
    }
export default Cat