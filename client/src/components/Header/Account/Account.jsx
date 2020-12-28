import React, {useState, useEffect} from "react";
import './Account.scss'
import {profileApi} from "../../../api/api";


const Account = (props) => {
  const {userName, logout, className, updateName, token} = props

  const [editMode, setEditMode] = useState(false)
  const [accountName, setAccountName] = useState(userName)

  const accountNameHandler = (e) => {
    setEditMode(true)
    setAccountName(e.target.value)
  }

  const submitAccountName = () => {
    profileApi.updateName(token, accountName)
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
    setAccountName(userName)
  }, [userName])

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

export default Account