"use strict"

var rasterize = require("rle-rasterize")
var rle2array = require("rle-ndarray").rle2array

function voxelize(cells, positions, resolution) {
  var lo = [Infinity, Infinity, Infinity],
      hi = [-Infinity, -Infinity, -Infinity],
      n  = positions.length, i, j, p
  for(i=0; i<n; ++i) {
    p = positions[i]
    for(j=0; j<3; ++j) {
      lo[j] = Math.min(lo[j], p[j])
      hi[j] = Math.max(hi[j], p[j])
    }
  }
  var scale = +resolution || 1.0
  var iscale = 1.0 / scale
  var shift = [0,0,0]
  for(j=0; j<3; ++j) {
    shift[j] = lo[j] - scale
  }
  var npositions = new Array(n)
  for(i=0; i<n; ++i) {
    p = positions[i].slice(0)
    for(j=0; j<3; ++j) {
      p[j] = (p[j] - shift[j]) * iscale
    }
    npositions[i] = p
  }
  var volume = rasterize(cells, npositions)
  var result = rle2array(volume)
  return {
    voxels: result.phase,
    origin: shift,
    resolution: resolution
  }
}

module.exports = voxelize