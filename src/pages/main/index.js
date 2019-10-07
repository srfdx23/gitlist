import React, { Component } from 'react';
import api from '../../services/api';



export default class Main extends Component {
    state = {
        users: [],


    }
    componentDidMount(){
        this.loadRepo();
    }

    loadRepo = async () => {
        const response = await api.get('/users');
        this.setState({ users: response.data});
    }

    render(){
        return (
            <div className="users-list">
                 <ul className="collection">
                        {this.state.users.map(users => (
                             <li className="collection-item avatar">
                                  <img src={users.avatar_url} alt="" class="circle"></img>
                                  <span class="title">{users.login}</span>
                                  <a href="{users.url}" className="secondary-content">
                                      <i className="material-icons">grade</i>
                                  </a>
                             </li>
                        ))};
                 </ul>
            </div>
        )
    }
};


