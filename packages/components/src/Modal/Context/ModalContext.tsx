import React from 'react';

import { ModalContextData } from './types';

const defaultContext: ModalContextData = {
  onCloseModal: () => {}
};

const ModalContext = React.createContext<ModalContextData>(defaultContext);

export default ModalContext;
