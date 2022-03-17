/**
 * Positiion props can be one of 
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top"
 * "center-bottom" | "right-center" | "right-top" | "right-bottom" 
 */

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom';


/**
 * center-center is not defined in position, must be excluded 
 * from typescript for this problem is using Exclude<[type], [exclude-class]>
 */
type ToastPosition = {
  position: 
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}

function Toast({ position }: ToastPosition) {
  return (
    <div>
      Toast Notification Positiion = {position}
    </div>
  )
}

export default Toast