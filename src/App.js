import React from "react";
import TodoDate from "./components/TodoDate";
import ItemList from "./components/ItemList";
import Header from "./components/Header";
import { AppStateProvider } from "./AppContext";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <TodoDate />
      <ItemList />
    </AppStateProvider>
  );
}

export default App;
