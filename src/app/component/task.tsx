import { type } from "os"


type propstask = {
    children:string
}
export default function Task(props:propstask){
    return(
        <p className=" text-black">{props.children}</p>
    )
}