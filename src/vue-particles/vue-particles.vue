<template>
  <div
    id="particles-js"
    :color="color"
    :particleOpacity="particleOpacity"
    :linesColor="linesColor"
    :particlesNumber="particlesNumber"
    :shapeType="shapeType"
    :particleSize="particleSize"
    :linesWidth="linesWidth"
    :lineLinked="lineLinked"
    :lineOpacity="lineOpacity"
    :linesDistance="linesDistance"
    :moveSpeed="moveSpeed"
    :hoverEffect="hoverEffect"
    :hoverMode="hoverMode"
    :clickEffect="clickEffect"
    :clickMode="clickMode"
  ></div>
</template>
<script>
  /* eslint-disable */
  export default {
    name: 'vue-particles',
    props: {
      color: {
        type: String,
        default: '#dedede'
      },
      particleOpacity: {
        type: Number,
        default: 0.7
      },
      particlesNumber: {
        type: Number,
        default: 80
      },
      shapeType: {
        type: String,
        default: 'circle'
      },
      particleSize: {
        type: Number,
        default: 4
      },
      linesColor: {
        type: String,
        default: '#dedede'
      },
      linesWidth: {
        type: Number,
        default: 1
      },
      lineLinked: {
        type: Boolean,
        default: true
      },
      lineOpacity: {
        type: Number,
        default: 0.4
      },
      linesDistance: {
        type: Number,
        default: 150
      },
      moveSpeed: {
        type: Number,
        default: 3
      },
      hoverEffect: {
        type: Boolean,
        default: true
      },
      hoverMode: {
        type: String,
        default: 'grab'
      },
      clickEffect: {
        type: Boolean,
        default: true
      },
      clickMode: {
        type: String,
        default: 'push'
      }
    },
    data(){
      return {
        // obj:{
        //   color:this.color,
        //   particleOpacity:this.particleOpacity,
        //   linesColor:this.linesColor,
        //   particlesNumber:this.particlesNumber,
        //   shapeType:this.shapeType,
        //   particleSize:this.particleSize,
        //   linesWidth:this.linesWidth,
        //   lineLinked:this.lineLinked,
        //   lineOpacity:this.lineOpacity,
        //   linesDistance:this.linesDistance,
        //   moveSpeed:this.moveSpeed,
        //   hoverEffect:this.hoverEffect,
        //   hoverMode:this.hoverMode,
        //   clickEffect:this.clickEffect,
        //   clickMode:this.clickMode,
        // }
      }
    },
    mounted () {
      // import particle.js only on client-side
      require('particles.js')
      console.log(this)
      this.$nextTick(() => {
        this.initParticleJS(
          this.color,
          this.particleOpacity,
          this.particlesNumber,
          this.shapeType,
          this.particleSize,
          this.linesColor,
          this.linesWidth,
          this.lineLinked,
          this.lineOpacity,
          this.linesDistance,
          this.moveSpeed,
          this.hoverEffect,
          this.hoverMode,
          this.clickEffect,
          this.clickMode
        )
      })
    },
    methods: {
      run(){
        this.$nextTick(() => {
          this.initParticleJS(
            this.color,
            this.particleOpacity,
            this.particlesNumber,
            this.shapeType,
            this.particleSize,
            this.linesColor,
            this.linesWidth,
            this.lineLinked,
            this.lineOpacity,
            this.linesDistance,
            this.moveSpeed,
            this.hoverEffect,
            this.hoverMode,
            this.clickEffect,
            this.clickMode
          )
        })
      },
      initParticleJS (
        color,
        particleOpacity,
        particlesNumber,
        shapeType,
        particleSize,
        linesColor,
        linesWidth,
        lineLinked,
        lineOpacity,
        linesDistance,
        moveSpeed,
        hoverEffect,
        hoverMode,
        clickEffect,
        clickMode
      ) {
        particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": particlesNumber,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": color
            },
            "shape": {
              // circle, edge, triangle, polygon, star, image
              "type": shapeType,
              "stroke": {
                "width": 0,
                "color": "#192231"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              "value": particleOpacity,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": particleSize,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": lineLinked,
              "distance": linesDistance,
              "color": linesColor,
              "opacity": lineOpacity,
              "width": linesWidth
            },
            "move": {
              "enable": true,
              "speed": moveSpeed,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": hoverEffect,
                "mode": hoverMode
              },
              "onclick": {
                "enable": clickEffect,
                "mode": clickMode
              },
              "onresize": {

                "enable": true,
                "density_auto": true,
                "density_area": 400

              }
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
      }
    },
    watch:{
      "color"(){this.run()},
      "particleOpacity"(){this.run()},
      "particlesNumber"(){this.run()},
      "shapeType"(){this.run()},
      "particleSize"(){this.run()},
      "linesColor"(){this.run()},
      "linesWidth"(){this.run()},
      "lineLinked"(){this.run()},
      "lineOpacity"(){this.run()},
      "linesDistance"(){this.run()},
      "moveSpeed"(){this.run()},
      "hoverEffect"(){this.run()},
      "hoverMode"(){this.run()},
      "clickEffect"(){this.run()},
      "clickMode"(){this.run()},
    }
  }
  /* eslint-disable */
</script>
