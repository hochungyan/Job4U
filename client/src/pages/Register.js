import  { Logo,FormRow,Alert }  from '../components'
import { useState, useEffect} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
name:'',
email:'',
password:'',
isMember:true,
showAlert:true,
}
const Register = () =>
{
    const [values, setValues] = useState(initialState)
    //Global State and use Nav

const handleChange = (e) =>
{
    console.log(e.target)
}
const onSubmit = (e) =>
{
    e.preventDefault()
    console.log(e.target)
}
    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit ={onSubmit}>
            <Logo/> 
            <h3>Login</h3>
            {values.showAlert && <Alert/>}
            {/* name */}
           <FormRow type ="text" name ="name" value={values.name} handleChange ={handleChange} /> 
           {/* email */}
           <FormRow type ="email" name ="email" value={values.email} handleChange ={handleChange} /> 
               {/* password */}
               <FormRow type ="password" name ="password" value={values.password} handleChange ={handleChange} />
            <button type ="submit" className ="btn btn-block">submit</button>
            </form>
            </Wrapper>



    )
}
export default Register;