import 'reflect-metadata'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

import { router } from './routes'
import createConnection from './database'

createConnection()
const app = express()
app.use(express.json())
app.use('/doc', swaggerUi.serve as any, swaggerUi.setup(swaggerDocs) as any)
app.use('/v1', router)

export { app }
