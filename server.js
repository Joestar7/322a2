const express = require('express')
const nodemailer = require('nodemailer');
const app = express()
const port = 80

app.use(express.static('public')); 


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fangzhouli906@gmail.com',
      pass: '753951024034@'
    }
  });
  

function rootPath1 (req, res){
    console.log("You reached root path1")
    let fileName = __dirname + '/Home.html';
    res.sendFile(fileName);
}

function rootPath2 (req, res){
    console.log("You reached root path2")
    let fileName = __dirname + '/Room Listing.html';
    res.sendFile(fileName);
}

function rootPath3 (req, res){
    console.log("You reached root path3")
    let fileName = __dirname + '/Registration.html';
    res.sendFile(fileName);
}

function R (req, res){
    console.log("You reached root path4")
    let fileName = __dirname + '/blank.html';
    res.sendFile(fileName);
}

function sendEmail(req,res){
    let email = req.params.mailaddress;
    
  var mailOptions = {
    from: 'fangzhouli906@gmail.com',
    to: email,
    subject: 'Validate your account',
    text: 'You are validating your account'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send("Failed to send email")
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send("OK");
    }
  }); 
}

function pic1 (req, res){
    console.log("You reached root path3")
    let fileName = __dirname + '/1.jpg';
    res.sendFile(fileName);
}

function pic6 (req, res){
    console.log("You reached root path3")
    let fileName = __dirname + '/6.jpg';
    res.sendFile(fileName);
}


function r(req,res){
    console.log(req.body);
}
app.post('/see', r);

app.get('/', rootPath1);
app.get('/watch', rootPath2);
app.get('/see', rootPath3);
app.get('/blank', R);
app.get('/sendemail/:mailaddress', sendEmail)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

