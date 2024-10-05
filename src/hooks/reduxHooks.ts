import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { dispathType, stateType } from "../redux/store";



export const useAppDispatch = useDispatch<dispathType>;



export const useAppSelector:TypedUseSelectorHook<stateType> = useSelector;