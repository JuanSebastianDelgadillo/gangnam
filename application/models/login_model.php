<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login_model extends CI_Model{

	public function index()
	{
        $this->db->select('*');
		$this->db->from('usuarios');
		$query = $this->db->get();
		return $query->result();
	}

	public function getLogin($email, $pass)
	{
                $password=md5($pass);
                $this->db->select('*');
                $this->db->from('login');
                $this->db->where('email',$email);
                $this->db->where('password',$password);
                $this->db->limit(1);
                $query = $this->db->get();
                return $query->result();
                
	}


}