import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import ContactHader from "./components/contact/ContactHader";
import ContactFrom from "./components/ContactFrom/ContactFrom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation />
      <ContactHader />
      <ContactFrom />
    </div>
  );
}

export default App;
