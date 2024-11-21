// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { scroll } from '../utils/logic'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----

export const Control = ({ sliderRef, direction, sections }) => {
  return (
    <div
      className={`control-container ${direction}`} onClick={() => {
        scroll({ direction, sliderRef, sections })
      }}
    >
      <i className={`control bi-chevron-compact-${direction}`} />
    </div>
  )
}
