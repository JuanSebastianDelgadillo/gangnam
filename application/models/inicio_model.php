<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio_model extends CI_Model{

	public function index()
	{
        $this->db->select('*');
		$this->db->from('usuarios');
		$query = $this->db->get();
		return $query->result();
	}

	public function getUsuarios()
	{
        $this->db->select('*');
		$this->db->from('usuarios');
		$query = $this->db->get();
		return $query->result();
	}


}