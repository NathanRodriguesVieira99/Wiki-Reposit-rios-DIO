import './_Button.scss'

function Button({ onClick }) {
  return (
    <button className='buttonContainer' 
    onClick={onClick}>
      Buscar
    </button>
  )
}

export default Button