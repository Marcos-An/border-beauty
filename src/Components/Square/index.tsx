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
    allBordersIsActive
  } = useContext(SquareContext)

  const square = useContext(SquareContext)

  useEffect(() => {
    const squareNode = document.getElementById('square')
    squareNode.style.setProperty('height', `${height}rem`)
    squareNode.style.setProperty('width', `${width}rem`)
    if (allBordersIsActive) {
      squareNode.style.setProperty('border-radius', `${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px`)
    } else {
      squareNode.style.setProperty('border-radius', ` ${borderRadius}px`)
    }
    squareNode.style.transform = `rotate(${rotate}deg)`
  }, [square])

  return (
    <div id="square" className={styles.square} />
  )
}