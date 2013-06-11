voxelize
========
Voxelize a triangulated mesh into an [ndarray](https://github.com/mikolalysenko/ndarray).

## Example

```javascript
//Load bunny
var bunny = require("bunny")

//Voxelize the mesh
var result = require("voxelize")(bunny.cells, bunny.positions, 0.1)

//Unpack result
var voxels = result.voxels
var origin = result.origin
var resolution = result.resolution
```

## Install

    npm install voxelize
    
### `require("voxelize")(cells, positions[, resolution])`
Voxelizes a triangulated mesh into an ndarray

* `cells` are the indexed faces of the mesh
* `positions` are the locations of the vertices in the mesh
* `resolution` is the resolution at which the mesh needs to be voxelized

**Returns** An object with the following properties

* `voxels` the binary voxel image of the mesh
* `origin` the coordinate of the bottm left back corner of the voxel array
* `resolution` the resolution of the voxel array

The real location of a voxel (i,j,k) in the mesh coordinates is given by:

    [ resolution * i + origin[0], resolution * j + origin[1], resolution * k + origin[2] ]

## Credits
(c) 2013 Mikola Lysenko. MIT License