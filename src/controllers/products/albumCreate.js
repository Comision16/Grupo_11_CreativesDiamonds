const {existsSync, unlinkSync} = require ('fs')
const {validationResult} = require('express-validator');
const db = require ('../../database/models')

module.exports = (req, res) => {

    
    const errors = validationResult(req);

    if(errors.isEmpty()){
        const {title, discography, year, price,  discount, description, exclusive, band, genre} = req.body
        db.Product.create({
        title : title.trim(),
        discography : discography.trim(),
        year,
        price,
        discount : discount || 0,
        description : description.trim(),
        exclusive,
        bandId : band,
        genreId : genre
        })
        .then(product => {
        if(req.files.length){
            const images = req.files.map(file => {
            return {
                file: file.filename,
                main : index === 0 ? true : false,
                productId : product.id,
                }
            })
            db.Image.bulkcreate(images, {
            validate : true
            })
            .then(response => console.log(response))
        }
        return res.redirect('/admin');
        })
        .catch(error => console.log(error))



    }else {

        if(req.files.length){
        req.files.forEach(file => {
        
        
        existsSync('./public/images/' + file.filename) && unlinkSync('./public/images/' + file.filename)
       });
    }
    const genres = db.Genre.findAll({
        order : ['name']
    });

    const bands = db.Band.findAll({
        order : ['name']
    });
    Promise.all([genres, bands])
        .then(([genres, bands]) => {
            return res.render("albumAdd", {
        genres,
        bands
            });
        })
        .catch (error => console.log(error))





    }
}