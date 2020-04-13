import apiRequest from './../helpers/apiRequest'

export const PRODUCT_REQUEST = 'PRODUCT_REQUEST'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE'
export const ADDING_QUANTITY = 'ADDING_QUANTITY'

function productRequest() {
  return {
    type: PRODUCT_REQUEST,
  }
}

function productSuccess(data) {
  return {
    type: PRODUCT_SUCCESS,
    data,
  }
}

function productFailure(error) {
  return {
    type: PRODUCT_FAILURE,
    error,
  }
}

export function addingQuantity(product, quantity) {
  return {
    type: 'ADDING_QUANTITY',
    product,
    quantity,
  }
}

export function fetchProduct() {
  return async dispatch => {
    dispatch(productRequest())
    try {
      const { data } = await apiRequest({
        method: 'get',
        url: `data/data.json`,
      })

      dispatch(productSuccess(data))
    } catch (error) {
      dispatch(productFailure(error))
    }
  }
}
