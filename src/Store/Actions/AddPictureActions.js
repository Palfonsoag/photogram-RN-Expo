export const ADD_PICTURES_ACTIONS = {
  UPLOAD_IMAGE: "ADD_PICTURES_ACTIONS_UPLOAD_IMAGE",
  CLEAR_IMAGE: "ADD_PICTURES_ACTIONS_CLEAR_IMAGE",
  CLEAR_PUBLICATION_STATE: "ADD_PICTURES_ACTIONS_CLEAR_PUBLICATION_STATE",
  SUBMIT_PUBLICATION: "ADD_PICTURES_ACTIONS_SUBMIT_PUBLICATION",
  SET_PUBLICATION_SUCCEED: "ADD_PICTURES_ACTIONS_SET_PUBLICATION_SUCCEED",
  SET_PUBLICATION_FAIL: "ADD_PICTURES_ACTIONS_SET_PUBLICATION_FAIL"
};

export const uploadPublicationImage = values => {
  return { type: ADD_PICTURES_ACTIONS.UPLOAD_IMAGE, payload: values };
};

export const clearPublicationImage = () => {
  return { type: ADD_PICTURES_ACTIONS.CLEAR_IMAGE };
};

export const clearPublicationState = () => {
  return { type: ADD_PICTURES_ACTIONS.CLEAR_PUBLICATION_STATE };
};

export const submitPublication = values => {
  return {
    type: ADD_PICTURES_ACTIONS.SUBMIT_PUBLICATION,
    payload: values
  };
};

export const setPublicationSucceed = () => {
  return { type: ADD_PICTURES_ACTIONS.SET_PUBLICATION_SUCCEED };
};

export const setPublicationFail = () => {
  return { type: ADD_PICTURES_ACTIONS.SET_PUBLICATION_FAIL };
};
