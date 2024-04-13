import React, { Component } from 'react'; 
import axios from "axios"
import { Link } from "react-router-dom";
export default class List extends Component {
  
  
  render() {
    return (
      <div class="container-fluid py-4">
      <div class="row">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Mensalidade Média</p>
                    <h5 class="font-weight-bolder">
                      R$ 673,15
                    </h5>
                    <p class="mb-0">                      
                      Atualizado recentemente
                    </p>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                    <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Alunos Matriculados </p>
                    <h5 class="font-weight-bolder">
                    1248
                    </h5>
                    <p class="mb-0">                      
                      Atualizado recentemente
                    </p>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                    <i class="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Professores Cadastrados</p>
                    <h5 class="font-weight-bolder">
                      48 ( 7 reservas )
                    </h5>
                    <p class="mb-0">
                    Atualizado recentemente
                    </p>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                    <i class="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Média de Notas</p>
                    <h5 class="font-weight-bolder">
                    7,76
                    </h5>
                    <p class="mb-0">
                    Atualizado recentemente
                    </p>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                    <i class="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <div class="row mt-4">
        <div class="col-md-5">
          <div class="card">
            <div class="card-header pb-0 p-3">
              <h6 class="mb-0">Serviços</h6>
            </div>
            <div class="card-body p-3">
              <ul class="list-group">
                <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i class="ni ni-mobile-button text-white opacity-10"></i>
                    </div>
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-dark text-sm">Matriculas Realizadas</h6>
                      <span class="text-xs"> 5 matriculas foram realizadas esse mês </span>
                    </div>
                  </div>
                  <div class="d-flex">
                    <a class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></a>
                  </div>
                </li>
                <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i class="ni ni-tag text-white opacity-10"></i>
                    </div>
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-dark text-sm">Transferências</h6>
                      <span class="text-xs"> 1 transferência foi realizadas esse mês </span>
                    </div>
                  </div>
                  <div class="d-flex">
                  <a class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></a>
                  </div>
                </li>
                <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i class="ni ni-box-2 text-white opacity-10"></i>
                    </div>
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-dark text-sm">Matriculas Pendentes de Pagamento</h6>
                      <span class="text-xs">  397 matriculas estão pendente de pagamentos nos ultimos 3 meses </span>
                    </div>
                  </div>
                  <div class="d-flex">
                  <a class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></a>
                  </div>
                </li>
                <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i class="ni ni-satisfied text-white opacity-10"></i>
                    </div>
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-dark text-sm">Matriculas Pendentes</h6>
                      <span class="text-xs"> 12 matriculas estão pendente por falta de documentação</span>
                    </div>
                  </div>
                  <div class="d-flex">
                  <a class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> 
        <div class="col-md-7">
          <div class="card ">
            <div class="card-header pb-0 p-3">
              <div class="d-flex justify-content-between">
                <h6 class="mb-2">Resumo</h6>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center ">
                <tbody>                
                  <tr>
                    <td class="w-30">
                      <div class="d-flex px-2 py-1 align-items-center">
                        <div class="ms-4">
                          <p class="text-xs font-weight-bold mb-0"> Mensalidades </p>
                          <h6 class="text-sm mb-0">Valores pagos em dia</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Cartão:</p>
                        <h6 class="text-sm mb-0">R$ 250.000,00</h6>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Pix:</p>
                        <h6 class="text-sm mb-0">R$320.091,20</h6>
                      </div>
                    </td>
                    <td class="align-middle text-sm">
                      <div class="col text-center">
                        <p class="text-xs font-weight-bold mb-0">Dinheiro:</p>
                        <h6 class="text-sm mb-0">R$270.000</h6>
                      </div>
                    </td>
                  </tr>    
                  <tr>
                    <td class="w-30">
                      <div class="d-flex px-2 py-1 align-items-center">
                        <div class="ms-4">
							<p class="text-xs font-weight-bold mb-0"> Mensalidades com Pendência </p>
                          <h6 class="text-sm mb-0">Valores Pendentes</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Cartão:</p>
                        <h6 class="text-sm mb-0">R$ 15.000,00</h6>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Pix:</p>
                        <h6 class="text-sm mb-0">R$ 18.357,00</h6>
                      </div>
                    </td>
                    <td class="align-middle text-sm">
                      <div class="col text-center">
                        <p class="text-xs font-weight-bold mb-0">Dinheiro:</p>
                        <h6 class="text-sm mb-0">R$ 0,00</h6>
                      </div>
                    </td>
                  </tr>             
                </tbody>
              </table>
            </div>
          </div>
        </div>      
      </div>      
    </div>
    );
  }
} 