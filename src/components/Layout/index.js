import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './Header'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainScroll: 0,
    }

    this.scrollRef = React.createRef()
  }

  listenScrollEvent() {
    if (this.scrollRef.current.scrollTop !== 0) {
      this.setState({
        mainScroll: 1,
      })
    } else {
      this.setState({
        mainScroll: 0,
      })
    }
  }

  render() {
    const { product, cartStyle, displayAddProduct } = this.props
    const { mainScroll } = this.state

    return (
      <div>
        <Header
          productName={product && product.article.title}
          cartQuantity={product && product.cart.items}
          cartStyle={cartStyle && cartStyle}
          displayAddProductComponent={displayAddProduct && displayAddProduct}
          scroll={mainScroll}
        />
        <main onScroll={() => this.listenScrollEvent()} ref={this.scrollRef}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product.data,
  cartStyle: state.cartStyle.data,
  displayAddProduct: state.displayAddProduct.data,
})

Layout.propTypes = {
  children: PropTypes.element,
  product: PropTypes.object,
  cartStyle: PropTypes.bool,
  displayAddProduct: PropTypes.bool,
}

export default connect(mapStateToProps)(Layout)
