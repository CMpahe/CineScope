import React from 'react'
import ReactDOM from 'react-dom'

export const HoverCardPortal = ({ children, position, eleSize }) => {
  console.log('AQUI ESTOY!!')

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${eleSize.width}px`,
        height: `${eleSize.height}px`,
        transform: 'translate(-50%, -50%) scale(2, 1.5)',
        transition: '.3s all easy-in', // revisar por qué esto no funciona!!
        zIndex: 1000,
        pointerEvents: 'none' // para que no interfiera con scroll
      }}
    >
      {children}
    </div>,
    document.body
  )
}
