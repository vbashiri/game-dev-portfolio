import React, { Component } from "react";
import Typical from "react-typical";
import avatar from "../assets/images/header/Vahid.webp";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false, windowInnerHeight: window.innerHeight, bannerSize: 300, mobileVersion: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  componentDidMount() {
      this.calculateBannerHeight(window.innerHeight, window.innerWidth);

      window.addEventListener("orientationchange", () => {
          this.calculateBannerHeight(window.innerWidth, window.innerHeight);
      })
  }

    calculateBannerHeight(height, width) {
        var bannerHeight = height < width ? height / 3 : width / 2;
        bannerHeight = bannerHeight > 300 ? bannerHeight : 300;
        var mobileVersion = (bannerHeight <= 300 && width < 1500) || ((width < (height + 100) * 3 / 4) && width < 1500);
        this.setState({windowInnerHeight: height, bannerSize: bannerHeight, mobileVersion});
    }

    onThemeSwitchChange(checked) {
      this.setState({checked});
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
          height: this.state.mobileVersion ? this.state.windowInnerHeight - this.state.bannerSize + 100 :
              this.state.windowInnerHeight - this.state.bannerSize,
          width: '100%',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center',
        }}
      >
        {!this.state.mobileVersion && <div>
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
              marginBottom: 40
            }}
          />
        </div>}
        <div className= "row">
          <div
            className= "col-xl-4"
            style={{ marginTop: this.state.mobileVersion ? -70 : 0, }}
          >
            <img
              src={avatar}
              style={{
                width: this.state.mobileVersion ? 140 : 200,
                height: this.state.mobileVersion ? 140 : 200,
                borderRadius: '50%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 10,
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
            <span style={{ fontSize: '2.3vh' }}>
                Passionate game developer who have over 7 years of experience in software engineering and worked 5 years dedicatedly making games using Unity engine. Thrive on collaborative teamwork and have led small multi-disciplinary teams with different skill levels to deliver polished games. Have experience developing android libraries as well as Unity tools to ease game production and always welcome new challenges and opportunities to learn.
                Have a look at my technical articles in <a style={{color: "#AE944F"}} href={"https://medium.com/@vbashiri1995"}>Medium</a>.
            </span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
