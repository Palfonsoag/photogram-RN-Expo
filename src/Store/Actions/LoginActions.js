export const LOGIN_ACTIONS = {
  LOGIN: "LOGIN_ACTIONS_LOGIN",
  CHECK_SESSION: "LOGIN_ACTIONS_CHECK_SESSION",
  LOGOUT: "LOGIN_ACTIONS_LOGOUT"
};

export const loginAction = values => {
  return { type: LOGIN_ACTIONS.LOGIN, values };
};

export const sessionCheckAction = values => {
  return { type: LOGIN_ACTIONS.CHECK_SESSION, payload: values };
};

export const logoutAction = () => {
  return { type: LOGIN_ACTIONS.LOGOUT };
};
