const {json} = require("body-parser");
const express = require('express')
const cors = require('cors')
const { queryParser } = require("express-query-parser");

const app = express()

// middleware

app.use(express.json())
app.use(cors())

app.use(
    queryParser({
        parseBooleans: true,
        parseNumbers: true,
        parseNulls: true,
        parseAll: true,
    })
)


// routers
const crouter = require('./routes/classesRouter.js')
app.use('/api/classes', crouter)

const srouter = require('./routes/studentsRouter.js')
app.use('/api/students',srouter)

const routerCourse = require('./routes/coursesRouter.js')
app.use('/api/courses', routerCourse)

const routerScourse = require('./routes/coursestudentRouter.js')
app.use('/api/scourses', routerScourse)
//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})