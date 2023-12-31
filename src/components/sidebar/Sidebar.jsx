import "./sidebar.scss"
import SidebarList from "./SidebarList"

export default function Sidebar({menuOpen,setMenuOpen}) {
    return (
        <div className={"sidebar " + (menuOpen && "active")}>
            <ul>
                <SidebarList section="introduction" name="Home" setMenuOpen={setMenuOpen}/>
                <SidebarList section="summary" name="Summary" setMenuOpen={setMenuOpen}/>
                <SidebarList section="works" name="Work Experience" setMenuOpen={setMenuOpen}/>
                <SidebarList section="contact" name="Contact" setMenuOpen={setMenuOpen}/>
            </ul>
        </div>
    )
}
