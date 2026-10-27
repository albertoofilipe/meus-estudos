import { useState } from "react"

import Alert from "./components/Alert"
import Button from "./components/Button"

function App() {
  const [alertAtive, setAlertAtive] = useState(false)

  return (
    <div>
      {alertAtive && <Alert onClose={() => setAlertAtive(false)}>Meu alerta</Alert>}
      <Button cor="primary" title="Meu Botão" onClick={() => setAlertAtive(true)} />
    </div>
  )
}

export default App
