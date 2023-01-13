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
  //   console.log("before returning;  : ", imgs);
  return imgs;
};

export default getFiles;
