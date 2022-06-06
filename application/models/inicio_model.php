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
        $this->db->select('usuarios.id,usuarios.nombre, usuarios.apellido, usuarios.rut, usuarios.perfil, usuarios.avatar, usuarios.grado, login.email');
		$this->db->from('usuarios');
		$this->db->join('login', 'usuarios.id = login.id');
		$this->db->where('login.estado', 1);
		$this->db->order_by('orden', 'ASC'); 
		$query = $this->db->get();
		return $query->result();
	}

	public function getUsuario($id)
	{
        $this->db->select('usuarios.id,usuarios.nombre, usuarios.apellido, usuarios.rut, usuarios.perfil, usuarios.avatar, usuarios.grado, usuarios.orden, login.email, login.password');
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
		return $this->db->insert_id();
	}

	public function guardarLogin($datos)
	{
        $this->db->insert('login',$datos);
		return $this->db->affected_rows();
	}

	public function editarUsuario($datos, $id)
	{
        $this->db->where('id', $id);
    	$this->db->update('usuarios', $datos);
		return $this->db->affected_rows();
	}

	public function setPassword($datos, $id)
	{
        $this->db->where('id', $id);
    	$this->db->update('login', $datos);
		return $this->db->affected_rows();
	}
	

	public function editarLogin($datos, $id)
	{
        $this->db->where('id', $id);
    	$this->db->update('login', $datos);
		return $this->db->affected_rows();
	}

	public function getCantidades()
	{
		$this->db->where('login.estado', 1);
		$this->db->join('login', 'usuarios.id = login.id');
		$query = $this->db->get('usuarios');
		return $query->num_rows();
	}

	public function getPerfiles()
	{
		$query = $this->db->get('perfiles');
		return $query->result();
	}

	public function delete($id, $datos)
    {
		$this->db->where('id', $id);
    	$this->db->update('login', $datos);
		return $this->db->affected_rows();
    }

}