import Logo from "../../assets/logo.png"

function Header() {
    return(
        <div>
            <img src={Logo} alt="logo-devMovies" style={{height:"50px", width:"250px"}}/>
        </div>
    )
}
export default Header