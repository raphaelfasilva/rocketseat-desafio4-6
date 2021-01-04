const express = require('express')
const routes = express.Router()
const teachers = require('./teachers');
routes.get('/', function(req, res) {
    return res.redirect("/teachers")

})
routes.get('/teachers', teachers.index)
routes.post('/teachers', teachers.post)
routes.get('/teachers/create', function(req, res) {
    return res.render("teachers/create")
})
routes.get('/teachers/:id', teachers.show)
routes.get('/teachers/:id/edit', teachers.edit)
routes.put('/teachers', teachers.put)
routes.delete('/teachers', teachers.delete)
module.exports = routes