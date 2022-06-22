const initialState = {
  loading: false,
  AllListings: [],
  error: null
};

const getListings = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_LISTINGS_REQUESTED":
      return {
        ...initialState,
        loading: true
      };
    case "GET_LISTINGS_SUCCESS":
      return {
        ...initialState,
        AllListings: action.listings
      };
    case "GET_LISTINGS_FAILED":
      return {
        ...initialState,
        error: action.errorMessage
      };
    default:
      return state;
  }
};
export default getListings;
