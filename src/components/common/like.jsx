import React from "react";

const Like = props => {
  const { liked, onClick } = props;
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      className={classes}
      onClick={onClick}
      aria-hidden="true"
    />
  );
};

Like.defaultProps = {
  liked: false
};

export default Like;
