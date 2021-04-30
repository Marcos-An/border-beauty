import styles from './square.module.scss';
import { useContext, useEffect } from 'react'
import { SquareContext } from '../../Contexts/SquareContext'

export default function square() {
  const square = useContext(SquareContext)
  const { height,
    width,
    borderRadius,
    rotate,
    leftTop,
    rightTop,
    rightBottom,
    unit,
    leftBottom,
    allBordersIsActive,
    backgroundColor } = square

  useEffect(() => {
    const { r, g, b, a } = backgroundColor.rgb

    const squareNode = document.getElementById('square')
    squareNode.style.setProperty('height', `${height}${unit}`)
    squareNode.style.setProperty('width', `${width}${unit}`)
    if (allBordersIsActive) {
      squareNode.style.setProperty('border-radius', `${leftTop}${unit} ${rightTop}${unit} ${rightBottom}${unit} ${leftBottom}${unit}`)
    } else {
      squareNode.style.setProperty('border-radius', ` ${borderRadius}${unit}`)
    }
    squareNode.style
      .setProperty("background-color", `rgb(${r}, ${g}, ${b}, ${a})`)

    squareNode.style.transform = `rotate(${rotate}deg)`

  }, [square])

  return (
    <div id="square" className={styles.square} />
  )
}