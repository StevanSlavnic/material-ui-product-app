import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, useScrollTrigger, Container } from '@material-ui/core'
import {
  AppBarUI,
  BadgeUI,
  DividerUI,
  IconUI,
  IconButtonUI,
  TextUI,
  ToolbarUI,
} from '../../UI'
import theme from '../../../theme'

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
  console.log(props)
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBarUI color='default' elevation={props.elevation}>
          <Container maxWidth='md'>
            <ToolbarUI>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <TextUI variant='h6' color='secondary'>
                    {props.productName}
                  </TextUI>
                </div>
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
                    <IconUI
                      className='icon-compare'
                      color={theme.palette.grey[500]}
                    />
                  </IconButtonUI>

                  <DividerUI height={63} orientation='vertical' flexItem />
                  <IconButtonUI
                    edge='start'
                    color='inherit'
                    aria-label='open drawer'
                  >
                    <BadgeUI
                      badgeContent={props.cartQuantity}
                      color='secondary'
                    ></BadgeUI>
                    <IconUI
                      className='icon-cart'
                      color={theme.palette.grey[500]}
                    />
                  </IconButtonUI>
                </div>
              </div>
            </ToolbarUI>
          </Container>
        </AppBarUI>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  )
}
