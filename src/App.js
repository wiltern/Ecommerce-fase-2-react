import React from 'react';

import './App.css'


 const formreact = () => {
  return (
    <form>
  <label>
    <h2 className='tipodecadastro'>Tipo de Cadatro</h2>
      <option className='fisjur' value="Pessoafisica" >Pessoa Física</option>
      <input className='fisjur-button' type='radio' name='PessoaFisica'></input>
      <option className='fisjur' value="PessoaJuridica">Pessoa Jurídica</option>
      <input className='fisjur-button' type='radio' name='PessoaJuridica'></input>
  </label>

</form>
  );
  
 }
  
 export default formreact;