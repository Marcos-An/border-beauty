import styles from './colorPicker.module.scss'
import { CloseSVG } from '../Svg'
import { useContext } from 'react'
import { SquareContext } from '../../Contexts/SquareContext'
import { ChromePicker } from 'react-color';

export default function ColorPicker({ handleIsOpenColorPicker }) {
  const { backgroundColor, updateBackgroundColor } = useContext(SquareContext)
  return (
    <div className={styles.containerColorPickers}>
      <div className={styles.selectTypeColorPicker}>
        <button type="button" onClick={() => handleIsOpenColorPicker()}>
          <CloseSVG />
        </button>
      </div>
      <div className={styles.colorPickersWrapper}>
        <ChromePicker
          color={backgroundColor}

          onChange={(color) => updateBackgroundColor({
            hex: color.hex,
            rgb: {
              r: color.rgb.r,
              g: color.rgb.g,
              b: color.rgb.b,
              a: color.rgb.a
            }
          })}
          className={styles.chromePicker}
        />
      </div>
    </div>
  )
}