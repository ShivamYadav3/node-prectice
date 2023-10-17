const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/hello.txt`;

fs.writeFileSync(filePath, "this is simple file");
fs.writeFileSync(`${dirPath}/check.txt`, "this is simple file of ");

fs.readFile(filePath, "utf8", (err, item) => {
  console.log(item);
});
fs.appendFile(filePath, " this text come with append file", (err) => {
  if (!err) console.log("file updated");
});
fs.rename(filePath, `${dirPath}/helloNew`, (err) => {
  if (!err) console.log("file name updated");
});
fs.unlinkSync(`${dirPath}/check.txt`);
