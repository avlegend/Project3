const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NatureGallerySchema = new Schema({
    imageURL: { type: String, required: true },
    imagePrice: { type: String, required: true },
    imagePurchase: { type: Boolean, required: true },
    

});

// ContactUsSchema.path('email').validate(function (email) {
//     var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     return emailRegex.test(email.text); // Assuming email has a text attribute
//  }, 'The e-mail field cannot be empty.')

const NatureGallery = mongoose.model('NatureGallery', NatureGallerySchema);

module.exports = NatureGallery;