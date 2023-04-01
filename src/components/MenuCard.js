import { CDN_MENUCARD_IMG_URL } from "../config";

const MenuCard = ({ data }) => {
  return (
    <>
      <div className="menu-card">
        <div className="menu-description">
          <h3>{data?.card?.info?.name}</h3>
          <h4> Rs : {data?.card?.info?.price / 100} </h4>
          <p>{data?.card?.info?.description}</p>
          {console.log("Printinf the Description:  ")}
          {console.log(data?.card?.info?.description)}
        </div>
        <img src={CDN_MENUCARD_IMG_URL + data?.card?.info?.imageId} />
      </div>
    </>
  );
};

export default MenuCard;
