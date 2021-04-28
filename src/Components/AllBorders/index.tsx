import styles from './allBorders.module.scss'
import { SquareContext } from '../../Contexts/SquareContext'
import { AllBordersSVG, LeftTopSVG, RightTopSVG, RightBottomSVG, LeftBottomSVG } from '../../Components/Svg'
import { useContext, useState } from 'react'


export default function AllBorders() {
  const {
    leftTop,
    rightTop,
    rightBottom,
    leftBottom,
    borderRadius,
    allBordersIsActive,
    isEmpty,
    updateBorderRadius,
    handleSetAllBordersIsActive,
    updateUniqueBorder
  } = useContext(SquareContext)

  const [currentBorder, setCurrentBorder] = useState<string>('left-top')

  function setcurrentBorder(type: string) {
    setCurrentBorder(type)
  }
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={allBordersIsActive ? styles.buttonAllBordersActive : styles.buttonAllBorders}
        onClick={() => handleSetAllBordersIsActive()}
      >
        {
          !allBordersIsActive ? (
            <AllBordersSVG />
          ) : currentBorder === 'left-top' ? (
            <LeftTopSVG />
          ) : currentBorder === 'right-top' ? (
            <RightTopSVG />
          ) : currentBorder === 'right-bottom' ? (
            <RightBottomSVG />
          ) : currentBorder === 'left-bottom' ? (
            <LeftBottomSVG />
          ) : null
        }
      </button>
      <div className={styles.borderWrapper}>
        <input
          value={!allBordersIsActive ? borderRadius : leftTop}
          min="0"
          id="left-top"
          onBlur={() => isEmpty()}
          disabled={!allBordersIsActive}
          onFocus={() => setcurrentBorder('left-top')}
          className={!allBordersIsActive ? styles.inputDisabled : ''}
          onChange={({ target }) => updateUniqueBorder(target.value, 'left-top')}
          type="number"
        />
        <input
          value={!allBordersIsActive ? borderRadius : rightTop}
          min="0"
          onBlur={() => isEmpty()}
          disabled={!allBordersIsActive}
          onFocus={() => setcurrentBorder('right-top')}
          className={!allBordersIsActive ? styles.inputDisabled : ''}
          onChange={({ target }) => updateUniqueBorder(target.value, 'right-top')}
          type="number"
        />
        <input
          value={!allBordersIsActive ? borderRadius : rightBottom}
          min="0"
          onBlur={() => isEmpty()}
          disabled={!allBordersIsActive}
          onFocus={() => setcurrentBorder('right-bottom')}
          className={!allBordersIsActive ? styles.inputDisabled : ''}
          onChange={({ target }) => updateUniqueBorder(target.value, 'right-bottom')}
          type="number"
        />
        <input
          value={!allBordersIsActive ? borderRadius : leftBottom}
          min="0"
          onBlur={() => isEmpty()}
          disabled={!allBordersIsActive}
          onFocus={() => setcurrentBorder('left-bottom')}
          className={!allBordersIsActive ? styles.inputDisabled : ''}
          onChange={({ target }) => updateUniqueBorder(target.value, 'left-bottom')}
          type="number"
        />
      </div>
    </div>
  )
}