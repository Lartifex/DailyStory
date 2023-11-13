import { useState } from "react";
import { ReactComponent as Heart } from "../svg/heart-solid.svg";
import "../pages/styles/savedStory.css";

const LikeButton = ({ active, markAsFavorite }) => {
  return (
    <div className="heartIcon" style={{ width: "2.2rem" }}>
      <Heart
        isActive={active}
        onClick={() => markAsFavorite(!active)}
        animationScale={1.2}
        animationTrigger="both"
        animationDuration={0.2}
        className={`customHeart${active ? " active" : ""}`}
      />
    </div>
  );
};

export default LikeButton;
