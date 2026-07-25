import clsx from 'clsx'
import { ReactNode } from 'react'

type SectionWrapperProp = {
  children: ReactNode
  variant: 'coreSection' | null
  width?: null | string
  margin?: null | string
  padding?: null | string
  translateUp?: null | string
  className?: null | string
}

export const SectionWrapper = ({
  children,
  variant = null,
  width = null,
  margin = null,
  padding = null,
  translateUp = null,
  className = null
}: SectionWrapperProp) => {

  const variantClasses = {
    coreSection: 'w-full b-transparent flex-g--1 r-trnslt-up'
  }

  const classes = clsx(
    margin && margin,
    padding && padding,
    width && width,
    variant?variantClasses[variant] : null,
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