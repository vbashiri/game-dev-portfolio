import React, { Component } from "react";
import "../css/Banner.css";
import Typical from "react-typical";
import Switch from "react-switch";

import sky from '../assets/images/banner/sky.gif'
import forground from '../assets/images/banner/rebel_forground.gif'
import bCloud1 from '../assets/images/banner/b_cload1.png'
import bCloud2 from '../assets/images/banner/b_cload2.png'
import bCloud3 from '../assets/images/banner/b_cload3.png'
import fCloud1 from '../assets/images/banner/f_cload1.png'
import fCloud2 from '../assets/images/banner/f_cload2.png'
import fCloud3 from '../assets/images/banner/f_cload3.png'

class Banner extends Component {

  render() {
    var bannerHeight = window.innerHeight < window.innerWidth ? window.innerHeight / 2 : window.innerWidth / 2;
    bannerHeight = bannerHeight > 300 ? bannerHeight : 300;
    return (
      <div id="banner" style={{
        height: bannerHeight,
        width: '100%',
        display: 'flex',
        flex: 1,
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}>
        <div id="sky"
             style={{
               height: bannerHeight,
               width: '100%',
               position: 'absolute',
               left: 0,
               top: 0,
               display: 'flex',
               flex: 1,
               justifyContent: 'center',
               alignItems: 'flex-end',
             }}
        >
          <img src={sky} style={{flex: 1 ,aspectRatio: 3.2}} />
        </div>
        <div id="cloud0"
             style={{height: bannerHeight}}
             className="cloud cloud0"
        >
          <img src={bCloud1} style={{flex: 1 ,aspectRatio: 3.2}} />
        </div>
        <div id="cloud1"
             style={{height: bannerHeight}}
             className="cloud cloud1"
        >
          <img src={bCloud1} style={{flex: 1 ,aspectRatio: 3.2}} />
        </div>
        <div id="cloud2"
             className="cloud cloud2"
             style={{
               height: bannerHeight,
             }}
        >
          <img src={bCloud2} style={{flex: 1 ,aspectRatio: 3.2}} />
        </div>
        <div id="cloud3"
             className="cloud cloud3"
             style={{
               height: bannerHeight,
             }}
        >
          <img src={bCloud3} style={{flex: 1 ,aspectRatio: 3.2}} />
        </div>
        <div id="cloud4"
             className="cloud cloud4"
             style={{
               height: bannerHeight,
             }}
        >
          <img src={fCloud1} style={{flex: 1 ,aspectRatio: 3.2}} />
        </div>
        <div id="cloud5"
             className="cloud cloud5"
             style={{
               height: bannerHeight,
             }}
        >
          <img src={fCloud2} style={{flex: 1 ,aspectRatio: 3.2}} />
        </div>
        <div id="cloud6"
             className="cloud6 cloud"
             style={{
               height: bannerHeight,
             }}
        >
          <img src={fCloud3} style={{flex: 1 ,aspectRatio: 3.2}} />
        </div>
        <div id="cloud7"
             className="cloud7 cloud"
             style={{
               height: bannerHeight,
             }}
        >
          <img src={fCloud2} style={{flex: 1 ,aspectRatio: 3.2}} />
        </div>
        <div id="forground"
             style={{
               height: bannerHeight,
               width: '100%',
               position: 'absolute',
               left: 0,
               top: 0,
               display: 'flex',
               flex: 1,
               justifyContent: 'center',
               alignItems: 'flex-end',
             }}
        >
          <img src={forground} style={{flex: 1 ,aspectRatio: 1.77}} />
        </div>
      </div>

    );
  }
}

export default Banner;
