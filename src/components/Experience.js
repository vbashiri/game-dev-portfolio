import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge
              pill
              bg={"#AE944F"}
              className=" main-badge
              mt-xl-2 mt-md-2 mt-sm-2
              mr-xl-4 mr-md-3 mr-sm-2
              mb-xl-4 mb-md-3 mb-sm-2"
              key={i}
            >
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge
              pill
              bg={"#f9f5e9"}
              color={"#000000"}
              className="experience-badge
              mt-xl-4 mt-md-3 mt-sm-2
              mr-xl-4 mr-md-3 mr-sm-2
              mb-xl-2 mb-md-2 mb-sm-2"
              key={i}
            >
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ paddingLeft: "20px" }}
            dateClassName="element-date"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<img src={work.companyIcon} style={{ maxWidth: '100%', maxHeight: '100%', padding: 5 }} />}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h1
              className="vertical-timeline-element-title"
              style={{ textAlign: "left", fontSize: "2.8vmin" }}
            >
              {work.title}
            </h1>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left", fontSize: "1.6vmin", marginLeft: "5px" }}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black", fontSize: "300%" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
