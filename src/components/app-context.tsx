import React, { createContext, useReducer, FC, Dispatch } from "react";
import defaultAppState, { IState } from "./state/default-app-state";
import { IAction } from "./state/action";
import reducer from "./state/app-reducer";

export const AppContext = createContext<[IState, Dispatch<IAction>]>([
    defaultAppState,
    () => null,
]);

const AppContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultAppState);

    return (
        <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>
    );
};

export default AppContextProvider;
