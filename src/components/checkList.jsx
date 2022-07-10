import cx from "classnames";
import { Component } from "react";

export default class LikeButton extends Component {
  state = {
    likes: 100,
    isLiked: true,
  };

  handleClick = () => {
    this.state.isLiked === true
      ? this.setState({
          likes: this.state.likes + 1,
          isLiked: !this.state.isLiked,
        })
      : this.setState({
          likes: this.state.likes - 1,
          isLiked: !this.state.isLiked,
        });
  };
  render() {
    return (
      <>
        <div>
          <button
            onClick={this.handleClick}
            className={!this.state.isLiked ? "like-button" : "liked"}
          >
            Like | {this.state.likes}
          </button>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #5068e2;
                        border-style:solid;
                        border-width:2.5px;
                        border-color:#a0a0ab;
                        width:160px;
                        height:48px;
                        cursor:pointer;
                        font-weight: bold;
                        font-family:sans-serif;
                        font-size:23px;
                        display:flex;
                        justify-content:center;
                        align-items:center;

                    }
                   .liked {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #898990;
                        border-style:solid;
                        border-width:2.5px;
                        border-color:#a0a0ab;
                        width:160px;
                        height:48px;
                        cursor:pointer;
                        font-weight: normal;
                        font-family:sans-serif;
                        font-size:23px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                   }
      `}</style>
      </>
    );
  }
}
