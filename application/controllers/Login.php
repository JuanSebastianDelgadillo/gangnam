<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	public function __construct() {
		parent::__construct();
		// load the model page
		$this->load->model('Login_model');
		$this->load->model('Inicio_model');
		  // Load these helper to create JWT tokens
		 //$this->load->helper(['jwt', 'authorization']);
	 }


	public function login()
	{
		$this->session->unset_userdata('user_session');
		$data = $this->Login_model->getUsuarios();
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('bases/login');
		$this->load->view('footers/footer');
		// RewriteRule ^(.*)$ /carpeta/index.php/$1 [L]
	}

	public function forgot()
	{
		//$data = $this->Login_model->getUsuarios();
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('bases/login');
		$this->load->view('footers/footer');
		// return $this->db->affected_rows();
	}

	public function login_access()
	{	
		try {
			$email = $this->input->post('inputEmail');
			$pass = $this->input->post('inputPassword');
			$data = $this->Login_model->getLogin($email, $pass);
			if(count($data) > 0){
				$datos = $this->Inicio_model->getUsuario($data[0]->id);
				$arraydata = array(
					'nombre'  => $datos[0]->nombre,
					'apellido'=> $datos[0]->apellido,
					'email'   => $email,
					'perfil' => $datos[0]->perfil,
					'grado'	 => $datos[0]->grado,
					'avatar' => $datos[0]->avatar,
				);
				$this->session->set_userdata('user_session',$arraydata);
				return $this->output
				->set_content_type('application/json')
				->set_status_header(200)
				->set_output(json_encode(array(
						'text' => 'Success',
						'type' => 'success',
						'payload' => true
				)));



				//  // get e'thing stored in session at once
				//  echo '<pre>';
				//  print_r($this->session->userdata());
				  
				//  /**** REMOVE SESSION DATA ****/
				//  // unset specific key from session
				//  $this->session->unset_userdata('favourite_website');
				  
				//  // unset multiple items at once
				//  $keys = array('twitter_id', 'interests');
				//  $this->session->unset_userdata($keys);
			  
				//  echo '<pre>';
				//  print_r($this->session->userdata());
			}else{
				return $this->output
				->set_content_type('application/json')
				->set_status_header(500)
				->set_output(json_encode(array(
						'text' => 'Error 500',
						'type' => 'danger',
						'payload' => false
				)));
			}
				
		} catch (Exception $e) {
			echo 'Excepción capturada: ',  $e->getMessage(), "\n";
			return $this->output
            ->set_content_type('application/json')
            ->set_status_header(500)
            ->set_output(json_encode(array(
                    'text' => 'Error 500',
                    'type' => 'danger',
					'payload' => $e
            )));
		}
		
		

		

		
	}
}
