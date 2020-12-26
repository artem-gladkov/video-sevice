import React from 'react'
import {connect} from 'react-redux'
import './App.scss';
import useRoutes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ModalLogin from "./components/ModalLogin/ModalLogin";
import {getIsAppLock, getIsOpenModalLogin} from "./redux/selectors";
import {closeModal, openModal} from "./redux/modals-reducer";

const App = (props) => {
  const {isOpenModalLogin, isAppLock, closeModal, openModal} = props

  const routes = useRoutes()

  return (
    <div className={`app ${isAppLock ? 'lock' : ''}`}>
      <Header openModal={openModal}/>
      <div className="container">
        <div className="app__body">
          <Navigation/>
          {routes}
        </div>
      </div>
      <Footer/>
      {isOpenModalLogin && <ModalLogin closeModal={closeModal}/>}
    </div>
  );
}


const mapStateToProps = state => ({
  isOpenModalLogin: getIsOpenModalLogin(state),
  isAppLock: getIsAppLock(state)
})

export default connect(mapStateToProps, {closeModal, openModal})(App);
