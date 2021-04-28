import { createContext, useState, ReactNode } from 'react';


type SquareContextData = {
  height: string;
  width: string;
  borderRadius: string;
  rotate: string;
  updateHeight: (height: string) => void,
  updateRotate: (rotate: string) => void,
  updateBorderRadius: (radius: string) => void,
  updateWidth: (width: string) => void,
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
  const [rotate, setRotate] = useState('0')


  function clear() {
    setHeight('20')
    setWidth('20')
    setBorderRadius('0')
    setRotate('0')
  }

  function isEmpty() {
    if (!height) setHeight('0')
    if (!width) setWidth('0')
    if (!borderRadius) setBorderRadius('0')
    if (!rotate) setRotate('0')
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
        updateHeight,
        updateRotate,
        updateBorderRadius,
        updateWidth,
        isEmpty,
        clear
      }}
    >
      {children}
    </SquareContext.Provider>
  )
}