export interface SectionController {
    section: number
    moveUp: () => void
    moveDown: () => void
    setSection: (section: number) => void
}