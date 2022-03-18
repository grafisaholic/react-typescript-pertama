import React from "react"

/**
 * Wrapping Html Element
 * to setting for children type musbe string using Omit<[button], [type-name]>
 */
type ButtonProps = Omit<React.ComponentProps<'button'>, 'children'>  & {
  variant: 'primary' | 'secondary',
  children: string
}


function CustomButton({ variant, children, ...rest }: ButtonProps) {
  return (
    <button 
      className={`bg-transparent hover:bg-blue-500 text-blue-700 px-4 h-8 border border-blue-500 hover:text-white rounded-md hover:border-transparent m-2 class-with-${variant}`} 
      {...rest}
    >
      {children}
    </button>
  )
}

export default CustomButton