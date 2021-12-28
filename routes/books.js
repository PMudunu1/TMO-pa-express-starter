const express = require('express');
const router = express.Router();
let data = [];

router.get('/', function (req, res) {

data.sort(sortByProperty("title"));
    res.status(200).json(data);
});


router.post('/', function (req, res) {
    let bookIds= data.map(book => book.id);
    let newId = bookIds.length > 0 ? Math.max.apply(Math, bookIds) + 1 : 1;
   

  
    let newBook = {
        id: newId, 
        author: req.body.author,
        title: req.body.title, 
        yearPublished: req.body.yearPublished
    };
    
    data.push(newBook);

    res.status(201).json(newBook);
});



router.delete('/', function (req, res) {
        data.length = 0;
res.sendStatus(204); 
});

 
module.exports = router;

function sortByProperty(property){  
   return function(a,b){  
      if(a[property] > b[property])  
         return 1;  
      else if(a[property] < b[property])  
         return -1;  
      return 0;  
   }  
}
