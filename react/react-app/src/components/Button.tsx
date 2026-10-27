interface ButtonProps {
  title: string
  cor?: 'primary' | 'secondary' | 'danger'
  onClick: () => void
}

const Button = ({ title, cor = 'primary', onClick }: ButtonProps) => {
  return (
<button type="button" className={`btn-solid theme-${cor}`} onClick={onClick}>
        {title}
    </button>
  )
}

export default Button
