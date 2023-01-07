import React from "react";
import "./item.css";
import StarIcon from "@mui/icons-material/Star";
import avatar from "../../assets/images/avatar.png";
import hours from "../../assets/images/hours.png";
import SignalCellularConnectedNoInternet1BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet1Bar";
export default function Item({ price, title, image,expired,teacher,name }) {
  return (
    <div className="rootItem">
      <img src={image} alt="#" className="img" />
      <div className="content">
        <div className="divPrice">
          <p className="Management">Management</p>
          <div className="divExpiredPrice">
            <p className="expired">{expired}</p>
            <p className="price">{price}</p>
          </div>
        </div>
        <h4 className="title">{title}</h4>
        <div className="divScore">
          <StarIcon className="star" />
          <h4 className="starSub">
            4.48 <span>(1,089)</span>
          </h4>
          <h4 className="starSub2">
            108k <span>student</span>
          </h4>
        </div>
        <div className="avatar">
          <img src={avatar} alt="#" className="imgAvatar" />
          <h5>{name} </h5>
          <a href="/">{teacher}</a>
        </div>
        <div className="hours">
          <img src={hours} alt="#" />
          <p>100 hours</p>
          <SignalCellularConnectedNoInternet1BarIcon className="net" />
          <p>Beginner</p>
        </div>
      </div>
    </div>
  );
}
