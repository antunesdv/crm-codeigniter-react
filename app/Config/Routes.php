<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
//dashboard
$routes->get('/', 'CustomerController::index');
//listagem de alunos
$routes->get('/list','CustomerController::index');
//busca listagem de alunos no banco
$routes->get('/api/lista','CustomerController::listAlunos');
//perfil do aluno
$routes->get('/edit-aluno/(:num)','CustomerController::index');
//consulta dados
$routes->get('/api/customer/get/(:num)','CustomerController::get/$1');
//edicao aluno
$routes->put('/api/customer/update/(:num)','CustomerController::update/$1');
//busca forms para criacao do cliente
$routes->get('/create','CustomerController::index');
//cria o aluno
$routes->post('/api/customer/create','CustomerController::createCliente');
//deleta o aluno
$routes->delete('api/delete-aluno/(:num)','CustomerController::delete/$1');
