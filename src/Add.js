function Add(props){

    if(props.option==1)
    return(
        <p>Addition = {props.a + props.b}</p>
    )

    if( props.option==2)
    return(
        <p>Subtract = {props.a - props.b}</p>
    )

    if( props.option==3)
    return(
        <p>Multiply = {props.a * props.b}</p>
    )

    if( props.option==4)
    return(
        <p>Division = {props.a / props.b}</p>
    )
}


export default Add;