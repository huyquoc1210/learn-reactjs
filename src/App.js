import "./App.css";

function App() {
  const name = "quoc huy";
  const age = "26";
  const isMale = true;
  const student = { name: "Easy Frontend" };
  const colorList = ["red", "blue", "green"];

  return (
    <div className="App">
      <header className="App-header">
        <p>Quốc Huy</p>

        <p>
          Xin chao {name} - {age} - {isMale ? "Male" : "Female"}
        </p>
        {isMale ? <p>Male</p> : <p>Female</p>}
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale && (
          <div>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </div>
        )}

        {isMale && (
          <>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </>
        )}

        {student.name}
        <p>{student["name"]}</p>
        <ul>
          {colorList.map((color) => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
