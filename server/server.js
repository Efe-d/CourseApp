
const express = require('express')
const cors = require('cors')


const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const crouter = require('./routes/classesRouter.js')
app.use('/api/classes', crouter)

const srouter = require('./routes/studentsRouter.js')
app.use('/api/students',srouter)

const routerCourse = require('./routes/coursesRouter.js')
app.use('/api/courses', routerCourse)

//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})