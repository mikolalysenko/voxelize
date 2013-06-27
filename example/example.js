var bunny = require("bunny")

var result = require("../index.js")(bunny.cells, bunny.positions, 1.0)

console.log(require("ndarray-unpack")(result.voxels))