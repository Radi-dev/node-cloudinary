const fs = require('fs');
const formidable = require('formidable');
const cloudinary = require('cloudinary').v2


exports.uploadFile = async(req, res) => {
    try {
        const form = formidable({multiples: true})
        const upload = await form.parse(req, (err, fields, files) => {
            const result = cloudinary.uploader.upload(files.upload.filepath, {
                folder: 'Radi'
            });
            
            return result
        })

        return res.status(200).json({
            message: 'Image uploaded succesfully',
            result: upload
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}