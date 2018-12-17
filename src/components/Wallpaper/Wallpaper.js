import "./Wallpaper.css";

import React, { Component } from "react";

const wallpapers = [
  "https://source.unsplash.com/user/tkhwang/likes/1800x1300",
  "https://source.unsplash.com/collection/3376552/1800x1300",
  "https://source.unsplash.com/collection/540518/1800x1300"
  // 'https://t1.daumcdn.net/cfile/tistory/99687E4F5A8BDAD53A'
];

const PHOTO_UPDATE_DURATION = 60000;

class Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallpaper: ""
    };

    this.getRandomWallpaper = this.getRandomWallpaper.bind(this);
  }

  componentDidMount = () => {
    this.getRandomWallpaper();
    setInterval(() => this.getRandomWallpaper(), PHOTO_UPDATE_DURATION);
  };

  getRandomWallpaper() {
    let index = Math.floor(Math.random() * wallpapers.length);
    this.setState({
      wallpaper: wallpapers[index]
    });
  }

  render() {
    return (
      <img className="wallpaper" src={this.state.wallpaper} alt="wallpaper" />
    );
  }
}

export default Wallpaper;
