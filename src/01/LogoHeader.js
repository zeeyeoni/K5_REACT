import LogoA from "./LogoA";
import LogoP from "./LogoP";
import LogoImg from "./LogoImg";


function LogoHeader() {

    return(
        <header className="App-header">
                <LogoImg />
                {/* <LogoImg />
                <LogoImg />
                <LogoImg />
                <LogoImg /> */}
                <LogoP msg={"부산대학교 K-5기"} />
                <LogoP cute={"💎"} />
                <LogoP msg={"💛이지연💤"} />           
                <LogoA />
        </header>
    );
}

export default LogoHeader;