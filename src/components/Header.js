import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
// import would_you_rather from '../assets/would_you_rather.png'

class Header extends Component {
    render() {
        return (

            <Menu secondary pointing>
                <Menu.Item>
                    <Button color='teal' basic icon>
                        Home
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button color='teal' basic icon>
                        New Question
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button color='teal' basic icon>
                        Leader Board
                    </Button>
                </Menu.Item>
                <Menu.Item position='right'>
                    Welcome Tyler
                </Menu.Item>
                <Menu.Item>
                    {" "}
                    <Button color='red' basic icon>
                        Logout
                    </Button>
                </Menu.Item>
            </Menu>
            // <div>
            //     <h3 className='center'>
            //         Welcome to the Would You Rather App!
            //     </h3>
            //     <img src={would_you_rather} className='center' alt='logo' />
            // </div>
        )
    }
}

export default Header