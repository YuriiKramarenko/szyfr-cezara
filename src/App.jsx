
import { useState } from "react";

function App() {

  const [tekst, setTekst] = useState("");
  const [klucz, setKlucz] = useState(3);
  const [wynik, setWynik] = useState("");

  function szyfruj() {

    let nowyTekst = "";

    for (let i = 0; i < tekst.length; i++) {

      let znak = tekst[i];

      if (znak >= "A" && znak <= "Z") {
        let kod = znak.charCodeAt(0);
        kod = ((kod - 65 + Number(klucz)) % 26) + 65;
        znak = String.fromCharCode(kod);
      }

      else if (znak >= "a" && znak <= "z") {
        let kod = znak.charCodeAt(0);
        kod = ((kod - 97 + Number(klucz)) % 26) + 97;
        znak = String.fromCharCode(kod);
      }

      nowyTekst += znak;
    }

    setWynik(nowyTekst);
  }

  return (
    <div>
      <h1>Szyfr Cezara</h1>

      <p>Wpisz tekst:</p>

      <input
        value={tekst}
        onChange={(e) => setTekst(e.target.value)}
      />

      <p>Podaj klucz:</p>

      <input
        type="number"
        value={klucz}
        onChange={(e) => setKlucz(e.target.value)}
      />

      <br /><br />

      <button onClick={szyfruj}>
        Zaszyfruj
      </button>

      <h2>Wynik: {wynik}</h2>

    </div>
  );
}

export default App;
