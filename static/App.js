import { useState, useEffect, useRef, useMemo, useCallback, useContext } from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './pages/home';
// import Button from './components/button/button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Detalhes from './pages/comprar-ingresso/comprar-ingresso';
import Comentario from './pages/comentario/comentario';
import ComprarIngresso from './pages/comprar-ingresso/comprar-ingresso';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/fotos' element={<Fotos />} />
          <Route path='/comentario' element={<Comentario />} />
          <Route path='/comprar-ingresso' element={<ComprarIngresso />} />
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  )





  //const lista = [
  //  {nome: 'André', aluno: true},
  //  {nome: 'Paulo', aluno: false},
  // {nome: 'Irineu', aluno: false},
  //  {nome: 'Miguel', aluno: true},
  //  {nome: 'Sam', aluno: true},
  //]


  //function evento() {
  //  alert('O evento foi disparado')
  //}

  //window.addEventListener('scroll', () => console.log('Evento Aconteceu'))


  //let carregando = true;

  // const [carregando, setCarregando] = useState(true)
  // const [contador, setContador] = useState(0)

  // const callBack = useCallback(() => {
    // console.log('qualquer coisa')
  // }, [])

  // const valorMemorizado = useMemo(() => {
    // return "Qualquer coisa"
  // }, [])

  // console.log(valorMemorizado)

  // const video = useRef();

  // useEffect(() => {
    // console.log('Contador')
  // }, [contador])

  // useEffect(() => {
    // console.log('Carregando')


    // return () => {
      
    // }

  // }, [carregando])

  //useEffect(() => {
  //  console.log('Atualizou o contador')
  //}, [contador])
  
  // return (
    // <div>
      {/* {carregando ? <span>Carregando...</span>  */}
      // : 
      // <div>
        {/* <button onClick={() => setContador(contador + 1)}>Adicionar</button> */}
        {/* <span>{contador}</span> */}
      {/* </div> */}
      // }
      {/* <button onClick={() => callBack()}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}</button> */}
      {/* <button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}</button> */}
      {/* <Button name='Alterar valor' active={true} onClick={setContador} /> */}
    {/* </div> */}


    //<div> -  HOOKS (useState) - Parte 2
      //{carregando ? <span>Carregando...</span> 
      //: 
      //<div>
      //  <button onClick={() => setContador(contador + 1)}>Adicionar</button>
      //  <span>{contador}</span>
      //</div>
      //}
      //<button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}</button>
      //<Button name='Alterar valor' active={true} onClick={setContador} />
    //</div>


    //<div> - HOOKS (useState) - Parte 1
    //  {carregando ? <span>Carregando...</span> : <Button name='Botao 01' active={true} />}
    //  <button onClick={() => setCarregando(false)}>Carregar Site</button>
    //</div>


    //<div style={{height:'200vh'}}> - EVENTO
    // <Header />
    //  <Button onClick={() => evento()} name='Botao 01' active={true} />
    //  <Button name='Botao 02' active={false}/>
    //  <span onClick={() => evento()}>Qualquer</span>
    //</div>
    

    //<div className="App">
      //<header className="App-header">
        //<div>
          //{lista.map((aluno) => (
            //<>
              //<div>{aluno.nome}</div>
              //<div>Aluno:
                //<span style={aluno.aluno ? {color: 'green'} : {color: 'red'}}>
                  //{aluno.aluno ? 'Sim' : 'Não'}
                //</span>
              //</div>
            //</>
          //))}
        //</div>
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  // );
}

export default App;
