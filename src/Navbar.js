function Navbar(){
    return(<header id="header">
        <div class="header-top">
            <div class="container">
                <div class="row text-center"></div>
            </div>
        </div>
        <div class="container main-menu" >
            <div class="row align-items-center justify-content-between d-flex">
                <div id="logo"><a href="/"><img src='public/comScience_logo.png' alt="Department logo" title="Computer Science Department"
                            /></a></div>
                <nav id="nav-menu-container">
                    <ul class="nav nav-tabs">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/faculty">Faculty</a></li>
                        <li><a href="/research-labs">Research Groups</a></li>
                        <li><a href="/NewsAndEvents">News</a></li>
                        <li><a href="/Contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
  )};
  

  export default Navbar;