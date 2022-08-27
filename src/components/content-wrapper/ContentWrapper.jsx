import "../../assets/css/app.css";

import Footer from "./Footer";
import Rowtop from "./Rowtop";
import Topbar from "./Topbar";

function ContentWrapper() {
    return (
        <>
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content */}
                <div id="content">

                    <Topbar/>

                    <Rowtop/>
                    
                </div>
                {/* End of MainContent */}

                < Footer />

            </div>
            {/* End of Content Wrapper */}
        </>
    );
};

export default ContentWrapper;