export enum ActionTypes {
    onChangeTitle = "action/on-change-title",
    onNothing = "action/on-nothing",
}

export interface OnChangeTitleType extends IAction {
    payload: { title: string };
}
export const onChangeTitle = (title = ""): OnChangeTitleType => ({
    type: ActionTypes.onChangeTitle,
    payload: { title },
});

export const onNothing = (): IAction => ({
    type: ActionTypes.onNothing,
});

export interface IAction {
    type: string;
    payload?: unknown;
}
