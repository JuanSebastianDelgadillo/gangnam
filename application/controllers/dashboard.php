<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	public function __construct() {
		parent::__construct();
		// load the model page
		$this->load->model('Login_model');
		$this->load->model('Inicio_model');
		  // Load these helper to create JWT tokens
		 //$this->load->helper(['jwt', 'authorization']);
	 }

	 public function index()
	 {
		 if($this->session->userdata('user_session')){
			 $datos = $this->session->userdata('user_session');
			 $cantidades["alumnos"] = $this->Inicio_model->getCantidades();
			 $this->load->view('dashboard/inicio', $datos);
			 $this->load->view('dashboard/main',$cantidades);
				// if($datos["perfil"] == 1){
				// 	$this->load->view('dashboard/main_admin',$cantidades);
				// }else{
				// 	$this->load->view('dashboard/main',$cantidades);
				// }
			$this->load->view('dashboard/footer');
		 }else{
			$this->logout();
		 }
	 }

	 public function documentos()
	 {
		 if($this->session->userdata('user_session')){
			 $datos = $this->session->userdata('user_session');
			$this->load->view('dashboard/inicio', $datos);
			$this->load->view('dashboard/documentos');
			$this->load->view('dashboard/footer');
		 }else{
			$this->logout();
		 }
	 }

	 public function galeria()
	 {
		 if($this->session->userdata('user_session')){
			 $datos = $this->session->userdata('user_session');
			$this->load->view('dashboard/inicio', $datos);
			$this->load->view('dashboard/galeria');
			$this->load->view('dashboard/footer');
		 }else{
			$this->logout();
		 }
	 }

	 public function calendario()
	 {
		 if($this->session->userdata('user_session')){
			 $datos = $this->session->userdata('user_session');
			$this->load->view('dashboard/inicio', $datos);
			$this->load->view('dashboard/calendario');
			$this->load->view('dashboard/footer');
		 }else{
			$this->logout();
		 }
	 }

	 public function perfil()
	 {
		 if($this->session->userdata('user_session')){
			$datos = $this->session->userdata('user_session');
			$this->load->view('dashboard/inicio', $datos);
			$this->load->view('dashboard/perfil',$datos);
			$this->load->view('dashboard/footer');
		 }else{
			$this->logout();
		 }
	 }

	 public function alumnos()
	 {
		 if($this->session->userdata('user_session')){
			 $datos = $this->session->userdata('user_session');
			 $datos["usuarios"] = $this->Inicio_model->getUsuarios();
			$this->load->view('dashboard/inicio', $datos);
			$this->load->view('dashboard/usuarios', $datos);
			$this->load->view('dashboard/footer');
		 }else{
			$this->logout();
		 }
	 }

	 public function guardar_usuario()
	 {
	
		$usuarioData = $this->input->post('usuario');
		$loginData   = $this->input->post('login');
		print_r($loginData);

		$passEcript = md5($loginData["password"]);

		$dataLogin = array(
			'email' 	=> $loginData["email"],
			'password' 	=> $passEcript
	    );

		 if($this->session->userdata('user_session')){
			 $datos = $this->session->userdata('user_session');
			 $res = $this->Inicio_model->guardarUsuario($usuarioData);
			 $res = $this->Inicio_model->guardarLogin($dataLogin);

			 if($res){
				return $this->output
				->set_content_type('application/json')
				->set_status_header(200)
				->set_output(json_encode(array(
						'text' => 'Success',
						'type' => 'success',
						'payload' => true
				)));
			 }else{
				return $this->output
				->set_content_type('application/json')
				->set_status_header(200)
				->set_output(json_encode(array(
						'text' => 'Success',
						'type' => 'success',
						'payload' => true
				)));
			 }
		 }else{
			$this->logout();
		 }
	 }

	 public function editar($id = null)
	 {	
		// $id=null;
		if($this->session->userdata('user_session')){
			$usuarioSTD = new stdClass();
			if($id != null){
				$usuario = $this->Inicio_model->getUsuario($id);
				$usuarioSTD = $usuario[0];
				$usuarioSTD->password = "";
			}else{
				
				$usuarioSTD->nombre = "";
				$usuarioSTD->apellido = "";
				$usuarioSTD->email = "";
				$usuarioSTD->perfil = "";
				$usuarioSTD->avatar = "";
				$usuarioSTD->password = "";
				$usuarioSTD->grado = "";
				$usuarioSTD->orden = $this->Inicio_model->getCantidades()+1;
			}
			
			$datos["usuario"] = $usuarioSTD;
			$this->load->view('dashboard/inicio', $datos);
			$this->load->view('dashboard/editar', $datos);
			$this->load->view('dashboard/footer');
		 }else{
			$this->logout();
		 }
	 }

	 public function logout()
	 {
		$this->session->unset_userdata('user_session');
		redirect('/login');
	 }
	
}
