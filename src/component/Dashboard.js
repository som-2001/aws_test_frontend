import { AuthHoc } from "../Hoc/AuthHoc";

export const Dashboard=(props)=>{
    return(
        <div>This is your dashboard!! {props.authentication}</div>
    )
}
export const IsAuth=AuthHoc(Dashboard);