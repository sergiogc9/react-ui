import React from 'react';

import { UserMenuContextData } from './types';

const UserMenuContext = React.createContext<UserMenuContextData>({} as any);

export default UserMenuContext;
