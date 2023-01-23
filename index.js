import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// app.get("/", (req,res) => {
//     res.send("Hi there, welcome!");
// });

const people = ["Danny", "Joe"];

app.get("/people", (req, res) => {
    res.send(people);
});

app.get("/", (req,res) => {
    const uri="/Users/jgraff36/boca-code/week3/my-second-express/hello.html"
    res.sendFile(uri);
});

// app.get('/coffee', (req, res) => {
//     const imagePath = '/Users/vm/Downloads/IMG_0560.jpg'
//     console.log('new request')
//     res.sendFile(imagePath)
// })

app.listen(process.env.PORT, () => {
    console.log(`Listening on localhost port ${process.env.PORT}`)
});
