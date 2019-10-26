import React, { useCallback } from "react";
import Square from "./components/Square";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./modules";
import { modalShow } from "./modules/colorFix";
import ColorPickList from "./components/ColorPickList";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.colorFix.show);

  const changeModal = () => {
    dispatch(modalShow());
  };

  return (
    <main>
      <h1>React Modal</h1>
      <Square />
      <Modal show={show} handleClose={changeModal}>
        <ColorPickList />
      </Modal>
      <button type="button" onClick={changeModal}>
        open
      </button>
    </main>
  );
};

export default App;
