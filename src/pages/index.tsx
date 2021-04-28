import styles from './home.module.scss';
import { useContext } from 'react'
import { SquareContext } from '../Contexts/SquareContext'
import Square from '../Components/Square'
import { LeftTop, Angle } from '../Components/Svg'

export default function Home() {
  const {
    height,
    width,
    borderRadius,
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
          <div className={styles.left_options}>
            <div>
              <span>W</span>
              <input
                min="1"
                value={width}
                onBlur={() => isEmpty()}
                onChange={({ target }) => updateWidth(target.value)}
                className={styles.input}
                type="number"
              />
            </div>
            <div>
              <Angle />
              <input
                value={rotate}
                max="360"
                min="-360"
                className={styles.input}
                onBlur={() => isEmpty()}
                onChange={({ target }) => updateRotate(target.value)}
                type="number"
              />
            </div>
          </div>
          <div className={styles.right_options}>
            <div>
              <span>H</span>
              <input
                value={height}
                className={styles.input}
                min="1"
                onBlur={() => isEmpty()}
                onChange={({ target }) => updateHeight(target.value)}
                type="number"
              />
            </div>
            <div>
              <LeftTop />
              <input
                value={borderRadius}
                min="0"
                onBlur={() => isEmpty()}
                onChange={({ target }) => updateBorderRadius(target.value)}
                className={styles.input}
                type="number"
              />
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}
