var express = require('express');
var router = express.Router();

const userModal = require("./users");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get("/create", async function (req,res){
//   const createdUser = await userModal.create({
//     username:"Mithun01",
//     age:25,
//     name:"Mithun",
//   })
//   res.send(createdUser);
// })

router.get("/allusers",async function(req,res){
  let allusers = await userModal.find();
  res.send(allusers);
})


router.get('/error',(req,res)=>{
  res.render('error', { errorTitle: 'It is an Error' });
})

// router.get("/",function(req,res,next){
//   res.render("index");
// })

module.exports = router;
