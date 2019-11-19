export const REGISTER_ACTIONS = {
  REGISTER: "REGISTER_ACTIONS_REGISTER"
};

export const registerAction = values => {
  return { type: REGISTER_ACTIONS.REGISTER, datos: values };
};
