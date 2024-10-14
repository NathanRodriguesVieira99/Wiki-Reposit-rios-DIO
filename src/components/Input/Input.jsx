import './_Input.scss'


function Input({ value, onChange }) {
  return (
    <div className='inputContainer'>
      <input value={value} onChange={onChange} />
    </div>
  )
}

export default Input