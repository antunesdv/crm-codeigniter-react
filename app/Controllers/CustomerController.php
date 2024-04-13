<?php namespace App\Controllers;

use CodeIgniter\Controller;
Use App\Models\CustomerModel;
 
class CustomerController extends Controller
{

	protected $customer;
	protected $request;

	public function __construct()
	{
		 $this->customer = new CustomerModel();
		 $this->request = \Config\Services::request();
	}

	public function index()
	{
		return view('dashboard');
	}

	public function dashboard()
	{
		return view('dashboard');
	}

	public function createCliente(){
    try {		
		$json = $this->request->getJSON();        
        if (empty($json)) {            
            $response['success'] = false;
            $response['message'] = "Dados inválidos";
            return json_encode($response);
        }        
        $insert['name'] = $json->name;
        $insert['email'] = $json->email;
        $insert['phone'] = $json->phone;
        $insert['address'] = $json->address;        
		$res = $this->customer->insert($insert);        
        $response['success'] = true;
        $response['message'] = "Dados recebidos com sucesso";		
        return json_encode($response);
    }
    catch (\Exception $e)
    {
      $response['success'] = false;
      $response['message'] = $e->getMessage();
      return json_encode($response);
    }
  }

  // add function for list 
  public function listAlunos(){
  try {
    $clientes = $this->customer->findAll();
    $response = [
      'success' => true,
      'message' => 'Clientes carregados com sucesso',
      'data' => $clientes
    ];		
    return json_encode($response);
  } catch (\Exception $e) {
    $response['success'] = false;
    $response['message'] = $e->getMessage();
    return json_encode($response);
  }
}

  	public function get($id){
		try {
			$cliente = $this->customer->find($id);
			if ($cliente) {
				$response = [
					'success' => true,
					'message' => 'Cliente carregado com sucesso',
					'data' => $cliente
				];
			} else {
				$response = [
					'success' => false,
					'message' => 'Cliente não encontrado'
				];
			}
		} catch (\Exception $e) {
			$response = [
				'success' => false,
				'message' => 'Erro ao carregar cliente: ' . $e->getMessage()
			];
		}
		return json_encode($response);
	}

	public function update($id){
		try {			
			$json = $this->request->getJSON();	
			
			if (empty($json)) {
				throw new \Exception('Nenhum dado recebido para atualização.');
			}	
			
			$update = [
				'name' => $json->name,
				'email' => $json->email,
				'phone' => $json->phone,
				'address' => $json->address
			];	
			
			$res = $this->customer->update($id, $update);	
			
			if ($res) {				
				$response = [
					'success' => true,
					'message' => 'Cliente atualizado com sucesso'
				];
			} else {				
				$response = [
					'success' => false,
					'message' => 'Falha ao atualizar o cliente'
				];
			}
		} catch (\Exception $e) {			
			$response = [
				'success' => false,
				'message' => 'Erro ao atualizar cliente: ' . $e->getMessage()
			];
		}
		return json_encode($response);
	}

	public function delete($id){
    try {
        $res = $this->customer->delete($id);
        if ($res) {
            $response = [
                'success' => true,
                'message' => 'Cliente excluído com sucesso'
            ];
        } else {
            $response = [
                'success' => false,
                'message' => 'Falha ao excluir o cliente'
            ];
        }
    } catch (\Exception $e) {
        $response = [
            'success' => false,
            'message' => 'Erro ao excluir cliente: ' . $e->getMessage()
        ];
    }
    return json_encode($response);
}
}