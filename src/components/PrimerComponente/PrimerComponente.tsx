import { FC } from "react"

interface IPropsPrimerComponente {
    texto: string,
    color: string,
    fontSize?: number,
}


export const PrimerComponente: FC<IPropsPrimerComponente> = ({texto, color,fontSize}) => {
  return (
    <div style={{color: `${color}`, fontSize:`${fontSize || 2}rem` }}>
        <p></p>
        {texto}
        </div>
  )
}
