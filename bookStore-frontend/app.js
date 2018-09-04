const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const basePath = path.join(__dirname + "/dist");

const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get(`/`, (req, res) => {
    let linkList = "";
    let resPage = fs.readFileSync("links.html", "utf-8");
    console.log(resPage);
    fs.readdir(basePath, (err, files) => {
        files.forEach((file) => {
            linkList += `<li><a href="/${file}" target="blank">${file}</a></li>`;
        })
        res.send(resPage.replace("placeHolder", linkList));
    });

});

// fs.readdir(basePath, (err, files) => {
//     files.forEach((file) => {
//         app.use(express.static(`${basePath}/${file}`));
//         app.get(`/${file}`, (req, res) => {
//             res.sendFile(`${basePath}/${file}/index.html`);
//         });
//     })
// });
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post("/api/register", (req, res) => {
    let correntList = require("./user.json");

    let isPersonOk = checkPerson(req.body);
    if (isPersonOk == true) {
        correntList.push(req.body)
        fs.writeFileSync("user.json", JSON.stringify(correntList));
        res.status(201).send(JSON.stringify(req.body));
    }
    else res.status(400).send();
})

 app.get("/api/getList", (req, res) => {
     let correntList = require("./book.json");
     res.status(201).send(JSON.stringify(correntList));
 })

app.post("/api/login", (req, res) => {
    let correntList = require("./user.json");
    let allUser=JSON.parse(JSON.stringify(correntList));
   allUser.filter( element =>{  element['userName']==req.body.userName&&element['userPassword']==req.body.userPassword});
    if(allUser[0])
      res.status(201).send(allUser[0]);
    else res.status(400).send();
})
const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });


//check if user is valid
function checkPerson(person) {
    if (person.firstName.length < 2 || person.firstName.length > 15 || !person.firstName.match(/^[A-Za-z]+$/))
        return false;
    if (person.lastName.length < 2 || person.lastName.length > 15 || !person.lastName.match(/^[A-Za-z]+$/))
        return false;
    if (person.userName > 15 || person.userName < 3 || !person.userName.match(/^[A-Za-z]+$/))
        return false;
    if (person.password > 10 || person.password < 5)
        return false;
    return true;

}


const handleError = (err, res) => {
    console.log("handle err");
    res
        .status(500)
        .contentType("text/plain")
        .end("Oops! Something went wrong!");
};

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

app.post("/api/upload", upload.single("file" /* name attribute of <file> element in your form */),
    (req, res) => {
        console.log("upload");
        console.log(__dirname);  
        const tempPath = req.file.path;
        console.log(tempPath);
        const newFilename = `${uuidv4()}.JPG`;
        console.log(newFilename);
        const targetPath = path.join(__dirname, `./uploads/${newFilename}`);
        console.log(targetPath);
        fs.rename(tempPath, targetPath, err => {
            if (err)
                return handleError(err, res);
            console.log("rename");
            res.status(200).send({ newFilename: newFilename });
        });
    });

const basePath1 = path.join(__dirname);

app.get(`/uploads`, (req, res) => {
    let fileName = req.query.fileName;
    res.sendFile(`${basePath1}/uploads/${fileName}`);
});

// Assuming that 'path/file.txt' is a regular file.
removeImage=(fileName)=>{
    fs.unlink(`${basePath1}/uploads/${fileName}`, (err) => {
        if (err) throw err;
        console.log('path/file.txt was deleted');
      });
}


