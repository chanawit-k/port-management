import 'express-async-errors'
import * as dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
import connectDB from './db/connect.js'
import express from 'express'
import portRouter from './routes/portRouter.js'

// public
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

// middleware
import notFound from './middleware/notfoundMiddleware.js'
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

const app = express()
app.use(express.json())
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './client/dist')))
app.use(cookieParser())

// routers
app.use('/api/v1/port', portRouter)

app.get('/', (req, res) => {
  res.send('Hello World')
})

// middleware
app.use(notFound)
app.use(errorHandlerMiddleware)

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
