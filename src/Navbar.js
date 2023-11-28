import { NavLink } from "react-router-dom";
function Navbar(){
    return(<header id="header">
        <div class="header-top">
            <div class="container">
                <div class="row text-center"></div>
            </div>
        </div>
        <div class="container main-menu" style="{{margin-top:-35px}}">
            <div class="row align-items-center justify-content-between d-flex" style="margin-top: 30px">
                <div id="logo"><a href="/"><img src='public/comScience_logo.png' alt="Department logo" title=""
                            style="{{width:250px}}" /></a></div>
                <nav id="nav-menu-container">
                    <ul class="nav nav-tabs">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/faculty">Faculty</NavLink></li>
                        <li><NavLink to="/research-labs">Research Groups</NavLink></li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
  )};
  

  export default Navbar;