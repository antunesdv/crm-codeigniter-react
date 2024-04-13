import React, { Component } from 'react'; 
import axios from "axios"
import { Link } from "react-router-dom";
export default class List extends Component {
  constructor(){
    super()
    this.state = {
      listCustomer:[]
    }
  }
  componentDidMount(){
    this.buscarClientes();
  }

  buscarClientes(){
    axios.get("http://localhost:8080/api/lista")
    .then(response => {
      console.log("response.data",response.data.data);
      this.setState({ listCustomer: response.data.data});
           
    })
  }

  onClickDelete(id) {
    const confirmed = window.confirm("Tem certeza de que deseja excluir este item?");
    if (confirmed) {
      const urlDelete = `http://localhost:8080/api/delete-aluno/${id}`;  
      axios.delete(urlDelete)
        .then(response => {
          const res = response.data;
          if (res.success) {
            alert(res.message);
            this.buscarClientes();
          } else {
            alert(res.message);
          }
        })
        .catch(error => {
          alert("Erro: " + error);
        });
    }
  }
  
  render() {    
    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header pb-0">
                  <h6>Filtrar Clientes</h6>                            
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">            
                    <div className="card-body">            
                        <form>
                          <div className="row">                                            
                            <div className="col-md-6">                                                                                                    
                                <input className="form-control" type="text" placeholder="Digite algo que queira buscar (DESATIVADO)" readOnly/>
                            </div>  
                            <div className="col-md-6">                                                                                                    
                                <button className="btn btn-primary w-100">Buscar Cliente</button>
                            </div>                                                                                                                               
                          </div>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>                    
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                    <h6>Clientes</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center justify-content-center mb-0 text-center">
                      <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nome</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">E-mail</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Endereço</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Telefone</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Data de Cadastro</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">PERFIL/EDIÇÃO</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Excluir Aluno</th>
                        </tr>
                      </thead>
                      <tbody>                      
                      {this.state.listCustomer.map((data) => (
                          <tr key={data.id}>
                              <td>
                                  <div className="my-auto">
                                      <div className="my-auto">
                                          <h6 className="mb-0 text-sm">{data.name}</h6>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <p className="text-sm font-weight-bold mb-0">{data.email}</p>
                              </td>
                              <td>
                                  <span className="text-xs font-weight-bold">{data.address}</span>
                              </td>                                                
                              <td>
                                  <span className="text-xs font-weight-bold">{data.phone}</span>
                              </td>                              
                              <td>
                                  <span className="me-2 text-xs font-weight-bold">{data.created_at}</span>
                              </td>
                              <td style={{ paddingTop: '25px' }}>
                                <a href={`/edit-aluno/${data.id}`} className="btn btn-sm btn-outline-primary">Editar Aluno</a>                                                    
                              </td>
                              <td style={{ paddingTop: '25px' }}>
                                <a onClick={()=>this.onClickDelete(data.id)} className="btn btn-sm btn-outline-primary">Excluir Aluno</a>                                                    
                              </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
} 