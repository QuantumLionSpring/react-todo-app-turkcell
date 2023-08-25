import Header from "./components/Header/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import React from "react";
import {TodoProvider} from "./context/TodoContext";

function App() {
  return (<TodoProvider>
      <section className="todoapp">
     <Header/>
    <Content/>
      </section>
      <Footer/>
      </TodoProvider>
  );
}

export default App;
