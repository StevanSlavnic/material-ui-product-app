import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
} from './../actions/productAction'

export default function contact(
  state = {
    attempted: false,
    fetching: false,
    failed: false,
    data: null,
    errorData: null,
  },
  action
) {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        ...state,
        attempted: false,
        fetching: true,
        failed: false,
        errorData: null,
      }
    case PRODUCT_SUCCESS:
      return {
        attempted: true,
        fetching: false,
        failed: false,
        data: action.data,
        errorData: null,
      }
    case PRODUCT_FAILURE:
      return {
        attempted: true,
        fetching: false,
        failed: true,
        data: null,
        errorData: action.error,
      }
    default:
      return state
  }
}
