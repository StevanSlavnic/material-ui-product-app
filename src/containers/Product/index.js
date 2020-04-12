import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withTheme } from 'styled-components'
import { Container, Grid, Divider } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import {
  ProductWrap,
  ProductImagesWrap,
  ProductDescWrap,
  ProductAddWrap,
  DescriptionWrap,
  List,
} from './Styled'
import {
  ButtonUI,
  CardUI,
  CardMediaUI,
  DividerUI,
  IconUI,
  InputUI,
  LinkUI,
  TextUI,
  SpacerUI,
  ChipUI,
} from '../../components/UI'
import { fetchProduct } from '../../actions/productAction'

class Product extends Component {
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
          <TextUI key={index}>
            <DividerUI />
            <SpacerUI size={1} />
            <TextUI>{`ex ${item} ${currency}/${unit}`}</TextUI>
            <SpacerUI size={1} />
          </TextUI>
        )
      }

      return null
    })

    return items
  }

  render() {
    const { product } = this.props

    console.log(this.props)

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
              <Grid item sm={7} md={6} lg={6}>
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
                          src={product.image}
                        >
                          <CardMediaUI
                            image={product.image}
                            onClick={() => console.log(product.image)}
                          />
                        </CardUI>
                      ))}
                  </div>
                  <CardUI
                    variant='outlined'
                    width='350px'
                    height='350px'
                    margin='0 0 0 10px'
                    src={
                      this.props.product && this.props.product.article.images[0]
                    }
                  >
                    <CardMediaUI
                      image={`${product && product.article.images[0]}`}
                    />
                  </CardUI>
                </ProductImagesWrap>
              </Grid>
              <Grid item sm={5} md={6} lg={6}>
                <ProductDescWrap flex>
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
                  <ProductAddWrap>
                    <InputUI
                      placeholder='Qty'
                      inputProps={{ 'aria-label': 'quantity' }}
                    />
                    <SpacerUI size={2} horizontal>
                      <Fragment>{product && product.article.unit}</Fragment>
                    </SpacerUI>
                    <SpacerUI size={3} horizontal>
                      <ButtonUI
                        variant='contained'
                        color='secondary'
                        fontSize='14'
                        bold='true'
                        disableElevation
                        onClick={() => console.log('add to cart')}
                        startIcon={
                          <IconUI
                            className='icon-cart-in'
                            size='h6'
                            color='#fff'
                          />
                        }
                      >
                        Add to cart
                      </ButtonUI>
                    </SpacerUI>
                  </ProductAddWrap>
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
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: () => dispatch(fetchProduct()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Product))
