var user = require('./../controllers/users.js')
    console.log(user)
module.exports = function(app){
  app.post('/users/add',function(request,response){
    user.add(request,response)
    })
  app.get('/users/getall', function(request,response){
    user.getAll(request,response)
    })
  app.get('/users/delete/:id', function(request,response){
    user.delete(request,response)
    })
  app.post('/users/change', function(request,response){
    console.log('routes: ',request.body);
    user.change(request,response)
    })
}

console.log('routes.js is working');
