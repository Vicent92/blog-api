import express from 'express'
import { router } from './router/index.js'

const app = express()

const PORT = process.env.PORT | 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Hello Word</h1>')
})

app.use('/post', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
