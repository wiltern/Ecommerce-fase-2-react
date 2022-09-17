import React  from 'react';

import "./App.css"

import Cabecalho from './Components/Cabeçalho/Cabecalho.jsx'
import Tipocadastro from  './Components/Tipo/Tipocadastro'
import PessoaJuridica from './Components/PessoaJuridica/PessoaJuridica'
import PessoaFisica from './Components/PessoaFisica/PessoaFisica'
import Endereco from './Components/Endereço/Endereco'
import Buttons from './Components/Botões/Buttons'
import { useState } from 'react';


const App = () => {
  const [isPessoaFisica, handleIsPessoaFisica] = useState(true)
  return (
    <div>
      <Cabecalho/>
      <Tipocadastro handleIsPessoaFisica={handleIsPessoaFisica} />
      {
        isPessoaFisica?<PessoaFisica />: <PessoaJuridica/>      
       }
      <Endereco/>
      <Buttons/>
    </div>
    
)};

export default App;