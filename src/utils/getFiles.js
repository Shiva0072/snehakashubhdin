// const temp = [
//   "https://ik.imagekit.io/dr2kyfwww/test/1.jpeg",
//   "https://ik.imagekit.io/dr2kyfwww/test/2.png",
// ];

function importAll(r, imgs) {
  r.keys().forEach((key) => imgs.push(key));
}

const getFiles = () => {
  const images = require.context(
    "../Assets/images/",
    false,
    /\.(png|jpe?g|svg)$/
  );

  const imgs = [];
  importAll(images, imgs);

  const new_imgs = [];
  imgs.forEach((img) => {
    new_imgs.push(require(`../Assets/images/${img.substr(2)}`));
  });

  console.log("justed obtained imga;  : ", new_imgs);
  return new_imgs;
};

// const getFiles = () => {
//   return temp;
// };

export default getFiles;
