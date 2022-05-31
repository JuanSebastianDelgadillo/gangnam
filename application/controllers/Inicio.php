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
		$data = $this->Inicio_model->getUsuarios();
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('bases/sliders');
		$this->load->view('bases/galeria');
		$this->load->view('index', $data);
		$this->load->view('footers/footer');
	}
}
