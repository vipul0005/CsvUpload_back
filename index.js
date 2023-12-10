const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const papa = require("papaparse");

const cors = require("cors");

require("./Database/config");
const CSVfile = require("./Database/csvFiles");

const app = express();
app.use(cors());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (request, file, callback) {
      callback(null, "Uploads");
    },
    filename: function (request, file, callback) {
      callback(null, file.originalname);
    },
  }),
});

app.get("/get-file", async (request, response) => {
  let csvFile = await CSVfile.find({});
  if (csvFile.length > 0) {
    response.send(csvFile);
  } else {
    response.send({ result: "No result found" });
  }
});

app.get("/view/:id", async (request, response) => {
  let result = await CSVfile.findOne({ _id: request.params.id });
  response.send(result);
});

app.delete("/delete-file/:id", async (request, response) => {
  const fileToDelete = await CSVfile.findOne({ _id: request.params.id });
  if (fileToDelete) {
    const filePath = path.join(__dirname, "Uploads", fileToDelete.name);
    fs.unlinkSync(filePath);
    const result = await CSVfile.deleteOne({ _id: request.params.id });
    response.send(result);
  }
});

app.post("/upload", upload.single("file"), async (request, response) => {
  const csvFilePath = request.file.path;
  const csvFileData = fs.readFileSync(csvFilePath, "utf8");

  const conversedCSVFile = papa.parse(csvFileData, {
    header: false,
  });
  let csvFile = new CSVfile({
    name: request.file.originalname,
    file: conversedCSVFile.data,
  });
  let result = await csvFile.save();
  // console.log(result);

  response.send(result);
});

app.listen(5000);
