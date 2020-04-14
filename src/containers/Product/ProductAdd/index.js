import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ProductAddWrap } from '../Styled'
import { Hidden } from '@material-ui/core'
import { ButtonUI, IconUI, InputUI, SpacerUI } from '../../../components/UI'
import { addingQuantity } from '../../../actions/product'
import { changeCartStyle } from '../../../actions/cartStyle'

class ProductAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
    }
  }

  handleAddQuantity = (product, quantity) => {
    this.props.addQuantity(product, quantity)
    this.props.changeCartStyle(true)
    this.setState({
      quantity: 1,
    })
  }

  handleQuantityValue = e => {
    const quantity = e.target.value
    this.setState({
      quantity,
    })
  }

  render() {
    const { product } = this.props

    const { quantity } = this.state

    return (
      <ProductAddWrap>
        <InputUI
          placeholder='Qty'
          value={quantity}
          inputProps={{ 'aria-label': 'quantity' }}
          onChange={this.handleQuantityValue}
        />
        <SpacerUI size={2} horizontal>
          <>{product && product.article.unit}</>
        </SpacerUI>
        <SpacerUI size={3} horizontal>
          <ButtonUI
            variant='contained'
            color='secondary'
            fontSize='body2'
            bold='true'
            size='small'
            disableElevation
            onClick={() => this.handleAddQuantity(product && product, quantity)}
            onAnimationEnd={() => this.props.changeCartStyle(false)}
          >
            <IconUI className='icon-cart-in' size='h6' color='#fff' />
            <Hidden smDown>
              <SpacerUI size={1} horizontal>
                Add to cart
              </SpacerUI>
            </Hidden>
          </ButtonUI>
        </SpacerUI>
      </ProductAddWrap>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product.data,
})

const mapDispatchToProps = dispatch => ({
  addQuantity: (state, quantity) => dispatch(addingQuantity(state, quantity)),
  changeCartStyle: state => dispatch(changeCartStyle(state)),
})

ProductAdd.propTypes = {
  addQuantity: PropTypes.func.isRequired,
  changeCartStyle: PropTypes.func.isRequired,
  product: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd)
