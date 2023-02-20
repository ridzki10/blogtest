import { ImTwitter, ImFacebook, ImYoutube } from "react-icons/im";

const Header = () => {
    return (
        // <div>header</div>
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" className="input-text" placeholder="Search..."/>
                </div>
                <div className="shrink w-80 sm:order-2">
                    <a className="font-bold uppercase text-3xl">Design</a>
                </div>
                <div className="flex w-96 order-3 justify-center gap-6">
                    <a href="#"><ImFacebook color="#888888"/></a>
                    <a href="#"><ImTwitter color="#888888"/></a>
                    <a href="#"><ImYoutube color="#888888"/></a>
                </div>
            </div>
        </header>
    );
}

export default Header;