import './_App.scss'

import gitHub from '../assets/logoGitHub/githubWithe.png'
import { api } from '../api/api'

import Input from '../components/Input/Input'
import ItemRepo from '../components/ItemRepo/ItemRepo'
import Button from '../components/Button/Button'
import { useState } from 'react'


function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)
    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id)
      if (!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert("Repositório não encontrado ou repetido")
  }

  const handleRemoveRepo = (id) => {
    console.log('removendo', id);

  }


  return (
    <div className='App'>
      <img src={gitHub} alt="logo GitHub" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} key={repo.id} />)}
    </div>
  )
}

export default App
