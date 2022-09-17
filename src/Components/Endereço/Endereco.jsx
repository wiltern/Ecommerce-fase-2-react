import "./Endereco.css"

const Endereco = () => {
    return ( 
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
     )};
 
export default Endereco;