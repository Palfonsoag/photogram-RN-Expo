export const ADD_PICTURES_ACTIONS = {
  UPLOAD_IMAGE: "ADD_PICTURES_ACTIONS_UPLOAD_IMAGE",
  CLEAR_IMAGE: "ADD_PICTURES_ACTIONS_CLEAR_IMAGE"
};

export const uploadPublicationImage = values => {
  return { type: ADD_PICTURES_ACTIONS.UPLOAD_IMAGE, payload: values };
};

export const clearPublicationImage = () => {
  return { type: ADD_PICTURES_ACTIONS.CLEAR_IMAGE };
};
