export const LOGIN_ACTIONS = {
  LOGIN: "LOGIN_ACTIONS_LOGIN"
};

export const loginAction = values => {
  return { type: LOGIN_ACTIONS.LOGIN, values };
};
