import React, { Component } from "react";
import Typical from "react-typical";
import { Icon } from '@iconify/react';
import Switch from "react-switch";
import avatar from "../assets/images/header/Vahid.webp";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    var bannerHeight = window.innerHeight < window.innerWidth ? window.innerHeight / 2 : window.innerWidth / 2;
    var mobileVersion = bannerHeight < 300;
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <div
        id="home"
        className="container"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center',
        }}
      >
        {!mobileVersion && <div>
          <h1 style={{ color: "#f4f4f4", margin: '0 auto', marginTop: 10, fontSize: '350%', textAlign: 'center' }}>
            <span>About me</span>
          </h1>
          <div
            style={{
              width: '200px',
              height: '4px',
              borderRadius: 3,
              backgroundColor: '#f4f4f4',
              margin: '0 auto',
              marginBottom: 50
            }}
          />
        </div>}
        <div className= "row">
          <div
            className= "col-xl-4"
          >
            <img
              src={avatar}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 10,
                marginTop: mobileVersion ? -250 : 0,
              }}
            />
            <h1 style={{ color: "#f4f4f4", marginBottom: 7, textAlign: 'center' }}>
              <span style={{ fontSize: '4.0vh' }}>Vahid Bashiri</span>
            </h1>
            <h1 style={{ color: "#f4f4f4", fontSize: '4vh', textAlign: 'center'}}>
              <a style={{ color: "#f4f4f4", textDecoration: "none"}} href={"mailto:vbashiri1995@gmail.com"}>
                <span style={{ margin: 7 }} className="iconify" data-icon="mdi:email" />
              </a>
              <a style={{ color: "#f4f4f4", textDecoration: "none"}} href={"https://www.linkedin.com/in/vbashiri/"}>
                <span style={{ margin: 7 }} className="iconify" data-icon="mdi:linkedin" />
              </a>
              <a style={{ color: "#f4f4f4", textDecoration: "none"}} href={"https://www.instagram.com/moolfa/"}>
                <span style={{ margin: 7 }} className="iconify" data-icon="mdi:instagram" />
              </a>
            </h1>
          </div>
          <div
            className="col-xl-8"
            style={{display: 'flex', alignItems: 'center'}}
          >
            <h3
              style={{
                color: "#f4f4f4",
                marginBottom: 20,
                textAlign: 'justify',
                textAlignLast: 'center',
                maxWidth: "100%",
                marginLeft: 10,
                marginRight: 10,
              }}
            >
            <span style={{ fontSize: '2.5vh' }}>
              I have an overall six years of programming experience in the educational and professional environments. I’m good at communication and work collaboratively in a team. I have experience in making games according to a business plan as well as freelance prototypes and I’m eager to learn.
            </span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
