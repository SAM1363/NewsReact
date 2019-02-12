import React, {Component} from 'react';
import Titles from './Titles';
import axios from 'axios';


class Sources extends Component{
    constructor(props){
        super(props);
        this.state = {listofSources: [], sourceId: [] };
        this.get_sources();
    }
    console.log(this.state.listofSources);
    }
    render() {
        return (
            <div>hello</div>
        )
    }
}

export default Sources;