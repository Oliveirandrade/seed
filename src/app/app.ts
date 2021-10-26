import express, { Response as ExResponse, Request as ExRequest } from 'express'
import swaggerUi from 'swagger-ui-express'
import morgan from 'morgan'
import cors from 'cors'
import { RegisterRoutes } from '../interface/http/routes'
import errorHandler from '../interface/http/middlewares/errorHandler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(swaggerUi.generateHTML(await import('../interface/http/swagger.json')))
})
RegisterRoutes(app)
app.use(errorHandler)

export default app
