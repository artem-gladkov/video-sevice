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
  getIsOpenModalRegistration, getUserName,
} from "./redux/selectors";
import {closeModal, openModal} from "./redux/modals-reducer";
import ModalRegistration from "./components/ModalRegistration/ModalRegistration";
import useAuth from "./hooks/auth.hook";
import {updateName} from "./redux/auth-reducer";

const App = (props) => {
  const {
    isOpenModalLogin,
    isOpenModalRegistration,
    isAppLock,
    closeModal,
    openModal,
    isAuth,
    userName,
    updateName
  } = props

  const {login, logout, token} = useAuth()
  const routes = useRoutes(isAuth)

  return (
    <div className={`app ${isAppLock ? 'lock' : ''}`}>
      <Header openModal={openModal}
              isAuth={isAuth}
              logout={logout}
              userName={userName}
              updateName={updateName}
              token={token}/>
      <div className="container">
        <div className="app__body">
          <Navigation/>
          {routes}
        </div>
      </div>
      <Footer/>
      {isOpenModalLogin && <ModalLogin closeModal={closeModal} login={login}/>}
      {isOpenModalRegistration && <ModalRegistration closeModal={closeModal} openModal={openModal}/>}
    </div>
  );
}


const mapStateToProps = state => ({
  isOpenModalLogin: getIsOpenModalLogin(state),
  isOpenModalRegistration: getIsOpenModalRegistration(state),
  isAppLock: getIsAppLock(state),
  isAuth: getIsAuth(state),
  userName: getUserName(state)
})

export default connect(mapStateToProps, {closeModal, openModal, updateName})(App);
