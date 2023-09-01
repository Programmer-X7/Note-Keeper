import React from "react";
import Header from "./components/Header/Header";
import Note from "./components/Note/Note";
import Footer from "./components/Footer/Footer";
import CreateArea from "./components/Input/CreateArea";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
