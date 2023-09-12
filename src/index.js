import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import apicache from 'apicache'
import v1ActivitiesRoutes from './v1/router/activitiesRoutes.js'

dotenv.config()
const app = express();
const PORT = process.env.PORT|| 8080;
const cache = apicache.middleware

app.use(express.json())
app.use(cache("2 minutes"))
app.use(cors())
app.use("/api/v1/activities", v1ActivitiesRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})