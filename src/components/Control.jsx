// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { scroll } from '../logic/logic'
// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { useSlider } from '../customHooks/useSlider'

export const Control = ({ index, direction }) => {
  const { sections } = useSlider()
  return (
    <div
      className={`control-container ${direction}`} onClick={() => {
        scroll({ direction, index, sections })
      }}
    >
      <i className={`control bi-chevron-compact-${direction}`} />
    </div>
  )
}
