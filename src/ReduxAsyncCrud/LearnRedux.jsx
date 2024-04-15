import React, { useReducer } from 'react'

const initForm = {
        name: "",
        gender:  "", 
        age :"",
        email: "",
}

const formReducer = (store , action)=>{

    switch (action.type) {
        case "UPDATE":
            return {...store , [action.field] : action.value}
        default:
            return store
    }

}

const LearnRedux = () => {
const [formObj , formDispatch] = useReducer(formReducer , initForm)


const inputData = (e) => {
    const { name, value } = e.target
    formDispatch({
        type: "UPDATE",
        field: name,
        value
    })
    }
    
  return (
<>
<div>

<input
    name='name'
    type='text'
    value={formObj.name}
    onChange={inputData}
/>

<input
    name='email'
    type='text'
    value={formObj.email}
    onChange={inputData}
/>
<input
    name='age'
    type='text'
    value={formObj.age}
    onChange={inputData}
/>
<input
    name='gender'
    type='text'
    value={formObj.gender}
    onChange={inputData}
/>


name   {formObj.name}
email   {formObj.email}
age   {formObj.age}
gender   {formObj.gender}

</div>

</>
  )
}

export default LearnRedux
