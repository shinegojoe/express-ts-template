import dotenv from 'dotenv'
const _env = dotenv.config({
  path: `${process.cwd()}/config/${process.env.NODE_ENV}.env`
})

import express from 'express'
import cors from 'cors'
import router from './router/index'
import errorHandler from './errorHandler'




const port = process.env.PORT

const app = express()

// app.use(formData.parse(options))
app.use(cors())
app.use(express.json({limit: '2100000000kb'}))
app.use('/api', router)
app.use(errorHandler)


app.listen(port, () => {
  // fileLogger.info(`http server is running at port ${port}.`);
  console.log('start at ', port)
})