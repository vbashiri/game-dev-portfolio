import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class ProjectDetailsModal extends Component {
  render() {
    var sideLength = this.props.desc ? "65vmin" : "75vmin";
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
      var title = this.props.data.title;
      var description = this.props.data.description;
      var url = this.props.data.url;
      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
      }
      if (this.props.data.images) {
        var img = images.map((elem, i) => {
          return <div style={{ height: '100%', width: '100%', flex: 1}}>
              <img key={i} src={elem}
                   style={{ objectFit: 'contain',
                     maxHeight: sideLength,
                     maxWeight: sideLength,
                     width: '100%',
                     height: 'auto'}}
              />
          </div>;
        });
        if (this.props.data.youtube) {
          img.splice(0, 0,
            <div key={10} style={{ backgroundColor: "#fff", display: "flex" }}>
              <iframe
                src={`https://www.youtube.com/embed/${this.props.data.youtube}`}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            );
        }
      }
      if (this.props.data.description) {
        description = this.props.data.description.split('\n').map(i => {
          return <p className="modal-description">{i}</p>
        });
      }
    }
    return (
      <Modal
        {...this.props}
        size={"lg"}
        fullscreen={"md-down"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{marginBottom: '50px', flex: 1, height: sideLength }}>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
              style={{ height: "100%", width: "100%" }}
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto" style={{ height: this.props.desc && "17vmin" }}>
            <h1 style={{ padding: "5px 5px 5px 5px" }}>
              {title}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h1>
            {description}
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
