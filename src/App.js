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
import moolfa from "./assets/images/experience/moolfa.png"
import sut from "./assets/images/experience/sut.png";

import iust from "./assets/images/experience/iust.png";

import playground0 from "./assets/images/projects/playground/playground_icon.jpg";
import playground1 from "./assets/images/projects/playground/mushroom.png";
import playground2 from "./assets/images/projects/playground/spidercube.png";
import playground3 from "./assets/images/projects/playground/lake.png";

import bridgeRun from "./assets/images/projects/bridgerun/icon.jpg";
import bridgeRun1 from "./assets/images/projects/bridgerun/gameplay0.png";
import bridgeRun2 from "./assets/images/projects/bridgerun/gameplay1.png";
import bridgeRun3 from "./assets/images/projects/bridgerun/gameplay2.png";

import ninjaMagic0 from "./assets/images/projects/ninjamagic/ninjamagic0.jpg";
import ninjaMagic1 from "./assets/images/projects/ninjamagic/gameplay0.jpg";
import ninjaMagic2 from "./assets/images/projects/ninjamagic/gameplay1.jpg";

import hashtkhan0 from "./assets/images/projects/hashtkhan/Hashtkhan.jpg";
import hashtkhan1 from "./assets/images/projects/hashtkhan/gameplay.jpg";
import hashtkhan2 from "./assets/images/projects/hashtkhan/gameplay1.jpg";
import hashtkhan3 from "./assets/images/projects/hashtkhan/gameplay2.jpg";

import monster0 from "./assets/images/projects/monster/icon.jpg";
import monster1 from "./assets/images/projects/monster/gameplay1.png";
import monster2 from "./assets/images/projects/monster/gameplay2.png";
import monster3 from "./assets/images/projects/monster/gameplay3.png";


import flyingHills0 from "./assets/images/projects/flyinghills/icon.jpg";
import flyingHills1 from "./assets/images/projects/flyinghills/flyinghills1.png";
import flyingHills2 from "./assets/images/projects/flyinghills/flyinghills2.png";
import flyingHills3 from "./assets/images/projects/flyinghills/flyinghills3.png";
import flyingHills4 from "./assets/images/projects/flyinghills/flyinghills4.jpg";
import flyingHills5 from "./assets/images/projects/flyinghills/flyinghills5.jpg";

import jumpUp0 from "./assets/images/projects/jumpup/jump_up.jpg";
import jumpUp1 from "./assets/images/projects/jumpup/jumpup1.jpg";
import jumpUp2 from "./assets/images/projects/jumpup/jumpup2.jpg";
import jumpUp3 from "./assets/images/projects/jumpup/jumpup3.jpg";

import core0 from "./assets/images/projects/core/Core.jpg"
import core1 from "./assets/images/projects/core/core1.png"
import core2 from "./assets/images/projects/core/core2.png"
import core3 from "./assets/images/projects/core/core3.png"

import rebel0 from "./assets/images/projects/rebel/Rose.jpg"
import rebel1 from "./assets/images/projects/rebel/Rebel1.png"
import rebel2 from "./assets/images/projects/rebel/Rebel2.png"
import rebel3 from "./assets/images/projects/rebel/Rebel3.png"
import rebel4 from "./assets/images/projects/rebel/Rebel4.png"

import hexaDominoes0 from "./assets/images/projects/hexadominoes/Icon.jpg"
import hexaDominoes1 from "./assets/images/projects/hexadominoes/gameplay1.png"
import hexaDominoes2 from "./assets/images/projects/hexadominoes/gameplay2.png"
import hexaDominoes3 from "./assets/images/projects/hexadominoes/gameplay3.png"

import waterfall0 from "./assets/images/projects/waterfall/waterfall0.jpg"
import waterfall1 from "./assets/images/projects/waterfall/waterfall1.png"
import waterfall2 from "./assets/images/projects/waterfall/waterfall2.png"

import parandthe from "./assets/images/arts/concept-art/ParandThe.jpg";
import strygwyr from "./assets/images/arts/concept-art/Strygwyr.JPG";
import nightmare from "./assets/images/arts/concept-art/Nightmare.jpg";
import stunningLook from "./assets/images/arts/concept-art/StunningLook.jpg";
import ged from "./assets/images/arts/concept-art/Ged.jpg";
import niloo from "./assets/images/arts/concept-art/Niloo.jpg";


