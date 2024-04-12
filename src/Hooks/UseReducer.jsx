import React, { useEffect, useReducer } from 'react'

const formfill = {
    name: "",
    email: "",
    password: ""
}

const formfillReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return { ...state, [action.name]: action.value }

        default:
            return state
    }
}

const UseReducer = () => {

    const [formObj, dispatchForm] = useReducer(formfillReducer, formfill)

    useEffect(() => {

        dispatchForm({
            type: "UPDATE",
            name: "name",
            value: "shivraj"
        })

    }, [])
    return (
        <>

            <div>

                <input
                    name='email'
                    type='email'
                    value={formObj.email}
                    onChange={(e) => {
                        const { name, value } = e.target
                        dispatchForm({
                            type: "UPDATE",
                            name,
                            value
                        })
                    }}


                />

                <input
                    name='password'
                    type='password'
                    value={formObj.password}
                    onChange={(e) => {
                        const { name, value } = e.target
                        dispatchForm({
                            type: "UPDATE",
                            name,
                            value
                        })
                    }}


                />

                name   {formObj.name}
                email   {formObj.email}
                pass   {formObj.password}

            </div>



        </>
    )
}

export default UseReducer
