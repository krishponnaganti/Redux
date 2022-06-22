const initialstate = {
  loading: false,
  allListings: [],
  error: null,
  demo: false
};
const getDemoListings = (state = initialstate, action: any) => {
  switch (action.type) {
    case "GET_LISTINGS_REQUESTED":
      return {
        ...initialstate,
        loading: true
      };
    case "GET_LISTINGS_SUCCESS":
      return {
        ...initialstate,
        loading: false,
        allListings: action.listings,
        demo: true
      };
    case "GET_LISTINGS_FAILED":
      return {
        ...initialstate,
        loading: false,
        error: action.errorMessage
      };
    default:
      return state;
  }
};
export default getDemoListings;
