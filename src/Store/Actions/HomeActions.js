export const HOME_ACTIONS = {
  GET_FEED_IMAGES: "HOME_ACTIONS_GET_FEED_IMAGES"
};

export const getFeedPublications = () => {
  return { type: HOME_ACTIONS.GET_FEED_IMAGES };
};
