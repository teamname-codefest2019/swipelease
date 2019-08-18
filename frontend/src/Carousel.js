import React, { Component } from "react";


export default class Carousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        index: 0
      };
    }
    componentDidMount() {
      this.setState({
        //data: carouselData
      });
    }
  ​
    leftClick = () => {
      if (this.state.index > 0) {
        this.setState(prevState => {
          return {
            index: prevState.index - 1,
          };
        });
      } else {
        this.setState(prevState => {
          return {
            index: 3,
          };
        });
      }
    };
  ​
    rightClick = () => {
      if (this.state.index < 3) {
        this.setState(prevState => {
          return {
            index: prevState.index + 1
          };
        });
      } else {
        this.setState(prevState => {
          return {
            index: 0
          };
        });
      }
    };
  ​
    selectedImage = () => {
      return (
        <img
          src={this.state.data[this.state.index]}
          style={{ display: "block" }}
        />
      );
    };
  ​
    render() {
      return (
        <div className="carousel">
          <div className="left-button" onClick={() => this.leftClick()}>
            {"<"}
          </div>
          {this.selectedImage()}
          <div className="right-button" onClick={() => this.rightClick()}>
            {">"}
          </div>
        </div>
      );
    }
  }