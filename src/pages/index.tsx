import styles from './home.module.scss';
import { useContext, useEffect, useState } from 'react'
import { SquareContext } from '../Contexts/SquareContext'
import Square from '../Components/Square'
import { LeftTopSVG, AngleSVG, CopySVG } from '../Components/Svg'
import AllBorders from '../Components/AllBorders'
import ColorPicker from '../Components/ColorPicker'
import CssCode from '../Components/CssCode'
import {CopyToClipboard} from 'react-copy-to-clipboard';

interface option {
  value: string,
  isChecked: boolean
}

export default function Home() {
  const square = useContext(SquareContext)
  const {
    height,
    width,
    borderRadius,
    allBordersIsActive,
    rotate,
    stringCss,
    backgroundColor,
    updateHeight,
    updateRotate,
    updateBorderRadius,
    changeUnit,
    updateWidth,
    isEmpty,
    clear
  } = square

  const [isOpenColorPicker, setIsOpenColorPicker] = useState<boolean>(false)
  const [color, setColor] = useState<string>('')
  const [options, setOptions] = useState<option[]>([
    { value: 'px', isChecked: false },
    { value: 'rem', isChecked: true },
  ])

  useEffect(() => {
    const { r, g, b, a } = backgroundColor.rgb
    document.getElementById('color-picker').style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${a})`

    if (backgroundColor.rgb.a === 1) {
      setColor(backgroundColor.hex)
    } else setColor(`rgb(${r}, ${g}, ${b}, ${a})`)
  }, [backgroundColor])


  function handleIsOpenColorPicker() {
    setIsOpenColorPicker(!isOpenColorPicker)
  }

  function handleCheck(props: option) {
    const newOptions = options

    newOptions.forEach(option => {
      if (option === props) {
        option.isChecked = true
      } else option.isChecked = false
    })

    changeUnit(props.value)
    setOptions([...newOptions])
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.interective_container}>
        <div className={styles.preview}>
          <Square />
          <button onClick={() => clear()} className={styles.clearButton}  type="button">
            Clear All
          </button>
        </div>

        <div className={styles.boarOptionsCode}>
          <div className={styles.options}>
            <div className={styles.option}>
              <span>W</span>
              <input
                min="1"
                value={width}
                onBlur={() => isEmpty()}
                onChange={({ target }) => updateWidth(target.value)}
                type="number"
              />
            </div>
            <div className={styles.option}>
              <span>H</span>
              <input
                value={height}
                min="1"
                onBlur={() => isEmpty()}
                onChange={({ target }) => updateHeight(target.value)}
                type="number"
              />
            </div>
            <div className={styles.option}>
              <AngleSVG />
              <input
                value={rotate}
                min="-360"
                onBlur={() => isEmpty()}
                onChange={({ target }) => updateRotate(target.value)}
                type="number"
              />
            </div>
            <div className={styles.option}>
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
            <div className={styles.colorPickerSection}>
              {isOpenColorPicker && <ColorPicker handleIsOpenColorPicker={handleIsOpenColorPicker} />}
              <button
                id="color-picker"
                className={styles.colorPickerButton}
                onClick={() => handleIsOpenColorPicker()}
              />
              <input value={color} onChange={() => null} className={styles.inputStyle} />
            </div>
            <div className={styles.option}>
              <AllBorders />
            </div>
          </div>
          <div className={styles.cssCode}>
            <div className={styles.copyWrapper}>
              <h1>CSS</h1>
              {options.map((option, index) => (
                <div key={index} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={option.isChecked}
                    onChange={() => handleCheck(option)}
                  />
                  <span>{option.value}</span>
                </div>
              ))}
              <CopyToClipboard text={stringCss}>
                <button type="button" className={styles.copyClipBoard} >
                  <CopySVG />
                  copy  
                </button>
              </CopyToClipboard>
            </div>
            <CssCode />
          </div>
        </div>
      </div>
    </div>
  )
}
