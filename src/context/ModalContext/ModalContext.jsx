import { createContext, useState } from 'react';
import { ModalFooter } from '../../components/ModalFooter/ModalFooter';

export const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [modalShowing, setModalShowing] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [overflow, setOverflow] = useState(null);

  const openModal = (modalConfig, inOverflow) => {
    setModalContent(modalConfig.props);
    setOverflow(inOverflow);
    setModalShowing(true);
  };

  const closeModal = () => {
    setModalShowing(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {modalShowing && <ModalFooter {...modalContent} inOverflow={overflow} />}
      {children}
    </ModalContext.Provider>
  );
};
