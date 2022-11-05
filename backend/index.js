var express = require('express')
var cors = require('cors')
var app = express();

app.use(cors())

const FeedbackData  = [
    {
        id: 1,
        pontuacao: 8,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae"
    },
    {
        id: 2,
        pontuacao: 3,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae"
    },
    {
        id: 3,
        pontuacao: 9,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae"
    },
    {
        id: 4,
        pontuacao: 7,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae"
    },
    {
        id: 5,
        pontuacao: 9,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae"
    }
];

app.get("/", function(req,res){
    res.send("Hello World")
});

app.get("/feedback", function(req,res){
    res.send(FeedbackData)
});

app.listen(3002, function(){
    console.log("# Running")
})