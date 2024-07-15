import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      name: "URL",
      message: "Please type a website URL: ",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("./qr-image.png"));

    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("File has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
