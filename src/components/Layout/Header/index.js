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
} from '../../UI'
import theme from '../../../theme'
import ProductAdd from '../../../containers/Product/ProductAdd'

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

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

export default function ElevateAppBar(props) {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBarUI color='inherit' elevation={props.elevation}>
          <Container maxWidth='md'>
            <ToolbarUI>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Hidden smDown>
                    <TextUI variant='h6' color='secondary'>
                      {props.productName}
                    </TextUI>
                  </Hidden>
                </div>

                <>{!props.displayAddProductComponent && <ProductAdd />}</>
                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                </div>
              </div>
            </ToolbarUI>
          </Container>
        </AppBarUI>
      </ElevationScroll>
      <Toolbar />
    </>
  )
}
