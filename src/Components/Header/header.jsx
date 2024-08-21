import './header.css';
import  SearchOutlined  from '@mui/icons-material/SearchOutlined';
import  Room  from '@mui/icons-material/Room';
export function Header(){
    return (
        <div id="header-container">
                <p>Tomato</p>
                <div id='input-boxes'>
                    <div id='select-elem-container'>
                    <span><Room /></span>
                    <select id='select-tag'>
                        <option>Chennai</option>
                        <option>Madurai</option>
                        <option>Tirupur</option>
                        <option>City 2</option>
                    </select>
                    
                    </div>
                    <div id='search-input-container'>
                        <input type='text' id='search-input' placeholder='Search for Restaurant or Dish' />
                        <span id='search-glass'><SearchOutlined /> </span>
                    </div>
                </div>
                <p id='login-p'>Log in</p>
                <p id='signup-p'>Sign up</p>
        </div>
    )
}