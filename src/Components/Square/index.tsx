import styles from './square.module.scss';
import { useContext, useEffect } from 'react'
import { SquareContext } from '../../Contexts/SquareContext'

export default function square() {
  const square = useContext(SquareContext)

  useEffect(() => {
    const squareNode = document.getElementById('square')
    squareNode.style.setProperty('height', `${square.height}rem`)
    squareNode.style.setProperty('width', `${square.width}rem`)
    squareNode.style.setProperty('border-radius', `${square.borderRadius}px`)
    squareNode.style.transform = `rotate(${square.rotate}deg)`
  }, [square])

  return (
    <div id="square" className={styles.square} />
  )
}