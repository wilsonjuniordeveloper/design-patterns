class Image {}

class JPGImage {}

class PNGImage {}

class GIFImage {}

function createImage(type) {

    const supportImageType = {
        jpg: JPGImage,
        png: PNGImage,
        gif: GIFImage
    }

    return new (supportImageType[type] || Image)();
}

module.exports = {
    createImage,
    Image
}