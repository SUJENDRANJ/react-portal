import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app">
      <h1>React Portals</h1>
      <button className="open-btn" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Hello from Modal!</h2>
        <p>This is a modal rendered outside the React root.</p>
      </Modal>
    </div>
  );
};

export default App;
