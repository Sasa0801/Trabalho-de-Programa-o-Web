import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


/// Inicio Trabalho

function App() {
  const [paragrafos, setParagrafos] = useState(1)
  const [texto, setTexto] = useState([])
  const [loading, setLoading] = useState(false)

  const buscarTexto = async () => {
    if (!paragrafos || paragrafos <= 0) {
      alert('Digite uma quantidade válida de parágrafos.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch(
        `https://baconipsum.com/api/?type=all-meat&paras=${paragrafos}`
      )
      if (!response.ok) throw new Error('Erro na requisição')
      const data = await response.json()
      setTexto(data)
    } catch (error) {
      console.error(error)
      alert('Erro ao consultar')
    } finally {
      setLoading(false)
    }
  }

  return (
   
      <div>
        <div >
          <h3>Gerador de Texto Bacon Ipsum</h3>
        </div>

       
          <div >
            <label>Quantidade de Parágrafos:</label>

            <input
              type="text"
              value={paragrafos}
              onChange={(e) => setParagrafos(Number(e.target.value))}
              
            />
          </div>
          
          <button
          type="button"
          className="counter"
          onClick={buscarTexto}
          
          >
            {loading ? 'Carregando...' : 'Gerar Texto'}
          </button>

          <div>
            {texto.map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </div>
        
      </div>
   
  )
}

///Fim Trabalho 


/*function App() {
  const [count, setCount] = useState(0)
  const [removeCount, setUnCount] = useState(40)
  const [inputValue, setInputValue] = useState("")
  const [formulario, setFormulario] = useState({
    nome: '',
    idade: 0,
    turma: ''
  })
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState({
    logradouro: '',
    bairro: '',
    localidade: '',
    estado: ''
  })

  const handleBlur = async () => {
    const cepValido = cep.replace(/\D/g, '')

    console.log('Cep valido ', cepValido)

    try {
      const response = await fetch(/api-cep/${cepValido}/json/)
        .then(res => res.json())

      if(!response.error){
        setEndereco({
          logradouro: response.logradouro,
          bairro: response.bairro,
          localidade: response.localidade,
          estado: response.estado
        })
      }
    } catch (error) {
        console.log('Erro buscando CEP: ', error)
    }
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <label>CEP</label>
          <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder='00000-000'
          onBlur={handleBlur}
          ></input>
          <button
          type="button"
          className="confirmarCep"
          onClick={() => {
            setCep(cep),
            handleBlur
          }}
          >
          Confirmar
        </button>
        </div>
        <div>
          <p>Rua: {endereco.logradouro}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Estado: {endereco.estado}</p>
          <p>Localidade: {endereco.localidade}</p>
        </div>
        <div>
          <h1>Nome: </h1> <input
          type="text"
          value={formulario.nome}
          onChange={(e) => setFormulario({nome: e.target.value})}
          placeholder='Digite seu nome aqui...'
        >
        </input>
          <h1>Idade: </h1> <input
          type="text"
          value={formulario.idade}
          onChange={(e) => setFormulario({idade: e.target.value})}
          placeholder='Digite sua idade aqui...'
        >
        </input>
          <h1>Turma: </h1> <input
          type="text"
          value={formulario.turma}
          onChange={(e) => setFormulario({turma: e.target.value})}
          placeholder='Digite sua turma aqui...'
        >
        </input>
        </div>
        <div>

          <button
          type="button"
          className="form"
          onClick={() => {
            setFormulario(formulario)
          }}
        >
          Confirmar
        </button>
          <p>Seu nome é: {formulario.nome}</p>
          <p>Sua idade é: {formulario.idade}</p>
          <p>Sua turma é: {formulario.turma}</p>

          
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => {
            setCount(0),
            setUnCount(40)
          }}
        >
          Resetar contadores v2
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Digite aqui sei lá o que...'
        >
        </input>
        <p>Aqui você está digitando: {inputValue}</p>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}*/

export default App