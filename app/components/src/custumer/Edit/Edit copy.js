import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios" 

const MyComponent = () => {
  const [id, setId] = useState(0)
  const [fieldName, setFieldName] = useState(true)
  const [fieldEmail, setFieldEmail] = useState(true)
  const [fieldPhone, setFieldPhone] = useState(true)  
  const [fieldAddress, setFieldAddress] = useState(true)  
  const parametro = useParams();
  const userId = parametro.id;
  console.log('parametro',userId)

  useEffect(() => {
    const userId = parametro.id;
    axios.get("http://localhost:8080/api/customer/get/"+userId)
    .then(response=>{
      const res = response.data
      if (res.success) {
        console.log("Customer ");
        console.log(res.data);
        setId(res.data.id)
        setFieldName(res.data.name)
        setFieldEmail(res.data.email)
        setFieldAddress(res.data.address)
        setFieldPhone(res.data.phone)
      }
    })
    .catch(error=>{
      alert("Error ==>"+error)
    })
  }, []);

  const onClickUpdate = () => {
    const baseUrl = "http://localhost:8080/api/customer/update/" + id;

    const datapost = {
      name: fieldName,
      email: fieldEmail,
      phone: fieldPhone,
      address: fieldAddress
    };

    axios.put(baseUrl, datapost)
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        alert("Erro 500 " + error);
      });
  };
  
  return (
    <div className="main-content position-relative max-height-vh-100 h-100 ps ps--active-y">
      <div className="card shadow-lg mx-4 card-profile-bottom">
        <div className="card-body p-3">
          <div className="row gx-4">
            <div className="col-auto">
              <div className="avatar avatar-xl position-relative">
                <img src="../assets/img/team-1.jpg" alt="profile_image" className="w-100 border-radius-lg shadow-sm"/>
              </div>
            </div>
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">Consulta de Clientes</h5>
                <p className="mb-0 font-weight-bold text-sm">Usuário</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <p className="text-uppercase text-sm">Informações Necessárias</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="example-text-input" className="form-control-label">Nome Completo</label>
                        <input className="form-control" type="text" name="nome" value={fieldName} onChange={(value)=> setFieldName(value.target.value)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="example-text-input" className="form-control-label">Número de Celular</label>
                        <input name="celular" className="form-control" type="text" value={fieldPhone} onChange={(value)=> setFieldPhone(value.target.value)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="example-text-input" className="form-control-label">Endereço de Email</label>
                        <input name="email" className="form-control" type="text" value={fieldEmail} onChange={(value)=> setFieldEmail(value.target.value)}/>
                      </div>
                    </div>
                  </div>
                  <hr className="horizontal dark"/>
                  <p className="text-uppercase text-sm">Informações de Endereço</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="example-text-input" className="form-control-label">Rua</label>
                        <input name="rua" className="form-control" type="text" value={fieldAddress} onChange={(value)=> setFieldAddress(value.target.value)}/>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-block" type="submit" onClick={onClickUpdate()}>Cadastrar Aluno</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
};

export default MyComponent;