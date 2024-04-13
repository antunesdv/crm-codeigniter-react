import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [listCustomer, setListCustomer] = useState([]);

  useEffect(() => {
    buscarClientes();
  }, []);

  const buscarClientes = () => {
    axios.get("http://localhost:8080/api/customer/list")
    .then(response=>{
      console.log(response.data);
      setListCustomer(response.data.data);
    })
    .catch(error=>{
      alert("Error ==>"+error)
    });
  };

  const onClickDelete = (id) => {
    const confirmed = window.confirm("Tem certeza de que deseja excluir este item?");
    if (confirmed) {
      const urlDelete = `http://localhost:8080/api/customer/delete/${id}`;  
      axios.delete(urlDelete)
        .then(response => {
          const res = response.data;
          if (res.success) {
            alert(res.message);
            buscarClientes();
          } else {
            alert(res.message);
          }
        })
        .catch(error => {
          alert("Erro: " + error);
        });
    }
  };
  
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
                      <form action="/clientes/consultaFiltro" method="post">
                        <div className="row">                                            
                          <div className="col-md-6">                                                                                                    
                              <input className="form-control" name="txtfiltro" type="text" value="" placeholder="Digite algo que queira buscar" onFocus="focused(this)" onBlur="defocused(this)" required/>
                          </div>  
                          <div className="col-md-6">                                                                                                    
                              <button type="submit" className="btn btn-primary w-100">Buscar Cliente</button>
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
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Tipo Pessoa</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Telefone</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Celular</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Status</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Categoria Serviço</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Informações</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Novo Serviço</th>
                      </tr>
                    </thead>
                    <tbody>
                    {listCustomer.map((data)=>{
                      return(                                                                                
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
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="me-2 text-xs font-weight-bold">100%</span>
                                    <div>
                                        <div className="progress">
                                            <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>                                                     
                                </div>
                            </td>
                            <td>
                                <span className="me-2 text-xs font-weight-bold">Pagamento Efetuado</span>
                            </td>
                            <td style={{ paddingTop: '25px' }}>
                                <a href={`/clientes/${data.idCliente}`} className="btn btn-sm btn-outline-primary">Mais Informações</a>                                                    
                            </td>
                            <td style={{ paddingTop: '25px' }}>
                                <a  href={`/servicosCadastro/${data.idCliente}`} className="btn btn-sm btn-outline-primary">Cadastrar Serviço</a>                                                    
                            </td>
                        </tr>
                        )
                      })}
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

export default List;