import parallexBackground from "./assets/images/arts/concept-art/Ged.jpg";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      windowInnerHeight: window.innerHeight,
      foo: "bar",
      resumeData: {
        experience: [
          {
            technologies: ["Jump Up", "Ninja Magic", "My Monster Pet"],
            mainTech: ["Unity", "C#"],
            years: "2021.5 - Now",
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
            technologies: ["Hexa Dominoes, Waterfall"],
            mainTech: ["Unity", "C#"],
            years: "2015.9 - 2017.10",
            title: "Freelance Game Developer",
            company: "Freelance",
            companyIcon: moolfa,
          },
          {
            technologies: ["Major: Hardware Engineering"],
            mainTech: [],
            years: "2013.09 - 2018.06",
            title: "Computer Engineering",
            company: "Iran University of Science and Technology",
            companyIcon: iust,
          }
        ],
        projects: [
          {
            title: "Hasht Khan",
            url: "https://8khan.games/",
            description: "o    First persian Card game similar to Hearthstone\n" +
                "o    Refactored and added new features for the game relaunch\n",
            thumbnail: hashtkhan0,
            images: [
              hashtkhan1,
              hashtkhan2,
              hashtkhan3
            ],
            youtube: "buiB7j0_QEI",
            startDate: 2023,
          },
          {
            title: "BridgeRun",
            url: "https://play.google.com/store/apps/details?id=com.Moolfa.BridgeRun",
            description: "o    Designed and Developed the game from scratch to the release\n" +
                "o    Redesigned levels and mechanics based player statistics\n",
            thumbnail: bridgeRun,
            images: [
              bridgeRun1,
              bridgeRun2,
              bridgeRun3,
            ],
            startDate: 2022,
          },
          {
            title: "Playground",
            url: "https://moolfa.itch.io/playground",
            description: "o    Personal project which each level is a minimal prototype\n" +
              "o    Implemented different challenging mechanics such as water simulation and shader based features\n",
            thumbnail: playground0,
            images: [
              playground1,
              playground2,
              playground3,
            ],
            youtube: "o1SbL0i7x1M",
            startDate: 2020,
          },
          {
            title: "Ninja Magic",
            url: "https://play.google.com/store/apps/details?id=com.funtory.jutsumaster",
            description: "o    Designed and Developed the game from scratch to the release with two major iterations after the first launch\n" +
                "o    Developed more than 20 different mechanics with an upgrade system\n",
            thumbnail: ninjaMagic0,
            images: [
              ninjaMagic1,
              ninjaMagic2,
            ],
            youtube: "sK3kcAYciy0",
            startDate: 2020,
          },
          {
            title: "My Monster Pet",
            url: "https://play.google.com/store/apps/details?id=com.funtory.monsterpet",
            description: "o    Developing character behaviour and interactions \n" +
                "o    Helped in designing different mechanics and polish the game\n",
            thumbnail: monster0,
            images: [
              monster1,
              monster2,
              monster3,
            ],
            startDate: 2021,
          },
          {
            title: "Flying Hills",
            url: "https://play.google.com/store/apps/details?id=com.funtory.flyingroad",
            description: "o    Developed an optimized mesh rendering mechanic in addition to a challenging physics-based vehicle as the core mechanic.\n" +
                "o    Worked closely with a designer to finishing the project.\n",
            thumbnail: flyingHills0,
            images: [
              flyingHills1,
              flyingHills2,
              flyingHills3,
              flyingHills4,
              flyingHills5
            ],
            youtube: "uXhJ2Au0gkM",
            startDate: 2020,
          },
          {
            title: "Jump Up",
            url: "https://play.google.com/store/apps/details?id=com.funtory.jumpdunk",
            description: "o    Extended the game which increased revenue by 100%\n" +
              "o    Polished existing features and worked closely with game designer\n",
            thumbnail: jumpUp0,
            images: [
              jumpUp1,
              jumpUp2,
              jumpUp3
            ],
            youtube: "gA4X6anOjBM",
            startDate: 2020,
          },
          {
            title: "Core",
            url: "https://www.dropbox.com/s/e4moj0qsm31rzfw/core.apk?dl=0",
            description: "o    Designed and developed game from scratch\n" +
              "o    Managed team of 3 people\n",
            thumbnail: core0,
            images: [
              core1,
              core2,
              core3,
            ],
            youtube: "5lT0E_rKQwY",
            startDate: 2019,
          },
          {
            title: "Rebel",
            url: "https://moolfa.itch.io/rebel",
            description: "o    Designed and developed game logics\n" +
              "o    Worked on character design and animations\n",
            thumbnail: rebel0,
            images: [
              rebel1,
              rebel2,
              rebel3,
              rebel4,
            ],
            youtube: "kRbxADt-gVc",
            startDate: 2019,
          },
          {
            title: "Hexa Dominoes",
            url: "https://play.google.com/store/apps/details?id=com.moolfa.dominocolor",
            description: "o    My first published project in google play \n" +
                "o    Helped in developing level manager and designed new levels\n",
            thumbnail: hexaDominoes0,
            images: [
              hexaDominoes1,
              hexaDominoes2,
              hexaDominoes3,
            ],
            startDate: 2017,
          },
          {
            title: "Waterfall",
            url: "https://hvbashiri.itch.io/waterfall",
            description: "o    Final project of fundamentals of game design course \n" +
              "o    Worked on character animations and core gameplay mechanics\n",
            thumbnail: waterfall0,
            images: [
              waterfall1,
              waterfall2,
            ],
            startDate: 2016,
          },
        ],
        arts: [
          {
            title: "Sketches",
            thumbnail: ged,
            images: [
              parandthe,
              strygwyr,
              nightmare,
              stunningLook,
              ged,
              niloo
            ],
          },
          ],
        basic_info: {
          section_name: {
            experience: "My Journey",
            projects: "Projects",
            sketches: "Life Interests"
          }
        }
      },
      sharedData: {},
    };
  }


  componentDidMount() {
    this.loadSharedData();
    this.calculateBannerHeight(window.innerHeight, window.innerWidth);

    window.addEventListener("orientationchange", () => {
      this.calculateBannerHeight(window.innerWidth, window.innerHeight);
    })
  }

  calculateBannerHeight(height, width) {
    var bannerHeight = height < width ? height / 3 : width / 2;
    bannerHeight = bannerHeight > 300 ? bannerHeight : 300;
    var mobileVersion = bannerHeight <= 300 || navigator.platform.indexOf('MacIntel') !== -1;
    this.setState({windowInnerHeight: height, bannerSize: bannerHeight, mobileVersion});
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
        <div style={{height: this.state.windowInnerHeight, flex: 1, display: "flex", flexDirection: "column", backgroundColor: '#4b6f84'}}>
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
          <div style={{ height: this.state.windowInnerHeight }}>
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
