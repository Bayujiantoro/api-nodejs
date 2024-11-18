const { json } = require('body-parser')
const express = require('express')
const { get } = require('http')

const app = express()
const port = 5001
const role = [
    {
        roleId: 1,
        description: "Web Developer",
    }, {
        roleId: 2,
        description: "Finance"
    }, {
        roleId: 3,
        description: "Admin"
    },

]

app.set("view engine", "ejs")

app.use('/', (req, res, next)=> {
    console.log("middleware jalan")
    next();
})
app.get('/', (req, res) => {
    res.json({
        nama: "Bayu jiantoro",
        email: "bayujiantoro98@gmail.com",
        noHp: "081217184780"
    }
    );
});

app.use(express.static('public'))


app.get("/role/:id", (req, res) => {
    const param = req.params.id 
    const Result = role.find(item => item.roleId == param)
    res.json({
        nama: "Bayu jiantoro",
        email: "bayujiantoro98@gmail.com",
        noHp: "081217184780",
        role: Result.description
    })
})

app.use("/", (req, res) => {
    res.render('error.ejs')
})

app.listen(port, () => {
    console.log(`Server listenin in http://localhost:${port}`);
})