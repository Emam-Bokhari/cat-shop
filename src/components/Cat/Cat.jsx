const Cat=({data})=>{
    console.log(data)
    const {name,price,url,breed}=data
    return (
        <div>
            <div className="border-2 border-red-500 rounded-md  shadow-lg bg-gray-100">
                <img className="h-60 w-full rounded-md" src={url}  />
                <h2 className="mt-5 px-2">Cat Name: {name}</h2>
                <p className="mt-2 px-2">Breed: {breed}</p>
                <p className="mt-5 px-2 text-center">Price:<span className="font-semibold"> ${price}</span> </p>
            </div>
        </div>
    )
}
export default Cat