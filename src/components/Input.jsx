import React, {useId} from 'react'

//Here we are creating custom Input component which can be reused throughout the app with different props like bgColor, textColor, className etc.

//Since we are creating a resuable input component so here useState is not applicable hence forwardref is used.
//We are using React.forwardRef to forward ref to the input element for better handling of focus and other functionalities from parent components.

const Input = React.forwardRef( function Input({
    label, //Label is passed becuz it can be username, email, password etc.
    type = "text",  //default type is text
    className = "",  //additional classes which can be passed as
    ...props  //rest of the props
}, ref){   
    const id = useId() 
    return (
        <div className='w-full'>
            {label && <label  // && is used which means if label exists then only render the label element
            className='inline-block mb-1 pl-1' //bydefault
            htmlFor={id}>  {/* id is used to link label with input for accessibility */} 
                {label}
            </label>
            }
            <input
            type={type}  //here type is text by default but can be changed to email, password etc via passing props
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}  //forwarding ref to the input element
            {...props}
            id={id}  //connecting label with input for accessibility so when label is clicked input gets focused
            />
        </div>
    )
})

export default Input