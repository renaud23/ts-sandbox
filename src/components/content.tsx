import React, { FC, useContext, ChangeEvent, useState, useCallback } from "react";
import { AppContext } from "./app-context";
import { onChangeTitle } from "./state/action";

const Content: FC = () => {
    const [state, dispatch] = useContext(AppContext);
    const { title } = state;
    const [value, setValue] = useState(title);
    const onClick = useCallback(() => {
        dispatch(onChangeTitle(value));
    }, [value]);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    return (
        <div>
            <h1>{title}</h1>
            <input type="text" value={value} onChange={onChange} />
            <input type="button" value="change title" onClick={onClick} />
        </div>
    );
};

export default Content;
