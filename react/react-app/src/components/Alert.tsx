import { ReactNode } from "react"

interface AlertProps {
  children: ReactNode
  onClose: () => void
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert theme-warning" role="alert">
  <p>{children}</p>
  <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
</div>
  )
}

export default Alert
