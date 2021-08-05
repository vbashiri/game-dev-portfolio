import React, { Component } from "react";
import $ from "jquery";
import { Parallax, Background } from "react-parallax";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Banner from "./components/Banner";
import Sketches from "./components/Sketches";


import iis from "./assets/images/experience/iis.png";
import colony from "./assets/images/experience/colony11.png";
import funtory from "./assets/images/experience/funtory.png";
import sut from "./assets/images/experience/sut.png";

import iust from "./assets/images/experience/iust.png";
import playground0 from "./assets/images/projects/playground/playground_icon.png";
import playground1 from "./assets/images/projects/playground/mushroom.png";
import playground2 from "./assets/images/projects/playground/spidercube.png";

import playground3 from "./assets/images/projects/playground/lake.png";

import jumpUp0 from "./assets/images/projects/jumpup/jump_up.png";

import ged from "./assets/images/arts/concept-art/Ged.PNG";
import blueFloyed from "./assets/images/arts/concept-art/BlueFloyed.PNG";
import veilOfDiscord from "./assets/images/arts/concept-art/VeilOfDiscord.PNG";
import stunningLook from "./assets/images/arts/concept-art/StunningLook.PNG";
import deatVoodoo from "./assets/images/arts/concept-art/DeathVoodoo.PNG";


import parallexBackground from "./assets/images/arts/concept-art/Ged.PNG";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {
        experience: [
          {
            technologies: ["JumpUp"],
            mainTech: ["Unity", "C#"],
            years: "2021.5",
            title: "Game Developer",
            company: "Funtory",
            companyIcon: funtory,
          },
          {
            technologies: ["Core"],
            mainTech: ["Unity", "C#"],
            years: "2020.10 - 2020.12",
            title: "Game Developer and Designer",
            company: "Colony11",
            companyIcon: colony,
          },
          {
            technologies: ["Motoshub", "Tracking"],
            mainTech: ["React-Native", "JavaScript"],
            years: "2018.11 - 2020.09",
            title: "React-Native Developer",
            company: "Intelligent Information Solution Center",
            companyIcon: iis,
          },
          {
            technologies: ["Major: Software Engineering"],
            mainTech: ["Thesis: Predicting opponent’s movement in Dota 2"],
            years: "2018.9 - 2021.02",
            title: "Computer Science",
            company: "Sharif University of Technology",
            companyIcon: sut,
          },
          {
            technologies: ["Hardware Engineering"],
            mainTech: [],
            years: "2013.09 - 2018.06",
            title: "Computer Engineering",
            company: "Iran University of Science and Technology",
            companyIcon: iust,
          }
        ],
        projects: [
          {
            title: "Playground",
            images: [
              playground0,
              playground1,
              playground2,
              playground3,
            ],
            youtube: "o1SbL0i7x1M",
            startDate: 2020,
          },
          {
            title: "Jump Up",
            images: [
              jumpUp0,
            ],
            youtube: "gA4X6anOjBM",
            startDate: 2020,
          },
          {
            title: "Rebel",
            images: [
              playground0,
              playground1,
              playground2,
              playground3,
            ],
            youtube: "o1SbL0i7x1M",
            startDate: 2020,
          },
          {
            title: "Core",
            images: [
              playground0,
              playground1,
              playground2,
              playground3,
            ],
            youtube: "o1SbL0i7x1M",
            startDate: 2020,
          },
          {
            title: "Waterfall",
            images: [
              playground0,
              playground1,
              playground2,
              playground3,
            ],
            youtube: "o1SbL0i7x1M",
            startDate: 2020,
          },
        ],
        arts: [
          {
            title: "Sketches",
            images: [
              ged,
              blueFloyed,
              veilOfDiscord,
              stunningLook,
              deatVoodoo,
            ],
          },
          ],
        basic_info: {
          section_name: {
            experience: "My Journey",
            projects: "Projects",
            sketches: "Sketches"
          }
        }
      },
      sharedData: {},
    };
  }


  componentDidMount() {
    this.loadSharedData();
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <div style={{height: window.innerHeight, flex: 1, display: "flex", flexDirection: "column", backgroundColor: '#4b6f84'}}>
          <Banner/>
          <Header sharedData={this.state.sharedData.basic_info} />
        </div>
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Parallax bgImage={parallexBackground} strength={500}>
          <div style={{ height: window.innerHeight }}>
          </div>
        </Parallax>
        <Sketches
          resumeProjects={this.state.resumeData.arts}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />

        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
