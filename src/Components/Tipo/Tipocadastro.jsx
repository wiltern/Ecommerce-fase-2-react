
import "./Tipocadastro.css"


    const Tipocadastro = ({handleIsPessoaFisica}) => {

      return ( 
        <form>
        <div className='containertipo'>
          <h2 className='Tipocadastro'>Tipo de Cadastro</h2>
          
         
          <p className='fisjur' value="Pessoafisica" >Pessoa Física</p>
          <input  type='radio' name='Tipodecad' className='fisjur-button' onClick={()=>(handleIsPessoaFisica(true))} checked value="PessoaFisica"/>
        
          <p className='fisjur' value="PessoaJuridica">Pessoa Jurídica</p>
          <input  type='radio' name='Tipodecad' className='fisjur-button' onClick={()=>(handleIsPessoaFisica
          (false))} value="PessoaJuridica"/>
          
    </div>
    </form>
       );
    }
     
    export default Tipocadastro;
    

     


