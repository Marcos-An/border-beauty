import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './cssCode.module.scss'
import { useEffect, useState, useContext } from 'react'
import { SquareContext } from '../../Contexts/SquareContext'

export default function Component() {
  const square = useContext(SquareContext)

  const { height,
    width,
    borderRadius,
    unit,
    rotate,
    leftTop,
    rightTop,
    rightBottom,
    leftBottom,
    allBordersIsActive,
    backgroundColor, 
    updateStringCss 
  } = square

  const { r, g, b, a } = backgroundColor.rgb

  function componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function borderRadiusToString() {
    if (!allBordersIsActive) {
      return `border-radius: ${borderRadius}${unit};`
    }
    return `border-radius: ${leftTop}${unit} ${rightTop}${unit} ${rightBottom}${unit} ${leftBottom}${unit};`
  }

  function heightToString() {
    return `height: ${height}${unit};`
  }

  function widthToString() {
    return `width: ${width}${unit};`
  }
  function rotateToString() {
    return `transform: rotate(${rotate}deg)`
  }

  function backgroundColorToString() {
    if (a === 1) {
      return `backgroundColor: ${rgbToHex(r, g, b)};`
    } else {
      return `backgroundColor: rgb(${r}, ${g}, ${b}, ${a}};`
    }
  }


  const [codeString, setCodeString] = useState<string>(``)

  useEffect(() => {
    const stringEmpetyLines =    `div { 
      ${backgroundColorToString()}
      ${height !== '0' ? heightToString() : ''}
      ${width !== '0' ? widthToString() : ''}
      ${borderRadius !== '0' ? borderRadiusToString() : ''}
      ${rotate !== '0' ? rotateToString() : ''}
}`
    const removedEmpetyLines = stringEmpetyLines.replace(/^\s*[\r\n]/gm, '');
    
    setCodeString(removedEmpetyLines)
    updateStringCss(removedEmpetyLines)

  }, [square])

  return (
    <SyntaxHighlighter language="css" className={styles.cssCode}>
      {codeString}
    </SyntaxHighlighter>
  );
};