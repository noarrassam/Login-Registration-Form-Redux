import ActionTypes, { IActionType } from "../actions/action";

export interface IAppState {
  users: any[];
  loggedInUser: number;
}

const initialState: IAppState = {
  users: [],
  loggedInUser: -1,
};

const RegisterReducer = (
  state: IAppState = initialState,
  action: IActionType
) => {
  switch (action.type) {
    case ActionTypes.ADD_CONTACT:
      state = { ...state, users: [...state.users, action.payload] };
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default RegisterReducer;
