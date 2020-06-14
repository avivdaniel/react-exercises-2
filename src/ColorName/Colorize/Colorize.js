import React, { Component } from 'react';

function Colorize(props) {
    return (
        <div>
            <p style={{ color: props.color }}>
                {props.color}
            </p>

        </div>
    );
}

export default Colorize;