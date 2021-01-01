import React from 'react'
import {connect} from 'react-redux'
import './App.scss';
import useRoutes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ModalLogin from "./components/ModalLogin/ModalLogin";
import {
  getIsAppLock, getIsAuth,
  getIsOpenModalLogin,
  getIsOpenModalRegistration, getIsStateInitialized,
} from "./redux/selectors";
import ModalRegistration from "./components/ModalRegistration/ModalRegistration";
import useAuth from "./hook/initialHook";
import Preloader from "./components/common/Preloader/Preloader";
const App = (props) => {
  const {
    isOpenModalLogin,
    isOpenModalRegistration,
    isAppLock,
    isAuth,
    isStateInitialized
  } = props

  // Авторизует пользователя если в браузере уже есть token
  const routes = useRoutes(isAuth)

  useAuth()

  if(!isStateInitialized) return <Preloader />

  return (
    <div className={`app ${isAppLock ? 'lock' : ''}`}>
      <Header/>
      <div className="container">
        <div className="app__body">
          <Navigation/>
          {routes}
        </div>
      </div>
      <Footer/>
      {isOpenModalLogin && <ModalLogin/>}
      {isOpenModalRegistration && <ModalRegistration/>}
    </div>
  );
}


const mapStateToProps = state => ({
  isOpenModalLogin: getIsOpenModalLogin(state),
  isOpenModalRegistration: getIsOpenModalRegistration(state),
  isAppLock: getIsAppLock(state),
  isAuth: getIsAuth(state),
  isStateInitialized: getIsStateInitialized(state)
})

export default connect(mapStateToProps)(App);
