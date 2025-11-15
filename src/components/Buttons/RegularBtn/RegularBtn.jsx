// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../RegularBtn/RegularBtn.module.scss'
import PropTypes from 'prop-types'
import clsx from 'clsx'
//
//
//

export const RegularBtn = ({
  children,
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
}) => {
  //

  const variantClasses = {
    regular: 'bg-white text-black m-padding r-gap bold',
    red: 'bg-red text-white m-padding r-gap bold w--40'
  }

  const classes = clsx(
    variantClasses[variant],
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
    <button className={classes}>
      {icon ? <div className='icon_container'>{icon}</div> : ''}

      {children && <p className={`${opaque ? 'opaque' : ''}`}>{children}</p>}

    </button>
  )
}

RegularBtn.propTypes = {
  variant: PropTypes.oneOf(['regular', 'red']),
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf([null])]),
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  bold: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  opaque: PropTypes.bool,
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  aspectRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  className: PropTypes.string
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
