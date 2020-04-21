import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, useScrollTrigger, Container, Hidden } from '@material-ui/core'
import {
  AppBarUI,
  BadgeUI,
  DividerUI,
  IconUI,
  IconButtonUI,
  TextUI,
  ToolbarUI,
  SwingUI,
} from 'src/components/UI'
import { HeaderWrap, HeaderMenu } from './Styled'
import theme from 'src/theme'
import ProductAdd from 'src/containers/Product/ProductAdd'

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevateAppBar.propTypes = {
  children: PropTypes.element,
  elevation: PropTypes.bool,
  productName: PropTypes.string,
  cartQuantity: PropTypes.number,
  cartStyle: PropTypes.bool,
  displayAddProductComponent: PropTypes.bool,
  scroll: PropTypes.number,
}

export default function ElevateAppBar(props) {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBarUI color='inherit' scroll={props.scroll}>
          <Container maxWidth='md'>
            <ToolbarUI>
              <HeaderWrap
                container
                direction='row'
                justify='space-between'
                alignItems='center'
              >
                <div>
                  <Hidden xsDown>
                    <TextUI variant='h6' bold='true' color='secondary'>
                      {props.productName}
                    </TextUI>
                  </Hidden>
                </div>

                <>{!props.displayAddProductComponent && <ProductAdd />}</>
                <HeaderMenu>
                  <IconButtonUI
                    edge='start'
                    color='inherit'
                    aria-label='open drawer'
                  >
                    <IconUI
                      className='icon-heart-empty'
                      color={theme.palette.grey[500]}
                    />
                  </IconButtonUI>

                  <IconButtonUI
                    edge='start'
                    color='inherit'
                    aria-label='open drawer'
                  >
                    <IconUI className='icon-compare' />
                  </IconButtonUI>

                  <DividerUI height={63} orientation='vertical' flexItem />
                  <SwingUI animate={props.cartStyle}>
                    <IconButtonUI
                      edge='start'
                      color='inherit'
                      aria-label='open drawer'
                    >
                      <BadgeUI
                        badgeContent={props.cartQuantity}
                        color='secondary'
                      />
                      <IconUI
                        disableRipple={props.cartQuantity}
                        className='icon-cart'
                      />
                    </IconButtonUI>
                  </SwingUI>
                </HeaderMenu>
              </HeaderWrap>
            </ToolbarUI>
          </Container>
        </AppBarUI>
      </ElevationScroll>
      <Toolbar />
    </>
  )
}
