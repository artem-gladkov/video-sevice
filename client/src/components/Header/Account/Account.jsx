import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import './Account.scss'
import {profileApi} from "../../../api/api";
import {getOwnerName} from "../../../redux/selectors";
import {logout, updateName} from "../../../redux/authReducer";


const Account = (props) => {
  const {ownerName, logout, className, updateName} = props

  const [editMode, setEditMode] = useState(false)
  const [accountName, setAccountName] = useState(ownerName)

  const accountNameHandler = (e) => {
    setEditMode(true)
    setAccountName(e.target.value)
  }

  const submitAccountName = () => {
    profileApi.updateName(accountName)
      .then(response => {
        if (response.status === 200) {
          updateName(response.data.name)
        }
      })
      .catch()
      .finally(() => {
        setEditMode(false)
      })
  }

  useEffect(() => {
    setAccountName(ownerName)
  }, [ownerName])

  return (
    <div className={`account ${className && className}`}>
      {editMode
        ? <input type="text"
                 min='1'
                 maxLength='20'
                 name={accountName}
                 value={accountName}
                 onBlur={submitAccountName}
                 autoFocus={true}
                 onChange={accountNameHandler}
        />
        : <div className='account__name' onClick={() => {
          setEditMode(true)
        }}>{accountName}</div>
      }

      <button className='account__btnLogout' onClick={logout}>Выйти</button>
    </div>
  )
}

const mapStateToProps = state => ({
   ownerName: getOwnerName(state)
})

export default connect(mapStateToProps, {logout, updateName})(Account)