import { nanoid } from "nanoid"; 

import Menu from "../../components/UI/Menu/Menu";
import Logo from "../../components/UI/Logo/Logo";

import "./Header.css";

export default function Header() {
    return (
        <>
            <header className="container-fluid header">
                <div className="row">
                    <div className="col col-md">
                        <div className="header-top">
                            <Logo key={nanoid()} logoId="startLogo" />
                        </div>
                        <Menu key={nanoid()} />
                    </div>
                </div>
            </header>
        </>
    );
};