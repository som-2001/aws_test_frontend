export const AuthHoc=(Component)=>{
    return (props)=>{
        if(props.authentication==='true')
        {
           return (
           <div>
            <p>Modified version of the dashboard component.</p>
           <Component {...props}/>
           </div>)
        }else{
            <p>You are not logged in!</p>
        }

    }
}