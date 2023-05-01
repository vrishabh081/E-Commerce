import logo from "../images/logo.png"

export const Loader = () => {
    return (
        <div style={{position:"relative", width:"80vw", height:"0vh", margin:0,  padding: 0}}>
            <img style={{width:"5rem", margin:0,  padding: 0, position:"absolute", top:"30vh", left:"52.5%"}} src={logo} alt="loader" />
        </div>
    )
}