import styles from './home.module.scss';
import { useContext } from 'react'
import { SquareContext } from '../Contexts/SquareContext'
import Square from '../Components/Square'
import { LeftTopSVG, AngleSVG, AllBordersSVG } from '../Components/Svg'
import AllBorders from '../Components/AllBorders'

export default function Home() {
  const {
    height,
    width,
    borderRadius,
    allBordersIsActive,
    rotate,
    updateHeight,
    updateRotate,
    updateBorderRadius,
    updateWidth,
    isEmpty,
    clear
  } = useContext(SquareContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.interective_container}>
        <div className={styles.preview}>
          <Square />
          <button onClick={() => clear()} className={styles.clearButton} type="button">
            Clear All
          </button>
        </div>
        <div className={styles.options}>
          <div>
            <span>W</span>
            <input
              min="1"
              value={width}
              onBlur={() => isEmpty()}
              onChange={({ target }) => updateWidth(target.value)}
              type="number"
            />
          </div>
          <div>
            <AngleSVG />
            <input
              value={rotate}
              min="-360"
              onBlur={() => isEmpty()}
              onChange={({ target }) => updateRotate(target.value)}
              type="number"
            />
          </div>
          <div>
            <span>H</span>
            <input
              value={height}
              min="1"
              onBlur={() => isEmpty()}
              onChange={({ target }) => updateHeight(target.value)}
              type="number"
            />
          </div>
          <div>
            <LeftTopSVG />
            <input
              value={borderRadius}
              min="0"
              disabled={allBordersIsActive}
              onBlur={() => isEmpty()}
              className={allBordersIsActive ? styles.inputDisabled : ''}
              onChange={({ target }) => updateBorderRadius(target.value)}
              type="number"
            />
          </div>
          <div>
            <LeftTopSVG />
            <input
              value={borderRadius}
              min="0"
              onBlur={() => isEmpty()}
              onChange={({ target }) => updateBorderRadius(target.value)}
              type="number"
            />
          </div>
          <div>
            <AllBorders />
          </div>
        </div>
      </div>
    </div >
  )
}
