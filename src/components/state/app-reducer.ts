import { IState } from "./default-app-state";
import * as Actions from "./action";

function reduceOnChangeTitle(state: IState, action: Actions.OnChangeTitleType) {
    const { payload } = action;

    return { ...state, title: payload?.title };
}

function reducer(state: IState, action: Actions.IAction): IState {
    const { type } = action;

    switch (type) {
        case Actions.ActionTypes.onChangeTitle:
            return reduceOnChangeTitle(state, <Actions.OnChangeTitleType>action);
        default:
            return state;
    }
}

export default reducer;
