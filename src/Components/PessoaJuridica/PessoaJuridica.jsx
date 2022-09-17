import "./DadosPessoais.css"

const PessoaJuridica = () => {
    return ( 
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
     );
}
 
export default PessoaJuridica;

// const PessoaFisica = () => {
//   return ( 
//       <div className='containerdp'>
//       <h2 className="titulodp">Dados Pessoais</h2>
//        <div className="dadosdp">
        
//           <h4>Nome Completo: <span><input type="text" name="nomecompleto" /></span>*</h4>

//           <h4>CNPJ: <span> <input type="number" name="CNPJ" />*</span></h4>
         
//           <h4>Razão Social: <span><input type="text" name="razaosocial" /></span>*</h4>
          
//           <h4>Inscrição Estadual: <span><input type="number" name="inscricaoestadual" />*</span></h4>
          

//           <h4>Celular: <span><input type="number" name="celular" /></span>*</h4>
          
          
//           <h4>Telefone Fixo: <span><input type="number" name="telefonefixo" /></span></h4>
            
//         </div>
//   </div>
//    );
// }

// export default PessoaFisica;