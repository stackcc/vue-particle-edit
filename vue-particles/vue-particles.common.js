'use strict'

function _interopDefault (e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}

var particles_js = _interopDefault(require('particles.js')), particles = {
  render: function () {
    var e = this, t = e.$createElement, i = e._self._c || t
    return i('div', {
      attrs: {
        id: 'particles-js',
        color: e.color,
        particleopacity: e.particleOpacity,
        linescolor: e.linesColor,
        particlesnumber: e.particlesNumber,
        shapetype: e.shapeType,
        particlesize: e.particleSize,
        lineswidth: e.linesWidth,
        linelinked: e.lineLinked,
        lineopacity: e.lineOpacity,
        linesdistance: e.linesDistance,
        movespeed: e.moveSpeed,
        hovereffect: e.hoverEffect,
        hovermode: e.hoverMode,
        clickeffect: e.clickEffect,
        clickmode: e.clickMode
      }
    })
  },
  staticRenderFns: [],
  name: 'vue-particles',
  props: {
    color: { type: String, default: '#dedede' },
    particleOpacity: { type: Number, default: .7 },
    particlesNumber: { type: Number, default: 80 },
    shapeType: { type: String, default: 'circle' },
    particleSize: { type: Number, default: 4 },
    linesColor: { type: String, default: '#dedede' },
    linesWidth: { type: Number, default: 1 },
    lineLinked: { type: Boolean, default: !0 },
    lineOpacity: { type: Number, default: .4 },
    linesDistance: { type: Number, default: 150 },
    moveSpeed: { type: Number, default: 3 },
    hoverEffect: { type: Boolean, default: !0 },
    hoverMode: { type: String, default: 'grab' },
    clickEffect: { type: Boolean, default: !0 },
    clickMode: { type: String, default: 'push' }
  },
  mounted: function () {
    var e = this
    this.$nextTick(function () {
      e.initParticleJS(e.color, e.particleOpacity, e.particlesNumber, e.shapeType, e.particleSize, e.linesColor, e.linesWidth, e.lineLinked, e.lineOpacity, e.linesDistance, e.moveSpeed, e.hoverEffect, e.hoverMode, e.clickEffect, e.clickMode)
    })
  },
  methods: {
    initParticleJS: function (e, t, i, a, l, n, c, r, o, s, p, d, u, f, y) {
      particlesJS('particles-js', {
        particles: {
          number: { value: i, density: { enable: !0, value_area: 800 } },
          color: { value: e },
          shape: { type: a, stroke: { width: 0, color: '#192231' }, polygon: { nb_sides: 5 } },
          opacity: { value: t, random: !1, anim: { enable: !1, speed: 1, opacity_min: .1, sync: !1 } },
          size: { value: l, random: !0, anim: { enable: !1, speed: 40, size_min: .1, sync: !1 } },
          line_linked: { enable: r, distance: s, color: n, opacity: o, width: c },
          move: {
            enable: !0,
            speed: p,
            direction: 'none',
            random: !1,
            straight: !1,
            out_mode: 'out',
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: d, mode: u },
            onclick: { enable: f, mode: y },
            onresize: { enable: !0, density_auto: !0, density_area: 400 }
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: .4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: !0
      })
    }
  }
}, VueParticles = {
  install: function (e, t) {
    e.component('vue-particles', particles)
  }
}
module.exports = VueParticles
//# sourceMappingURL=vue-particles.common.js.map
