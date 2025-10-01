// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from '../RegularBtn/RegularBtn.module.scss'
//
//
//

export const RegularBtn = ({
  children,
  icon = false,
  gap = false,
  padding = true,
  background = 1,
  color = 1,
  bolder = false,
  opaque = false,
  border = false,
  aspectRatio = false,
  width = false
}) => {
  //
  const backgroundColor = background === 1
    ? styles.whiteBtn
    : background === 2
      ? styles.redBtn
      : background === 3
        ? styles.noColor
        : ''

  const textColor = color === 1
    ? 'c_black'
    : color === 2
      ? 'c_white'
      : ''

  const borderStyle = border === 1
    ? styles.whiteBorder
    : border === 2
      ? styles.blackBorder
      : border === 3
        ? styles.redBorder
        : ''

  const ratio = aspectRatio === 1
    ? styles.aspectRatio_1
    : aspectRatio === 2
      ? styles.aspectRatio_2
      : ''

  const btnWidth = width === 'small'
    ? styles.small
    : width === 'medium'
      ? styles.medium
      : width === 'large'
        ? styles.large
        : ''

  const btnPadding = padding === true
    ? styles.regularPadding
    : padding === 'medium'
      ? styles.mediumPadding
      : ''

  return (
    <button
      className={`
        ${backgroundColor} 
        ${textColor}
        ${gap ? styles.gap : ''}
        ${btnPadding} 
        ${bolder ? 'bolder' : ''}
        ${borderStyle}
        ${ratio}
        ${btnWidth}
        body
        `}
    >
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
