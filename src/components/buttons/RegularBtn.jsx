export const RegularBtn = ({ children, icon = false, background = 1, color = 1, bolder = false, opaque = false }) => {
  const backgroundColor = background === 1 ? 'white-btn' : background === 2 ? 'red-btn' : ''
  const textColor = color === 1 ? 'c-black' : color === 2 ? 'c-white' : ''

  return (
    <button
      className={`${backgroundColor} ${textColor} 
      ${bolder ? 'bolder' : ''} body`}
    >
      {icon ? <div className='icon-container'>{icon}</div> : ''}
      <p className={`${opaque ? 'opaque' : ''}`}>{children}</p>
    </button>
  )
}
