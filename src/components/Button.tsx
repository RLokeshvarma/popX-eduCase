interface ButtonProps {
  text: string
  variant?: "primary" | "secondary"
  onClick?: () => void
}

const Button = ({ text, variant = "primary", onClick }: ButtonProps) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button