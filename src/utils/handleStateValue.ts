import { Dispatch, SetStateAction } from "react";

export function handleStateValeu(setState: Dispatch<SetStateAction<boolean>>){
    return setState((prev) => !prev)
}