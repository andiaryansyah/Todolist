'use strict'

// Fake posts database

var data = {};

exports.submit = function(req, res){
    const text = req.body.text
    const id = Math.floor((Math.random()*100) + 1)
    if (text  === ""){
        res.status(400).send('Text is empty')
        return
    } else{
            data[id] = {
                text:text,
                done:false
            }
            res.send('to do added')
        }
};

exports.list = function(req, res){
    res.send(data)
};

exports.update = function(req, res){
    const id = req.params.id
    if (id in data){
        if (req.body.text == undefined || req.body.text == "") {
            data[id].done = req.body.done;
        }
        else if (req.body.done == undefined || req.body.done == "") {
             data[id].text = req.body.text;
 
         }else{
         const text = req.body.text;
         const done = req.body.done;
 
         data[id] = {
             text: text,
             done:done,
         };
         }
         res.send('data updated');
        return;
     }
    res.status(400).send('ID not found');
};

exports.delete = function(req, res){
    const id = req.params.id
    if (id in data){

    delete data[id];
    res.send('data deleted');
    
    }else {
        res.status(400).send('error ID');
    }
};