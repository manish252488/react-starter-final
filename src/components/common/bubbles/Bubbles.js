import React from "react";
import Particles from "react-particles-js";
import PropTypes from "prop-types";
import "./index.less";
const Bubbles = (props) => {
  const { height, number, colors, speed, width, size, animSpeed } = props;
  return (
    <Particles
      className="Particles"
      height={height}
      width={width}
      params={{
        particles: {
          number: {
            value: number,
            density: {
              enable: true,
              value_area:'100%',
            },
          },
          color: {
            value: colors,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.9,
            random: true,
            anim: {
              enable: true,
              speed: speed,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: size,
            random: true,
            anim: {
              enable: true,
              speed: animSpeed,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable_auto: true,
            distance: 10,
            color: "#333",
            opacity: 1,
            width: 1,
            condensed_mode: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

Bubbles.propTypes = {
  height: PropTypes.any,
  number: PropTypes.number, // number of particles
  colors: PropTypes.array,
  speed: PropTypes.number,
  width: PropTypes.any,
  size: PropTypes.number,
  animSpeed: PropTypes.number,
};
Bubbles.defaultProps = {
  height: null,
  number: 150,
  colors: ["#333", "#fff", "#ddd"],
  speed: 1,
  width: null,
  size: 2,
  animSpeed: 4,
};
export default Bubbles;