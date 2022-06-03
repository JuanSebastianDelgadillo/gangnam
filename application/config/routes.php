<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'inicio';
//Login
$route['login'] = 'inicio/login';
$route['forgot'] = 'login/forgot';
$route['login_access'] = 'login/login_access';

//Dashboard
$route['dashboard'] = 'dashboard';
$route['dashboard/documents'] = 'dashboard/documentos';
$route['dashboard/galeria'] = 'dashboard/galeria';
$route['dashboard/calendario'] = 'dashboard/calendario';
$route['dashboard/perfil'] = 'dashboard/perfil';
$route['dashboard/alumnos'] = 'dashboard/alumnos';
$route['dashboard/editar/(:num)'] = 'dashboard/editar/$1';
$route['dashboard/guardar_usuario'] = 'dashboard/guardar_usuario';
$route['dashboard/logout'] = 'dashboard/logout';


$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
