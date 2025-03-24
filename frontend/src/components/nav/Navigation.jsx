
import "./navigation.css";

const NavigationButton = () => {
    return (
        <nav className="navigation">
            <a href="#resume-div'" className="active"><span></span></a>
            <a href="#project-container" className=""><span></span></a>
            <a href="javascript:Navigation.scrollTo('.section-tech');" className=""><span></span></a>
            {/* <a href="javascript:Navigation.scrollTo('.interests');" className=""><span></span></a>
            <a href="javascript:Navigation.scrollTo('.publications');" className=""><span></span></a>
            <a href="javascript:Navigation.scrollTo('.grail');" className=""><span></span></a> */}
        </nav>
    );
}

export default NavigationButton;