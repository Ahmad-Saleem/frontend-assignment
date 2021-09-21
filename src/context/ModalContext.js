import React, { useState } from "react";

export const ModalContext = React.createContext({
  showModal: false,
  setShowModal: () => {},
});

export const ModalProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};
