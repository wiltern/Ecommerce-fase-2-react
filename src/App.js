import React  from 'react';
import { useState } from 'react';

import "./App.css"

import Cabecalho from './Components/Cabeçalho/Cabecalho.jsx'
import Tipocadastro from  './Components/Tipo/Tipocadastro'
import PessoaJuridica from './Components/PessoaJuridica/PessoaJuridica'
import PessoaFisica from './Components/PessoaFisica/PessoaFisica'
import Endereco from './Components/Endereço/Endereco'
import Buttons from './Components/Botões/Buttons'
import pagLogin from './Components/Tela-de-login/telaDeLogin';



const App = () => {
  const [isPessoaFisica, handleIsPessoaFisica] = useState(true)
  return (
    <div>
      <pagLogin />
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