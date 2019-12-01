export const HOME_ACTIONS = {
  GET_FEED_IMAGES: "HOME_ACTIONS_GET_FEED_IMAGES",
  SET_HOME_FEED: "HOME_ACTIONS_SET_HOME_FEED"
};

export const getFeedPublications = () => {
  return { type: HOME_ACTIONS.GET_FEED_IMAGES };
};

export const setFeedPublications = values => {
  return { type: HOME_ACTIONS.SET_HOME_FEED, payload: values };
};
