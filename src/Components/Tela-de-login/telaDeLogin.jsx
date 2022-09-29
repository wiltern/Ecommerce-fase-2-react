import React from 'react'
import authService from './services/auth.service';

// import { redirect } from 'react-router-dom';
// import { withRouter } from "react-router";


import './telaDeLogin.css';


class pagLogin extends React.Component{

    constructor(props) {
      super(props)
      this.state = {
        nickname : "",
        password : "",
        redirectTo : null
      }
    }

    sendLogin = async (event) => {
      event.preventDefault();
      let data = {
        nickname : this.state.nickName,
        password : this.state.password
      }
      try{
        let res =  await authService.authenticate(data)
        console.log("res", res.data)
        authService.setLoggedUser(res.data)
        this.setState({redirectTo : "/"})

      } catch (error){
        console.log(error)
        alert("Erro ao efetuar login.")
      }
      }
    

    render(){

      if (this.state.redirectTo){
        return(
          <redirect to={this.state.redirectTo}/>
        )
      }

      return(
        <div className="cl1">
        <div className="cl2">
            <div className="cl3">
                <form onSubmit={this.sendLogin}>
                  <div className='headerpl'>
                    <h1>LOGIN</h1>
                    <p>Acesse sua conta.</p>
                  </div>
                    <div className="formGroup">
                        <label htmlFor="nickName">Usuário </label>
                        <input 
                            type="text" 
                            className="form-control"
                            id="nickName" 
                            value={this.state.nickName}
                            onChange={e => this.setState({nickName : e.target.value})}
                            placeholder="Usuário" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Senha </label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            value={this.state.password}
                            onChange={e => this.setState({password : e.target.value})}
                            placeholder="Senha"/>
                    </div>
                    <button type="submit" className="submitButton">Entrar</button>

                    <div className='footerLink'>
                    <a href="https://www.mozilla.org/pt-BR/">Faça seu cadastro!</a>.


                    </div>
                </form>
            </div>
        </div>
    </div>
)
}
}

export default pagLogin;