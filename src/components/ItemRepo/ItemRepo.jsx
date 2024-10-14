import './_ItemRepo.scss'

function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <div className='itemContainer' onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' >Ver Repositório</a>
      <br />
      <a href="#" className='remover'>Remover</a>
      <hr />
    </div>
  )
}

export default ItemRepo