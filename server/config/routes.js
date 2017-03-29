var user = require('./../controllers/users.js')
    console.log('This is the user object from routes.js file',user)
module.exports = function(app){
  app.post('/users/add',function(request,response){// hitting the users.js controller .add method
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

console.log('3. routes.js is working');
