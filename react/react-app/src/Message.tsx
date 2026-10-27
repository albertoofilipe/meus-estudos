function Message() {
  const nome = "Alberto"
  if (nome)
    return <h1>Hello, {nome}</h1>
  return <h1>Hello, World</h1>
}

export default Message
