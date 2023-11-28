import { Navlink } from "react-router-dom";
function Navbar(){
    return(<header id="header">
        <div class="header-top">
            <div class="container">
                <div class="row text-center"></div>
            </div>
        </div>
        <div class="container main-menu" style="margin-top:-35px">
            <div class="row align-items-center justify-content-between d-flex" style="margin-top: 30px">
                <div id="logo"><a href="/"><img src='public/comScience_logo.png' alt="Department logo" title=""
                            style="width:250px" /></a></div>
                <nav id="nav-menu-container">
                    <ul class="nav nav-tabs">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/faculty">Faculty</a></li>
                        <li><a href="/research-labs">Research Groups</a></li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
  )};
  

  export default Navbar;