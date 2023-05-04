require('dotenv').config()
const express = require("express");
const cors = require("cors");
const axios = require('axios')
const PORT = process.env.PORT || 8000

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put('https://api.chatengine.io/users/', {
        username: username,
        secret: username,
        first_name: username,
    },{
        headers: {"private-key": process.env.CHATENGINE_PRIVATE_KEY}
    }
    )
    return res.status(response.status).json(response.data)
} catch (error) {
    return res.status(error.response.status).json(error.response.data)
  }

});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});