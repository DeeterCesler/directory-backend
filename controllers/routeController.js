const express = require("express");
const router = express.Router();
const Business = require("../models/business");

router.post("/new", async (req, res) => {
  console.log('NEW ROUTE!!!');
  console.log(req.body);

  const newBiz = await Business.create(req.body);
  console.log('new biz')
  console.log(newBiz)

  res.json({
    status: 200,
    message: "all good!"
  });
})

// Get all businesses
router.post("/search", async (req, res) => {
  console.log('TIME TO SEARCHHH!!!');
  console.log(req.body);
  // search for businesses
  //
  let foundBizzies;
  if (req.body.zip){
    foundBizzies = await Business.find({zip: new RegExp(req.body.zip + '.*?')})
    if (req.body.type){
      foundBizzies = foundBizzies.filter(biz => biz.type === req.body.type)
    }
    if (req.body.name){
      foundBizzies = foundBizzies.filter(biz => biz.name.match(new RegExp(req.body.name + '.*?', 'i')))
    } 
  } else if (req.body.name) {
    foundBizzies = await Business.find({name: new RegExp(req.body.name + '.*?', 'i')})
    if (req.body.zip){
      foundBizzies = foundBizzies.filter(biz => biz.zip.match(new RegExp(req.body.zip + '.*?', 'i')))
    }
    if (req.body.type){
      foundBizzies = foundBizzies.filter(biz => biz.type === req.body.type)
    }
  }
  console.log(foundBizzies)

  res.json({
    status: 200,
    data: foundBizzies
  })

});

module.exports = router;