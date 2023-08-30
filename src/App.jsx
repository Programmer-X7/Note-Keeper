import Header from "./components/Header/Header";
import Note from "./components/Note/Note";
import Footer from "./components/Footer/Footer";
import notes from "./notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
