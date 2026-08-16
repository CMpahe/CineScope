import styles from '../RegularBtn/RegularBtn.module.scss'
import clsx from 'clsx'
import { ReactNode } from 'react'


type RegularBtnProps = {
  variant?: 'red' | 'regular' | null
  icon?: ReactNode
  children?: ReactNode
  onClick?: () => void
  gap?: string | null
  opaque?: boolean
  padding?: string | null
  background?: string | null
  color?: string| null
  bold?: string| null
  border?: string| null
  aspectRatio?: string| null
  width?: string| null
  className?: string
}

export const RegularBtn = ({
  children,
  onClick,
  variant = 'regular',
  icon = null,
  gap = null,
  padding = null,
  background = null,
  color = null,
  bold = null,
  opaque = false,
  border = null,
  aspectRatio = null,
  width = null,
  className
}: RegularBtnProps) => {

  const variantClasses = {
    regular: 'bg-white text-black m-padding r-gap bold',
    red: 'bg-red text-white m-padding r-gap bold'
  }

  const classes = clsx(
    variant?variantClasses[variant] : null,
    gap && gap,
    padding && padding,
    background && background,
    color && color,
    bold && bold,
    opaque && opaque,
    border && border,
    aspectRatio && aspectRatio,
    width && width,
    styles.r_btn,
    className
  )

  return (
    <button onClick={onClick} className={classes}>
      {icon ? <div className='icon_container'>{icon}</div> : ''}

      {children && <p className={`${opaque ? 'opaque' : ''}`}>{children}</p>}

    </button>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// ---- ---- PROPS VALUES ---- ----

// - children -> Receives the text that will show the button.

// - background = 1 -> White background.
// - background = 2 -> Red background.
// - background = 3 -> Transparent background.

// - border = 1 -> white border.
// - border = 2 -> black border.

// - color = 1 -> Text color black.
// - color = 2 -> Text color white.

// - aspectRatio = false -> none.
// - aspectRatio = 1 -> 1/1.
// - aspectRatio = 2 -> 6/1.

// - gap = true -> Add some gap between the icon and the button text.

// - padding = true -> add some padding to he button.

// - width = 'small', 'medium', 'large' -> Customize the button width with some values already presets.

// - bolder = true -> Bold text.

// - opaque = true -> Opaque text.
