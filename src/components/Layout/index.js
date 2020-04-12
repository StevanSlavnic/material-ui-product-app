import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainScroll: false,
    }
  }

  render() {
    const { product } = this.props

    return (
      <div>
        <Header
          productName={product && product.article.title}
          cartQuantity={product && product.cart.items}
          scrolled={this.state.mainScroll}
        />
        <main>{this.props.children}</main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product.data,
})

export default connect(mapStateToProps)(Layout)
