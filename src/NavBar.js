import { NavItem } from "./NavItem"


export function NavBar() {

    return (
        <nav className="d-flex flex-row flex justify-content-start">
            <NavItem href="/" label="Home"></NavItem>
            <NavItem href="about" label="About Me"></NavItem>
        </nav>
    )
}