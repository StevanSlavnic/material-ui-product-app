import { CHANGE_CART_STYLE } from 'src/actions/cartStyle'

export default function cartStyle(
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
    case CHANGE_CART_STYLE:
      return {
        ...state,
        data: action.data,
      }
    default:
      return state
  }
}
