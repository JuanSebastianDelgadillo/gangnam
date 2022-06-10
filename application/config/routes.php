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
$route['dashboard/cambiar/(:num)'] = 'dashboard/cambiar/$1';
$route['dashboard/guardar_usuario'] = 'dashboard/guardar_usuario';
$route['dashboard/eliminar/(:num)'] = 'dashboard/eliminar/$1';
$route['dashboard/logout'] = 'dashboard/logout';



//Pages
$route['director']  = 'pages/director';
$route['acerca']    = 'pages/acerca';
$route['programas'] = 'pages/programas';
$route['amigos']    = 'pages/amigos';
$route['calendario']= 'pages/calendario';
$route['contacto']  = 'pages/contacto';
$route['alumnos']  = 'pages/alumnos';
$route['getGaleria']  = 'inicio/getGaleria';


$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
