<?php

//importation de controller
use app\controllers\Controller;
use app\controllers\ApiController;
use app\controllers\DbController;


//importation lié flight
use flight\Engine;
use flight\net\Router;

//use Flight;

/** 
 * @var Router $router 
 * @var Engine $app
 */
/*$router->get('/', function() use ($app) {
	$Welcome_Controller = new WelcomeController($app);
	$app->render('welcome', [ 'message' => 'It works!!' ]);
});*/

$Controller = new Controller();

$router->get('/', [$Controller, 'acceuil']);

// API routes
$Api = new ApiController();
$router->get('/api/status', [$Api, 'status']);

// Article CRUD routes
$Article = new \app\controllers\ArticleController();
$router->group('/api', function() use ($router, $Article) {
    $router->get('/articles', [$Article, 'getAll']);
    $router->get('/articles/@id:[0-9]+', [$Article, 'getOne']);
    $router->post('/articles', [$Article, 'create']);
    $router->put('/articles/@id:[0-9]+', [$Article, 'update']);
    $router->delete('/articles/@id:[0-9]+', [$Article, 'delete']);
});

// User CRUD routes
$User = new \app\controllers\UserController();
$router->group('/api', function() use ($router, $User) {
    $router->get('/users', [$User, 'getAll']);
    $router->get('/users/@id:[0-9]+', [$User, 'getOne']);
    $router->post('/users', [$User, 'create']);
    $router->put('/users/@id:[0-9]+', [$User, 'update']);
    $router->delete('/users/@id:[0-9]+', [$User, 'delete']);
});

// DB status
$Db = new DbController();
$router->get('/api/db-status', [$Db, 'status']);



// $router->get('/', \app\controllers\WelcomeController::class.'->home'); 

// $router->get('/hello-world/@name', function($name) {
// 	echo '<h1>Hello world! Oh hey '.$name.'!</h1>';
// });

// $router->group('/api', function() use ($router, $app) {
// 	$Api_Example_Controller = new ApiExampleController($app);
// 	$router->get('/users', [ $Api_Example_Controller, 'getUsers' ]);
// 	$router->get('/users/@id:[0-9]', [ $Api_Example_Controller, 'getUser' ]);
// 	$router->post('/users/@id:[0-9]', [ $Api_Example_Controller, 'updateUser' ]);
// });

?>