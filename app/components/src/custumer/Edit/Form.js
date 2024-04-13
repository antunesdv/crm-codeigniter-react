import React, { Component } from 'react';
import axios from "axios"

export default class Form extends Component {

  constructor(){
    super();
    this.state = {
      id: 0,
      fieldName:"",
      fieldEmail:"",
      fieldAddress:"",
      fieldPhone:""
    }
  }

  onClickSave(){
    const baseUrl = "http://localhost:8080/api/customer/create"

    const datapost = {
      id: this.state.id,
      name: this.state.fieldName,
      email: this.state.fieldEmail,
      phone: this.state.fieldPhone,
      address: this.state.fieldAddress,
    }

    console.log('datapost',datapost);

    axios.post(baseUrl,datapost)
    .then(response=>{
      alert(response.data.message)
      this.setState({
        id: 0,
        fieldName: "",
        fieldEmail: "",
        fieldAddress: "",
        fieldPhone: ""
      });
    }).catch(error=>{
      alert("Error 500 "+error)
    })
  }

  render() {
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
                          <input className="form-control" type="text" name="nome" value={this.state.fieldName} onChange={(value)=> this.setState({fieldName:value.target.value})}/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="example-text-input" className="form-control-label">Número de Celular</label>
                          <input name="celular" className="form-control" type="text" value={this.state.fieldPhone} onChange={(value)=> this.setState({fieldPhone:value.target.value})}/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="example-text-input" className="form-control-label">Endereço de Email</label>
                          <input name="email" className="form-control" type="text" value={this.state.fieldEmail} onChange={(value)=> this.setState({fieldEmail:value.target.value})}/>
                        </div>
                      </div>
                    </div>
                    <hr className="horizontal dark"/>
                    <p className="text-uppercase text-sm">Informações de Endereço</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="example-text-input" className="form-control-label">Rua</label>
                          <input name="rua" className="form-control" type="text" value={this.state.fieldAddress} onChange={(value)=> this.setState({fieldAddress:value.target.value})}/>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-primary btn-block" type="submit" onClick={()=>this.onClickSave()}>Cadastrar Aluno</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}