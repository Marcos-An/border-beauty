import { createContext, useState, ReactNode } from 'react';


type SquareContextData = {
  height: string;
  width: string;
  borderRadius: string;
  rotate: string;
  allBordersIsActive: boolean;
  leftTop: string,
  leftBottom: string,
  rightTop: string,
  rightBottom: string,
  updateHeight: (height: string) => void,
  updateRotate: (rotate: string) => void,
  updateBorderRadius: (radius: string) => void,
  updateUniqueBorder: (radius: string, unique: string) => void,
  updateWidth: (width: string) => void,
  handleSetAllBordersIsActive: () => void,
  isEmpty: () => void,
  clear: () => void
}


export const SquareContext = createContext({} as SquareContextData)

type SquareContextProviderProps = {
  children: ReactNode,
}

export function SquareContextProvider({ children }: SquareContextProviderProps) {

  const [height, setHeight] = useState('20')
  const [width, setWidth] = useState('20')
  const [borderRadius, setBorderRadius] = useState('0')
  const [leftTop, setLeftTop] = useState('0')
  const [leftBottom, setLeftBottom] = useState('0')
  const [rightTop, setRightTop] = useState('0')
  const [rightBottom, setRightBottom] = useState('0')
  const [rotate, setRotate] = useState('0')
  const [allBordersIsActive, setAllBordersIsActive] = useState(false)


  function clear() {
    setHeight('20')
    setWidth('20')
    setBorderRadius('0')
    setRotate('0')
    setLeftTop('0')
    setLeftBottom('0')
    setRightTop('0')
    setRightBottom('0')
  }

  function handleSetAllBordersIsActive() {
    if (!allBordersIsActive) {
      document.getElementById('left-top').focus()
    }

    setAllBordersIsActive(!allBordersIsActive)

  }

  function isEmpty() {
    if (!height) setHeight('0')
    if (!width) setWidth('0')
    if (!borderRadius) setBorderRadius('0')
    if (!rotate) setRotate('0')
    if (!leftTop) setLeftTop('0')
    if (!leftBottom) setLeftBottom('0')
    if (!rightTop) setRightTop('0')
    if (!rightBottom) setRightBottom('0')
  }

  function updateHeight(height: string) {
    if (Number(height) < 0) {
    } else {
      setHeight(height)
    }
  }

  function updateRotate(rotate: string) {
    if (Number(rotate) > 360) {
      setRotate('360')
    } else if (Number(rotate) < -360) {
      setRotate('-360')
    } else {
      setRotate(rotate)
    }

  }

  function updateBorderRadius(radius: string) {
    if (Number(radius) < 0) {
    } else {
      setBorderRadius(radius)
    }
  }

  function updateUniqueBorder(radius: string, unique: string) {
    if (Number(radius) < 0) {
    } else if (unique === 'left-top') {
      setLeftTop(radius)
    } else if (unique === 'right-top') {
      setRightTop(radius)
    } else if (unique === 'right-bottom') {
      setRightBottom(radius)
    } else if (unique === 'left-bottom') {
      setLeftBottom(radius)
    }
  }

  function updateWidth(width: string) {
    if (Number(width) < 0) {
      return
    } else {
      setWidth(width)
    }
  }

  return (
    <SquareContext.Provider
      value={{
        height,
        width,
        borderRadius,
        rotate,
        allBordersIsActive,
        leftTop,
        leftBottom,
        rightTop,
        rightBottom,
        updateHeight,
        updateRotate,
        updateBorderRadius,
        handleSetAllBordersIsActive,
        updateUniqueBorder,
        updateWidth,
        isEmpty,
        clear
      }}
    >
      {children}
    </SquareContext.Provider>
  )
}