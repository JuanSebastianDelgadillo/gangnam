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
		 try {
			$config['upload_path'] = "./assets/img/perfil_foto";
			$config['file_name'] = $this->input->post("nombre")."_".$this->input->post("apellido");
			$config['allowed_types'] = "png|jpg|jpeg";
			$this->load->library('upload', $config);

			if (!$this->upload->do_upload('avatar')) {
				$data['uploadError'] = $this->upload->display_errors();
				$this->upload->display_errors();
				$name_avatar = $this->input->post("name_avatar");
			}else{
				$data['uploadSuccess'] = $this->upload->data();
				$name_avatar = $data['uploadSuccess']["file_name"];
			}

			$nombre = $this->input->post("nombre");

			$usuarioData = array(
				'nombre'    => $this->input->post("nombre"),
				'apellido'  => $this->input->post("apellido"),
				'perfil' 	=> $this->input->post("perfil"),
				'grado' 	=> $this->input->post("grado"),
				'avatar' 	=> $name_avatar,
				'orden' 	=> $this->input->post("orden")
			);

			$loginData = array(
				'email' 	=> $this->input->post("email"),
        		'password' 	=> $this->input->post("password")
			);

			$edit = array(
				'id'        => $this->input->post("id")
			);
			$passEcript = md5($loginData["password"]);
			$dataLogin = array(
				'email' 	=> $loginData["email"],
				'password' 	=> $passEcript
			);

			$id =  $edit["id"];
			 if($this->session->userdata('user_session')){
				if($id == 0){
					$resUsuario = $this->Inicio_model->guardarUsuario($usuarioData);
					$dataLogin["id"] = $resUsuario;
					$resLogin = $this->Inicio_model->guardarLogin($dataLogin);
	
				}else{
					$resUsuario = $this->Inicio_model->editarUsuario($usuarioData, $id);
					$resLogin = $this->Inicio_model->editarLogin($dataLogin, $id);
				}
	
				if(true){
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
							'text' => 'forbidden',
							'type' => 'warning',
							'payload' => false
					)));
				}
			 }else{
				$this->logout();
			 }
			} catch (Exception $e) {
			 print_r("problemas al guardar". $e);
		 }
	 }

	 public function editar($id = null)
	 {	
		if($this->session->userdata('user_session')){
			$usuarioSTD = new stdClass();
			$perfiles = $this->Inicio_model->getPerfiles();

			if($id != null){
				$usuario = $this->Inicio_model->getUsuario($id);
				$usuarioSTD = $usuario[0];
				$usuarioSTD->password = md5($usuarioSTD->password);
			}else{
				$usuarioSTD->id = 0;
				$usuarioSTD->nombre = "";
				$usuarioSTD->apellido = "";
				$usuarioSTD->email = "";
				$usuarioSTD->perfil = "";
				$usuarioSTD->avatar = "";
				$usuarioSTD->password = "";
				$usuarioSTD->grado = "";
				$usuarioSTD->id = "0";
				$usuarioSTD->orden = $this->Inicio_model->getCantidades()+1;
			}
			
			$datos["usuario"] = $usuarioSTD;
			$datos["perfiles"] = $perfiles;
			$this->load->view('dashboard/inicio', $datos);
			$this->load->view('dashboard/editar', $datos);
			$this->load->view('dashboard/footer');
		 }else{
			$this->logout();
		 }
	 }

	 public function eliminar($id)
	 {	
		if($this->session->userdata('user_session')){
			$datos = array(
				'estado' => 0
			);
			$resp = $this->Inicio_model->delete($id, $datos);

			if($resp){
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
						'text' => 'forbidden',
						'type' => 'warning',
						'payload' => false
				)));
			}
			
		}
	 }

	 public function logout()
	 {
		$this->session->unset_userdata('user_session');
		redirect('/login');
	 }
	
}
