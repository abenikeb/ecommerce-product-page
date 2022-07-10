import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Like extends React.Component {
  render() {
    const classes = this.props.selected
      ? "fa-heart fa-solid pointer"
      : "fa-regular fa-heart pointer";
    return <FontAwesomeIcon onClick={this.props.onToggle} icon={classes} />;
  }
}

export default Like;
