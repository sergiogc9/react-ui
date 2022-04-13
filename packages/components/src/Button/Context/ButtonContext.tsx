import React from 'react';

import { ButtonContextData } from './types';

const ButtonContext = React.createContext<ButtonContextData>({} as any);

const useButtonContext = () => React.useContext(ButtonContext);

export { ButtonContext, useButtonContext };
