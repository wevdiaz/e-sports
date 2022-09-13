
interface ButtonProps {
  title: String;
}


function Button(props : ButtonProps) {
  return (
    <button>{props.title}</button>
  );
}

function App() {

  return (
    <div>
      <p>Nlw : E-Sports - 2022</p>
      <div>
        <Button title="Enviar 01" />
        <Button  title="Enviar 02"/>
        <Button title="Enviar 03" />
      </div>      
    </div>

  )
}

export default App
