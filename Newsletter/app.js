const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express()
const port = 3000
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.sendFile(__dirname +"/SignUp.html")


})

app.post('/', function(req,res) {
  const FirstName =req.body.FirstName
  const LastName = req.body.LastName
  const email = req.body.Email

  const data ={
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: FirstName,
          LNAME: LastName
        }

      }
    ]
  }
  const json_data=JSON.stringify(data)
  const option ={
    method: "POST",
    auth: "nhan1:262fb7a86b3605afd96d705e777061ca-us20"
  }

  const url = "https://us20.api.mailchimp.com/3.0/lists/2a6c49c9bb"

  const request = https.request(url,option, function (response) {

    if (response.statusCode === 200){
      res.sendFile(__dirname +"/success.html")
    }else{
      res.sendFile(__dirname +"/failure.html")
    }
    response.on("data", function(data){
      console.log(JSON.parse(data))
    }) 
  })
  
  request.write(json_data);
  request.end();


})


app.post('/failure', function(req,res) {
  res.redirect('/')
  
})

app.post('/success', function(req,res) {
  
})

// API keys
// 262fb7a86b3605afd96d705e777061ca-us20
// listID
//2a6c49c9bb


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})