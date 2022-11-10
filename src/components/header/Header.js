import { Fragment } from "react";

const Header = (props) => {
    return (
        <Fragment>
            <header className="w-full flex justify-center items-center py-2.5 bg-primaryBlue">
                <h1 className="text-xl text-primaryWhite">To Do Application</h1>
            </header>
        </Fragment>
    );
};

export default Header;