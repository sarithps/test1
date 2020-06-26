const fastify = require('fastify')({
  logger: true
})

var address='localhost';

// Declare a route
fastify.get('/concat', function (req, res) {
     response = {
      firstName:req.query.firstName,
      lastName:req.query.lastName,
      fullName:req.query.firstName+req.query.lastName,
      message:"This is a GET call"
   };
   console.log(JSON.stringify(response));
   res.send(JSON.stringify(response));
 
})

fastify.post('/concat/new', function (req, res) {
    response = {
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      fullName:req.body.firstName+req.body.lastName,
      message:"This is a POST call"
   };
   console.log(JSON.stringify(response));
   res.header("Content-Type", "application/json");
   res.send(JSON.stringify(response));
})

// Run the server!
fastify.listen(4444,'localhost', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})
