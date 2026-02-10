const { ImageKit } = require("@imagekit/nodejs");
const fs = require("fs");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  return await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
}

module.exports = {
  uploadFile,
};
