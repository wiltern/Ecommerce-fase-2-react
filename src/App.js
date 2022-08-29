import React from 'react';


import "./App.css"

const cabecalho = () => {
  return(

    <>
      
        <div className='containerpg'>
          <h1 className='titulo'>Página de Cadastro</h1>
          <p className='infotitulo'>Insira aqui seus dados para cadastro.</p>
        </div>
     
        <div className='containertipo'>
            <h2 className='tipodecadastro'>Tipo de Cadastro</h2>
            <p className='fisjur' value="Pessoafisica" >Pessoa Física</p>
            <input className='fisjur-button' type='radio' name='PessoaFisica'></input>
            <p className='fisjur' value="PessoaJuridica">Pessoa Jurídica</p>
            <input className='fisjur-button' type='radio' name='PessoaJuridica'></input>
        </div>

        <div className='containerdp'>
            <h2 className="titulodp">Dados Pessoais</h2>
             <div className="dadosdp">
              
                <h4>Nome Completo: <span><input type="text" name="nomecompleto" /></span>*</h4>

                <h4>CNPJ: <span> <input type="number" name="CNPJ" />*</span></h4>
               
                <h4>Razão Social: <span><input type="text" name="razaosocial" /></span>*</h4>
                
                <h4>Inscrição Estadual: <span><input type="number" name="inscricaoestadual" />*</span></h4>
                

                <h4>Celular: <span><input type="number" name="celular" /></span>*</h4>
                
                
                <h4>Telefone Fixo: <span><input type="number" name="telefonefixo" /></span></h4>
                  
              </div>
        </div>
        <div className='containerend'>
            <h2 className="tituloend">Endereço</h2>
             <div className="dadosend">
              
                <h4>CEP: <span><input type="text" name="cep" /></span>*</h4>

                <h4>Endereço: <span> <input type="text" name="endereco" /></span>*</h4>
               
                <h4>Número: <span><input type="number" name="numero" />*</span></h4>
                
                <h4>Complemento: <span><input type="text" name="complemento" /></span>*</h4>
                

                <h4>Referência: <span><input type="text" name="referencia" /></span></h4>
                
                
                <h4>Bairro: <span><input type="text" name="bairro" /></span></h4>

                <h4>Cidade: <span><input type="text" name="cidade" /></span></h4>

                <h4>Estado: <span><input type="text" name="estado" /></span></h4>
                  
              </div>
        </div>
        
              <div className='containerbotoes'>
                <button className='botaocancel' type="button" name="cancelar">Cancelar</button>
                <button className='botaoenviar' type="button" name="enviar">Enviar</button>
              </div>
              
              

                
            
    </>
  )
}
export default cabecalho;





 