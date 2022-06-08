<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {
    public function __construct() {
		parent::__construct();
		$this->load->model('Inicio_model');
	 }

	public function director()
	{
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('pages/director');
		$this->load->view('footers/footer');
	}

    public function acerca()
	{
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('pages/acerca');
		$this->load->view('footers/footer');
	}

    public function programas()
	{
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('pages/programas');
		$this->load->view('footers/footer');
	}

    public function amigos()
	{
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('pages/amigos');
		$this->load->view('footers/footer');
	}

    public function calendario()
	{
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('pages/calendario');
		$this->load->view('footers/footer');
	}

    public function contacto()
	{
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$this->load->view('pages/contacto');
		$this->load->view('footers/footer');
	}

	public function alumnos()
	 {
		$this->load->view('headers/header');
		$this->load->view('headers/navbar');
		$datos["usuarios"] = $this->Inicio_model->getUsuarios();
		$this->load->view('pages/usuarios', $datos);
		$this->load->view('footers/footer');
	 }
}