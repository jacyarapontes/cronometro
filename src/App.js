import React, {Component} from 'react';

class App extends Component{
    render(){
    return(
        <div className='container'>
        <img alt='cronometro' src={require('./assets/cronometro.png')}className='img'/><br/>

        <a className='timer'>0.0</a><br/>
        
        <div className='areaBtn'>
            <a className='botao'>VAI</a><br/>
            <a className='botao'>LIMPAR</a><br/>
        </div>
        </div>

    );

    }
}

export default App;
