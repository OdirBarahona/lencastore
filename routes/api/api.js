///rutas->router->app:express
///rutas->router:entidad->router:api->app:express

var express= require('express');
var router=express();


//http://localhost:3000/api/version
router.get('/version',function(req,res){
    res.status(200).json({"version":"API v1.0"});
});


module.exports = router;
