import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import KanbanBoard from "./KanbanBoard";

export default function App() {
  return (
    <div className="App">
      <Header />
      <KanbanBoard />
      <Footer />
    </div>
  );
}
