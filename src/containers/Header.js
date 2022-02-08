import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Header = () => {
    const [activeItem, setActiveItem] = useState('home');
    return (
        <div>
            <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          />
          </Link>
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={() => setActiveItem('messages')}
          />
          <Link to="/cart">
            <Menu.Item
            name='Cart'
            active={activeItem === 'friends'}
            onClick={() => setActiveItem('friends')}
            />
          </Link>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={() => setActiveItem('logout')}
            />
          </Menu.Menu>
        </Menu>
            
        </div>
    )
}

export default Header
