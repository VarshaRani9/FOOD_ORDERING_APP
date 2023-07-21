import { IMG_CDN_URL } from "./config";
const RestrauntCard = ({ cloudinaryImageId, name, cuisines, lastMileTravelString }) => {
    return(
    <div className="w-[200px] h-72 p-3 m-2 shadow-lg bg-gray-100">
      <img
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <h4 className="whitespace-pre-line">{cuisines.join(", ")}</h4>
      <h5>{lastMileTravelString}</h5>
    </div>
  );
}
export default RestrauntCard;