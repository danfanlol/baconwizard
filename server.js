const express = require("express")
const app = express()
let cors = require("cors");

app.use(cors());

app.post("/api", (req,res) => {
  res.send("n word")
})



app.listen(5000, () => {console.log("listening on port 5000")})