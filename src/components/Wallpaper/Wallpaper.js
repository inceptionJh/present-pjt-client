import './Wallpaper.css';

import React, { Component } from 'react';

const wallpapers = [
  // "https://source.unsplash.com/user/tkhwang/likes/1800x1300",
  // "https://source.unsplash.com/collection/3376552/1800x1300",
  // "https://source.unsplash.com/collection/540518/1800x1300"
  'https://t1.daumcdn.net/cfile/tistory/99687E4F5A8BDAD53A',
  'http://www.yangel.org/DODOxe/files/attach/images/269/279/9c6156e8c1a6335254cd519f437d3949.jpg',
  'https://i.pinimg.com/originals/f3/51/4d/f3514d62cbc24b1fa9814074c292fe15.jpg',
  'https://t1.daumcdn.net/cfile/tistory/2449FB3E56D0879D07',
  'https://img.fmnation.net/files/attach/images/425025/676/653/008/f0b8c61d9bd30571d32261fee65295a0.jpg',
  'https://i.pinimg.com/originals/7f/ae/02/7fae02ba19131bf9a71fc2788d4e4dcc.jpg'
];

// const PHOTO_UPDATE_DURATION = 60000;

class Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallpaper: ''
    };

    this.getRandomWallpaper = this.getRandomWallpaper.bind(this);
  }

  componentDidMount = () => {
    // this.getRandomWallpaper();
    // setInterval(() => this.getRandomWallpaper(), PHOTO_UPDATE_DURATION);
  };

  getRandomWallpaper() {
    let index = Math.floor(Math.random() * wallpapers.length);
    this.setState({
      wallpaper: wallpapers[index]
    });
  }

  render() {
    return (
      // <img className="wallpaper" src={this.state.wallpaper} alt="wallpaper" />
      <div className="video-container wallpaper">
        <video loop autoPlay muted>
          <source
            src="https://s3.ap-northeast-2.amazonaws.com/present-video-new/8s1nok6ep6r1f65i34p2.hd.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

export default Wallpaper;
