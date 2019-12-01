export const ADD_PICTURES_ACTIONS = {
  UPLOAD_IMAGE: "ADD_PICTURES_ACTIONS_UPLOAD_IMAGE",
  CLEAR_IMAGE: "ADD_PICTURES_ACTIONS_CLEAR_IMAGE",
  SUBMIT_PUBLICATION: "ADD_PICTURES_ACTIONS_SUBMIT_PUBLICATION"
};

export const uploadPublicationImage = values => {
  return { type: ADD_PICTURES_ACTIONS.UPLOAD_IMAGE, payload: values };
};

export const clearPublicationImage = () => {
  return { type: ADD_PICTURES_ACTIONS.CLEAR_IMAGE };
};

export const submitPublication = values => {
  return {
    type: ADD_PICTURES_ACTIONS.SUBMIT_PUBLICATION,
    payload: values
  };
};
