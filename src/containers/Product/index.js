import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Divider } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { InView } from 'react-intersection-observer'
import {
  ProductWrap,
  ProductImagesWrap,
  ProductDescWrap,
  DescriptionWrap,
  List,
} from './Styled'
import {
  CardUI,
  CardMediaUI,
  DividerUI,
  IconUI,
  LinkUI,
  TextUI,
  SpacerUI,
  ChipUI,
} from '../../components/UI'
import ProductAdd from './ProductAdd'
import { fetchProduct } from '../../actions/product'
import { displayAddProduct } from '../../actions/displayAddProduct'

class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isInView: false,
    }
  }
  componentDidMount() {
    this.props.fetchProduct()
  }

  renderItems = (data, type, currency = null, unit = null) => {
    let listItems = { ...data }

    let result = Object.entries(listItems).map(([key, value]) => {
      return `${key}: ${value}`
    })

    const items = result.map((item, index) => {
      if (type === 'features') {
        return <li key={index}>{item}</li>
      }

      if (type === 'priceBreaks') {
        return (
          <div key={index}>
            <DividerUI />
            <SpacerUI size={1} />
            <TextUI>{`ex ${item} ${currency}/${unit}`}</TextUI>
            <SpacerUI size={1} />
          </div>
        )
      }

      return null
    })

    return items
  }

  render() {
    const { product } = this.props

    const images =
      product &&
      product.article.images.map(image => {
        return { image, preview: false }
      })

    return (
      <Fragment>
        <ProductWrap>
          <Container maxWidth='md'>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={7} md={6} lg={6}>
                <ProductImagesWrap>
                  <div>
                    {images &&
                      images.map((product, index) => (
                        <CardUI
                          key={index}
                          variant='outlined'
                          width='85px'
                          height='85px'
                          margin='0 0 10px 0'
                          centered='true'
                          src={product.image}
                        >
                          <IconUI className='icon-placeholder' size='h1' />
                          {/* <CardMediaUI
                            image={product.image}
                            onClick={() => console.log(product.image)}
                          /> */}
                        </CardUI>
                      ))}
                  </div>
                  <CardUI
                    variant='outlined'
                    width='350px'
                    height='350px'
                    margin='0 0 0 10px'
                    centered='true'
                    src={product && product.article.images[0]}
                  >
                    <IconUI className='icon-placeholder' size='h1' />
                  </CardUI>
                </ProductImagesWrap>
              </Grid>
              <Grid item xs={12} sm={5} md={6} lg={6}>
                <ProductDescWrap>
                  <div>
                    <TextUI
                      variant='h1'
                      size='h6'
                      color='textPrimary'
                      bold='true'
                    >
                      {product && product.article.title}
                    </TextUI>
                    <SpacerUI size={1} />
                    <TextUI variant='h3' size='body2' color='textSecondary'>
                      {'by '}
                      <LinkUI
                        href={`${product && product.article.supplier_link}`}
                        underline='none'
                        color='primary'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {`${product && product.article.supplier_name}`}
                      </LinkUI>
                    </TextUI>
                    <SpacerUI size={1} />
                    <Rating
                      name='half-rating-read'
                      value={product && product.article.stars}
                      precision={0.5}
                      readOnly
                    />
                    <SpacerUI size={1} />
                    <TextUI
                      variant='h2'
                      color='textPrimary'
                      size='body1'
                      bold='true'
                    >
                      {`${product && product.article.price} ${
                        product && product.article.currency
                      }`}
                      <TextUI
                        variant='body1'
                        size='body2'
                        color='textSecondary'
                        display='inline'
                      >
                        {` +
                      ${product && product.article.transport_costs}
                      ${product && product.article.currency} shipping `}
                        <IconUI className='icon-discount' size='body1' />
                      </TextUI>
                    </TextUI>
                    <TextUI variant='body1' size='body2' color='textSecondary'>
                      all prices incl. 10% taxes
                    </TextUI>

                    <SpacerUI size={1} />
                  </div>
                  <InView
                    as='div'
                    onChange={(inView, entry) =>
                      this.props.displayAddProductComponent(inView)
                    }
                  >
                    <ProductAdd product={product && product} />
                  </InView>
                </ProductDescWrap>
              </Grid>
            </Grid>
          </Container>
        </ProductWrap>
        <DescriptionWrap>
          <Container maxWidth='md'>
            <TextUI variant='h2' color='secondary' size='body2' bold='true'>
              DESCRIPTION
            </TextUI>
            <SpacerUI size={1} />
            <TextUI variant='h3' size='body2' color='textSecondary' bold='true'>
              {product && product.article.description_long}
            </TextUI>
            <SpacerUI size={3} />
            <Grid
              spacing={3}
              container
              direction='row'
              justify='space-between'
              alignItems='stretch'
            >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardUI variant='outlined' padding='20px' height='100%'>
                  <TextUI
                    variant='h3'
                    size='body2'
                    color='secondary'
                    bold='true'
                  >
                    DETAILS
                  </TextUI>
                  <DividerUI size={2.5} />
                  <div>
                    <TextUI
                      variant='h3'
                      size='body2'
                      color='textSecondary'
                      bold='true'
                    >
                      Features
                    </TextUI>
                    <SpacerUI size={1} />
                    <List>
                      {this.renderItems(
                        product && product.article.features,
                        'features'
                      )}
                    </List>
                    <SpacerUI size={2} />
                    <TextUI
                      variant='h3'
                      size='body2'
                      color='textSecondary'
                      bold='true'
                    >
                      Attachments
                    </TextUI>
                    <SpacerUI size={1} />
                    {product &&
                      product.article.attachments.map((item, i) => (
                        <div key={i}>
                          <IconUI className='icon-attachment' size='body4' />
                          <LinkUI
                            href={`${item.file_link}`}
                            underline='none'
                            target='_blank'
                            rel='noreferrer'
                            color='primary'
                          >
                            {`${item.file_label}`}
                          </LinkUI>
                        </div>
                      ))}

                    <SpacerUI size={2} />
                    <TextUI
                      variant='h3'
                      size='body2'
                      color='textSecondary'
                      bold='true'
                    >
                      Keywords
                    </TextUI>
                    <SpacerUI size={1} />
                    {product &&
                      product.article.keywords.map((item, i) => (
                        <ChipUI
                          key={i}
                          label={item}
                          spacing={1}
                          wrapped='true'
                        />
                      ))}
                  </div>
                </CardUI>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CardUI variant='outlined' padding='20px' height='100%'>
                  <TextUI
                    variant='h3'
                    size='body2'
                    color='secondary'
                    bold='true'
                  >
                    PRICING & SHIPPING
                  </TextUI>
                  <DividerUI size={2.5} />
                  <div>
                    <List>
                      <li>
                        Minimum order:
                        {product && product.article.minimum_order_quantity}
                      </li>
                      <li>
                        Shipping:
                        {product && product.article.transport_costs}
                      </li>
                      <li>
                        Delivery:
                        {product && product.article.delivery_time}
                      </li>
                      <SpacerUI size={2} />
                    </List>

                    <div>
                      <TextUI
                        variant='h3'
                        size='body2'
                        color='textSecondary'
                        bold='true'
                      >
                        Price breaks
                      </TextUI>
                      <SpacerUI size={1} />
                      <div>
                        {this.renderItems(
                          product && product.article.price_breaks,
                          'priceBreaks',
                          product && product.article.currency,
                          product && product.article.unit
                        )}
                        <Divider />
                      </div>
                    </div>
                  </div>
                </CardUI>
              </Grid>
            </Grid>
          </Container>
        </DescriptionWrap>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product.data,
  cartStyle: state.cartStyle.data,
  displayAddProduct: state.displayAddProduct,
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: () => dispatch(fetchProduct()),
  displayAddProductComponent: state => dispatch(displayAddProduct(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
