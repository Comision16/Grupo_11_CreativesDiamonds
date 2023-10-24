const express = require('express');
const router = express.Router();
const localsCheck = require('../middlewares/localsCheck'); 
const { albumAdd, albumCreate, mercheAdd, mercheCreate, listArtists, bandDetail, bandAdd, bandCreate, editBand, updateBand, addAlbum, storeAlbum, editAlbum, updateAlbum, addMerch, storeMerch, editMerch, updateMerch,albumDetail, merchDetail, albumRemove, merchRemove, bandRemove } = require('../controllers/productsController');
const { upload } = require('../middlewares/upload');
const addAlbumValidator = require('../validation/addAlbumValidator');
const addMercheValidator = require('../validation/addMercheValidator');
const addBandValidator = require('../validation/addBandValidator');
const editAlbumValidator = require('../validation/editAlbumValidator');
const editMerchValidator = require('../validation/editMercheValidator')
const { uploadBand } = require('../middlewares/uploadBand');
const { uploadAlbum } = require('../middlewares/uploadAlbum');
const { uploadMerch } = require('../middlewares/uploadMerch');



router.use(localsCheck); 

/* /products */
router
  .get('/albumAdd', albumAdd)
  .post('/albumAdd', upload.single('image'), addAlbumValidator, albumCreate)
  .get('/mercheAdd', mercheAdd)
  .post('/mercheAdd', upload.single('image'), addMercheValidator, mercheCreate)
  .get('/artists', listArtists)
  .get('/artists/detail/:id', bandDetail)
  .get('/addBand', bandAdd)
  .post('/addBand', upload.fields([
    {
      name: "mainImage",
    },
    {
      name: "images",
    }
  ]),addBandValidator, bandCreate)
  .get('/edit/band/:id', editBand)
  .put('/edit/band/:id', uploadBand.fields([
    {
      name: "mainImage",
    },
    {
      name: "images",
    }
  ]),
  addBandValidator, updateBand)
  .get('/addAlbum', addAlbum)
  .post('/addAlbum', storeAlbum)
  .get('/edit/album/:id', editAlbum)
  .put('/edit/album/:id', uploadAlbum.single('image'), editAlbumValidator ,updateAlbum)
  .get('/addMerch', addMerch)
  .post('/addMerch', storeMerch)
  .get('/edit/merch/:id', editMerch)
  .put('/edit/merch/:id', uploadMerch.single('image'), editMerchValidator, updateMerch)
  .get('/albums/detail/:id', albumDetail)
  .get('/merchs/detail/:id', merchDetail)
  .get('/album/remove/:id',albumRemove) 
  .get('/merch/remove/:id',merchRemove)
  .get('/band/remove/:id',bandRemove) 
 

module.exports = router;
