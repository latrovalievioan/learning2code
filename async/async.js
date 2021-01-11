// const sleep = (milliseconds) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, milliseconds);
//   });
//   return promise;
// };

// sleep(9000).then(() => console.log("zdrawei kote"));

// setInterval(() => console.log("koko e krasiv"), 1000);

const fs = require("fs");
const { resolve } = require("path");
// fs.readFile("./test.js", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const readFilePromise = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject(err);
      else {
        resolve(data);
      }
    });
  });

readFilePromise("./test.js").then((data) => console.log(data));
