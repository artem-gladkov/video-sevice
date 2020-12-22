import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MoviesPage from "./pages/MoviesPage";
import ChannelsPage from "./pages/ChannelsPage";

const useRoutes = (isAuth) => {
  if(isAuth){
    return(
      <Switch>
        <Route path='/movies' exact component={MoviesPage}/>
        <Route path='/channels' exact component={ChannelsPage}/>
        <Redirect to='/movies' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/movies' exact component={MoviesPage}/>
      <Route path='/channels' exact component={ChannelsPage}/>
      <Redirect to='/movies' />
    </Switch>
  )
}

export default useRoutes