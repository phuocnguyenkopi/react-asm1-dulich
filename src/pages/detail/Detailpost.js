import React from "react";
import "./Detailpost.css";

const DetailPost = (props) => {
  return (
    <div className="container detail__post">
      <div className="detail__post_info">
        <div>
          <h2>{props.item.name}</h2>
          <p>
            <i className="fa-solid fa-location-dot text-black pr-2"></i>{" "}
            {props.item.address}
          </p>
          <p className="text-blue-600 font-medium">{props.item.distance}</p>
          <p className="text-green-600 font-medium">{props.item.price}</p>
        </div>
        <div>
          <button>Reserve or Book Now!</button>
        </div>
      </div>
      <div className="detail__post_image">
        {props.item.photos.map((i) => {
          return (
            <div>
              <img key={i} src={i} alt="" />
            </div>
          );
        })}
      </div>
      <div className="detail__post_title">
        <div className="detail__post_title_right">
          <p>{props.item.title}</p>
          <p>{props.item.description}</p>
        </div>
        <div className="detail__post_title_left">
          <p className="detail__post_title_left_one">
            Perfect for a 9-night stay!
          </p>
          <p className="detail__post_title_left_second">
            Located in the real heart of Krakow, this property has an Excellent,
            location score of 9.8 !
          </p>
          <p className="detail__post_title_left_tree">
            <span>${props.item.nine_night_price} </span>
            (9 nights)
          </p>
          <div className="detail__post_title_left_btn">
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
