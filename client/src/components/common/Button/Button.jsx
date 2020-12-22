import './Button.scss'

const Button = (props) => {
  const {className, ...restProps} = props
  return (
    <button className={`button ${className}`} {...restProps} />
  )
}

export default Button