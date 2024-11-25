
import "./navigation.css";

const NavigationButton = () => {
    return (
        <nav class="navigation">
            <a href="#resume-div'" class="active"><span></span></a>
            <a href="#project-container" class=""><span></span></a>
            <a href="javascript:Navigation.scrollTo('.section-tech');" class=""><span></span></a>
            {/* <a href="javascript:Navigation.scrollTo('.interests');" class=""><span></span></a>
            <a href="javascript:Navigation.scrollTo('.publications');" class=""><span></span></a>
            <a href="javascript:Navigation.scrollTo('.grail');" class=""><span></span></a> */}
        </nav>
    );
}

export default NavigationButton;