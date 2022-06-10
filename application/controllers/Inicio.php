<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio extends CI_Controller {

	public function __construct() {
		parent::__construct();
		// load the model page
		$this->load->model('Inicio_model');
		  // Load these helper to create JWT tokens
		 //$this->load->helper(['jwt', 'authorization']);
	 }


	public function index()
	{	
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('bases/sliders');
		$this->load->view('bases/intro');
		$this->load->view('bases/gallery');
		$this->load->view('bases/programas');
		$this->load->view('bases/planes');
		$this->load->view('bases/bottom');
		$this->load->view('footers/footer');
	}

	public function getGaleria()
	{
		$directory = "./assets/img/galeria_fotos";
		$dh  = opendir($directory);
		while (($file = readdir($dh)) !== false)  {
			if($file != "." && $file != ".." && explode(".", $file)[1] != "MP4"){
				$imgs[] = $file;
			}
		}
		closedir($dh);

		return $this->output
			->set_content_type('application/json')
			->set_status_header(200)
			->set_output(json_encode(array(
					'text' => 'forbidden',
					'type' => 'warning',
					'payload' => $imgs
			)));
	}

	public function login()
	{
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('bases/login');
		$this->load->view('footers/footer');
	}

	public function forgot()
	{
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('bases/login');
		$this->load->view('footers/footer');
	}
}
