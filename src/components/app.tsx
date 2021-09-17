import React, { FC } from "react";
import AppContext from "./app-context";
import Content from "./content";

const App: FC = () => {
    return (
        <AppContext>
            <Content />
        </AppContext>
    );
};

export default App;
