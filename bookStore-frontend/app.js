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

fs.readdir(basePath, (err, files) => {
    files.forEach((file) => {
        app.use(express.static(`${basePath}/${file}`));
        app.get(`/${file}`, (req, res) => {
            res.sendFile(`${basePath}/${file}/index.html`);
        });
    })
});
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
        res.status(201).send(JSON.stringify(correntList));
    }
    else res.status(400).send();
})

//return all people
// app.get("/api/getList", (req, res) => {
//     let correntList = require("./user.json");
//     res.status(201).send(JSON.stringify(correntList));
// })

app.get("/api/login", (req, res) => {
    let correntList = require("./user.json");
    let allUser=JSON.stringify(correntList);
    let user=null;
    console.log(allUser);
    var date=JSON.parse(allUser,(value)=>{if(value.userName==req.body.userName&&value.password==req.body.password)
    user=value;
    })
    if(user)
   res.status(201).send(value);
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
