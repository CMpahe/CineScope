// ---- ---- ---- ----  STYLES  ---- ---- ---- ----
// import styles from './TextTags.module.scss'
import clsx from 'clsx'
import PropTypes from 'prop-types'
//
//
//

export const SectionWrapper = ({
  children,
  variant = null,
  width = null,
  margin = null,
  padding = null,
  translateUp = null,
  className = null
}) => {
  //
  //
  //
  const variantClasses = {
    coreSection: 'w-full b-transparent flex-g--1 r-trnslt-up'
  }

  const classes = clsx(
    margin && margin,
    padding && padding,
    width && width,
    variantClasses[variant],
    translateUp && 'r-trnslt-up',
    className
  )

  return (
    <section
      className={classes}
    >
      {children}
    </section>
  )
}

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['coreSection']),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null])
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null])
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null])
  ]),
  translateUp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null])
  ]),
  className: PropTypes.string
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// SectionWrapper

// This component returns a html section tag e.g.: "<section>Something here</section>"
// It allows to add some settings to the section tag through the component prop

// It has one main variant called 'coreSection', most commonly used in this component. While it supports many other settings, it even allows you to create your own variant based on your context.

// The components allows all the microClasses created within '_utilities.scss'. Making it vary flexible when styling.

// PROPS ACCEPTED:

// - children = node element that will be wrapped within the component
// - variant = the name of any presets
// - width = individuals settings that can be adjusted based on your needs
// - margin = same as before
// - padding = same as before
// - translateUp = same as before
// - className = same as before
