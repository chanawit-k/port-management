import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()
import { connectDB } from './db/connect.cjs'

app.get('/', (req, res) => {
  res.send('Hello World')
})

const port = process.env.PORT || 5100
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
