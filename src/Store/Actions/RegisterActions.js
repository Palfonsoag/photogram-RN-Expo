export const REGISTER_ACTIONS = {
  REGISTER: "REGISTER_ACTIONS_REGISTER",
  UPLOAD_IMAGE: "REGISTER_ACTIONS_UPLOAD_IMAGE",
  CLEAR_IMAGE: "REGISTER_ACTIONS_CLEAR_IMAGE"
};

export const registerAction = values => {
  return { type: REGISTER_ACTIONS.REGISTER, datos: values };
};

export const uploadSignUpImage = values => {
  return { type: REGISTER_ACTIONS.UPLOAD_IMAGE, payload: values };
};

export const clearSignUpImage = () => {
  return { type: REGISTER_ACTIONS.CLEAR_IMAGE };
};
