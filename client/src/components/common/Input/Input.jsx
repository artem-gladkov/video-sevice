import './Input.scss'

const Input = (props) => {
  const {className, ...restProps} = props
  return (
    <input className={`input ${className}`} {...restProps} />
  )
}

export default Input