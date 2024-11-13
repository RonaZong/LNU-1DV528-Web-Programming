import styled from "react-emotion";
import { props } from "ramda";

const difficultyLevels = Object.freeze({
  veryEasy: {
    src: "https://gitlab.lnu.se/uploads/-/system/project/avatar/3551/green-very-easy.png"
  },
  easy: {
    src: "https://gitlab.lnu.se/uploads/-/system/project/avatar/3558/blue-easy.png"
  },
  intermediate: {
    src: "https://gitlab.lnu.se/uploads/-/system/project/avatar/3561/red-intermediate.png"
  },
  difficult: {
    src: "https://gitlab.lnu.se/uploads/-/system/project/avatar/3564/black-difficult.png"
  },
  template: {
    src: "https://gitlab.lnu.se/uploads/-/system/project/avatar/3624/orange-template.png"
  }
});

const getImageSrc = (type = "template") => {
  return difficultyLevels[type].src;
}

const DifficultyLevel = (props) => <img src={getImageSrc(props.type)} width="16" />

export default DifficultyLevel;
