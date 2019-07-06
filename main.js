require('dotenv').config()

const app = require('./src/infra/app')

app.listen(process.env.APP_PORT, () => {
  console.log(`App listening on port ${process.env.APP_PORT}!`)
})
