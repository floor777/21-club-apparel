 import './Header.css';



function Header() {
    return ( 

        <div className="Header">
        <nav id="test">

        <div id="upper-left-header-elements">
        
        <a id="account-person-png" href="/"> <img id="account-person-icon" src="person-icon.png" alt="icon for account creation" width="30" height="30"></img></a>
            
        </div>

        <div id="upper-center-header-elements">
        <a id="revenge-anchor" href="/"> <img id="revenge-icon" src="revenge.png" alt="revenge" width="200" height="75"></img></a>

            
        </div>

        <div id="upper-right-header-elements"> 
        
        <a id="search-glass-png" href="/"> <img id="search-glass-icon" src="search-glass.png" alt="icon for searching the website" width="20" height="20"></img></a>
    
        <a id="shopping-cart-png" href="/"> <img id="shopping-cart-icon" src="shopping-cart.png" alt="icon for the shopping cart" width="30" height="30"></img></a>
        </div>


        </nav>



        </div>




     );
}

export default Header;