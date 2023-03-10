const express = require("express")
const app = express()
const port = 4444

app.use(express.json())

app.post("/", (req, res) => {
  res.json({
    requestHeaders: req.headers,
    requestParams: req.query,
    requestBody: req.body,
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
