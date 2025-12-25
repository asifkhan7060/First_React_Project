import React from "react";

//Here we are creating custom Button component which can be reused throughout the app with different props like bgColor, textColor, className etc.

export default function Button({
    children, //content inside the button
    type = "button",
    bgColor = "bg-blue-600",  //default background color
    textColor = "text-white", //default text color
    className = "", //additional classes which can be passed as props
    ...props  //rest of the props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}  {/* content inside the button */}
        </button>
    );
}



// export default function Button() {
//   return (
//     <div>Button</div>
//   )
// }

// export default Button