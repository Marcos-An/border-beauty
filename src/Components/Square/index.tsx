import styles from './square.module.scss';
import { useContext, useEffect } from 'react'
import { SquareContext } from '../../Contexts/SquareContext'

export default function square() {
  const {
    height,
    width,
    borderRadius,
    rotate,
    leftTop,
    rightTop,
    rightBottom,
    leftBottom,
    allBordersIsActive,
    backgroundColor
  } = useContext(SquareContext)

  const square = useContext(SquareContext)

  function componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  useEffect(() => {
    const { r, g, b, a } = backgroundColor.rgb

    const squareNode = document.getElementById('square')
    squareNode.style.setProperty('height', `${height}rem`)
    squareNode.style.setProperty('width', `${width}rem`)
    if (allBordersIsActive) {
      squareNode.style.setProperty('border-radius', `${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px`)
    } else {
      squareNode.style.setProperty('border-radius', ` ${borderRadius}px`)
    }
    squareNode.style
      .setProperty("background-color", `rgb(${r}, ${g}, ${b}, ${a})`)

    squareNode.style.transform = `rotate(${rotate}deg)`


    console.log(rgbToHex(r, g, b))
  }, [square])

  return (
    <div id="square" className={styles.square} />
  )
}