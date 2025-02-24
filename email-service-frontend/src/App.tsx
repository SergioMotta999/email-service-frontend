import { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/Input/PrimaryInput";

function App() {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [secondName, setsecondName] = useState("");

  return (
    <div className="container">
      <PrimaryInput
        value={firstName}
        onChange={(event) => setfirstName(event.target.value)}
        name="email"
        label="Digite seu e-mail"
      />
      <PrimaryInput
        value={secondName}
        onChange={(event) => setsecondName(event.target.value)}
        name="email"
        label="Digite seu e-mail"
      />
      <PrimaryInput
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        name="email"
        label="Digite seu e-mail"
      />
    </div>
  );
}

export default App;
