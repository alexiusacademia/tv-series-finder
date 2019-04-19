import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Series from '../../containers/Series'
import SeriesDetails from '../../containers/SeriesDetails'

const Main = props => (
    <Switch>
        <Route exact path='/' component={Series} />
        <Route path='/details/:id' component={SeriesDetails} />
    </Switch>
)

export default Main