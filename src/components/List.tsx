import { ReactNode } from "react"

interface IList{
    children: ReactNode
}
export function List({children}){
    return(<li>{children}</li>)

}