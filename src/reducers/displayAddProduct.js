import { DISPLAY_ADD_PRODUCT } from './../actions/displayAddProduct'

export default function displayAddProduct(
  state = {
    attempted: false,
    fetching: false,
    failed: false,
    data: true,
    errorData: null,
  },
  action
) {
  switch (action.type) {
    case DISPLAY_ADD_PRODUCT:
      return {
        ...state,
        data: action.data,
      }
    default:
      return state
  }
}
