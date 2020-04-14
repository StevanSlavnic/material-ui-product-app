import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Product } from './containers'
import Layout from './components/Layout'
import './assets/icons/css/pure.css'
import './assets/fonts/fonts.css'
import './App.scss'

class App extends Component {
  render() {
    const publicRoutes = []

    publicRoutes.push({
      path: '/',
      exact: true,
      component: Product,
    })

    const routes = [...publicRoutes]

    return (
      <React.Fragment>
        <Layout>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App
