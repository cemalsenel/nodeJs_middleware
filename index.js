const express = require("express");
require("dotenv").config();
const logger = require("morgan");

console.log(process.env);

const app = express();
const host = "localhost";
const port = process.env.port || 3000;

//middleware
app.use(logger("dev"));

// app.use((req, res, next) => { //Authentication
//      console.log("Auth");
//      res.isAuth=true;
//      (next()) =>authentication'ın next() metodu
//req.studentFirstName="Jimmy"; => request ve response' un içine istediğimiz her bilgiyi ekleyebiliriz
//res.studentLastName="Joe";

//   console.log("session expiry check");
//      const error = new Error("Boomm!!");
//   next(error);  ==> error 2. middleware e gönderildi
// });

// app.use((err, req, res, next) => { //==> middleware 4 parametre alabilir
//      console.log("Controller  //db");
//      if(res.isAuth){
//      console.log("Data")
//      }else{ 
//      console.log("not authenticated")    }
//      console.log("req.studentFirstName",req.studentFirstName); ==> middleware den diğer middleware' e bilgi ginderilebilir.
//      console.log("res.studentLastName",res.studentLastName);
//   console.log("user auth");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("cookies");
// });
// app.use((req, res, next) => {
//   console.log("parsing data");
//   if (true) {
//     res.send("OK");
//      res.send(res.studentLastName)
//   }
// });

app.get("/user", (req, res) => {
  res.send("User Details");
});

const server = app.listen(port, host, () => {
  // console.log(server.address());
  console.log("I am listening on http://%s:%s", host, port);
});
