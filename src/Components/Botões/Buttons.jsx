import "./Buttons.css";

const Buttons = () => {
    return (  
        <div className='containerbotoes'>
            <button className='botaocancel' type="button" name="cancelar" >Cancelar</button>
            
            <button className='botaoenviar' type="button" name="enviar">Enviar</button>
        </div>
    );
}
 
export default Buttons;
