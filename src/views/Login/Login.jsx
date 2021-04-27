import React,{useContext,useState} from 'react'
import LoginService from '../../services/Login/LoginService';
import FormLog from './FormLog';
import authContext from '../../context/authContext'

export default function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [check,setCheck] = useState(false);

  const auth = useContext(authContext)

  const onChangeHandler = (e) => {
    LoginService.onChange(e,setEmail,setPassword,setCheck)
  }

  const onSubmitHandler = () => {
    LoginService.onSubmit(email,password,check,auth)
  }

  return (
    <div className="logContainer">
        <FormLog 
          email={email} 
          password={password} 
          check={check} 
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
        />
    </div>
  )
}
