import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  ADDING_QUANTITY,
} from 'src/actions/product'

export default function product(
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
        ...state,
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
    case ADDING_QUANTITY: {
      return {
        ...state,
        data: {
          ...state.data,
          cart: { items: state.data.cart.items + action.quantity * 1 },
        },
      }
    }
    default:
      return state
  }
}
