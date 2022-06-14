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
		$datos["dataGaleria"] = $this->getGaleria();
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('bases/sliders');
		$this->load->view('bases/intro');
		$this->load->view('bases/gallery', $datos);
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
		return json_encode($imgs);
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
