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
        $this->db->select('usuarios.id,usuarios.nombre, usuarios.apellido, usuarios.perfil, usuarios.avatar, usuarios.grado, login.email');
		$this->db->from('usuarios');
		$this->db->join('login', 'usuarios.id = login.id');
		$this->db->order_by('orden', 'ASC'); 
		$query = $this->db->get();
		return $query->result();
	}

	public function getUsuario($id)
	{
        $this->db->select('usuarios.id,usuarios.nombre, usuarios.apellido, usuarios.perfil, usuarios.avatar, usuarios.grado, usuarios.orden, login.email');
		$this->db->from('usuarios');
		$this->db->where('usuarios.id',$id);
		$this->db->join('login', 'usuarios.id = login.id');
		$this->db->limit(1);
		$query = $this->db->get();
		return $query->result();
	}

	public function guardarUsuario($datos)
	{
        $this->db->insert('usuarios',$datos);
		return $this->db->affected_rows();
	}

	public function guardarLogin($datos)
	{
        $this->db->insert('login',$datos);
		return $this->db->affected_rows();
	}
	

	public function getCantidades()
	{
		$query = $this->db->get('usuarios');
		return $query->num_rows();
	}

}