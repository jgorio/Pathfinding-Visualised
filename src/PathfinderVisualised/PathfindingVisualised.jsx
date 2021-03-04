import React, { Component} from 'react';
import Node from '.Node/Node';

import './PathfindingVisualiser.css';

export default class PathfindingVisualiser extends component {
    constructor(props) { 
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Foo
                <Node></Node>
            </div>
        );
    }
}