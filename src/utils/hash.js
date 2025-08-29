export const hash = (obj) => {
  const s = typeof obj === 'string' ? obj : JSON.stringify(obj)
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i)
    h |= 0
  }
  return String(h)
}

// Hash is a function that takes a content and returns a short value (a digital fingerprint)
