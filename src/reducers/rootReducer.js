import { combineReducers } from 'redux'
import product from './product'
import cartStyle from './cartStyle'
import displayAddProduct from './displayAddProduct'

const rootReducer = combineReducers({
  product,
  cartStyle,
  displayAddProduct,
})

export default rootReducer
