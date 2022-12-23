const express = require("express")
const app = express()
const port = 4444

app.use(express.json())

app.post("/", (req, res) => {
  res.json({
    requestHeaders: req.headers,
    requestBody: req.body,
    requestParams: req.query,
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
