import { IMG_CDN_URL } from "./config"

const FoodItem = ({
    name,description,imageId,price
})=>{
    return(
        <div className="w-64 p-5 m-5 shadow-md">
        <img className="w-40 h-20 rounded self-center object-cover" src={IMG_CDN_URL + imageId} alt="image"/>
        <h3 className="text-lg font-bold">{name}</h3>
        <h3 className="w-full pt-2 pb-2">DESCRIPTION : {description}</h3>
        <h3 className="bg-yellow-200">Rupee : {price/100}</h3>
        </div>
    )
}

export default FoodItem;