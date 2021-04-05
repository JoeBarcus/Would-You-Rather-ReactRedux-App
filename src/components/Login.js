import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Image } from 'semantic-ui-react'

class Login extends Component {



    render() {
        console.log(this.props)
        return (

            <div className='login-info'>
                <Dropdown placeholder='Select User'
                    fluid
                    selection
                    options={this.props.userIds.map((id) => (
                        <li key={id.id}>
                            <Image src={id.avatarURL} avatar />
                            {id.name}
                        </li>
                    ))}
                    onClick={(e, data) => { console.log(e, data) }}
                />
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        userIds: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)