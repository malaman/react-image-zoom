import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from '../src/react-image-zoom';

class ImageZoomSettings extends Component {
    render() {
        return (
            <div className='image-zoom-settings'>
            </div>
        );
    }
}




class ReactImageZoomExample extends Component {
    render() {
        const props = {width: 400, height: 250, zoomWidth: 500, img: "1.jpg", offset: {vertical: 0, horizontal: 10}};
        return (
            <div>
                <h2>{`props: ${JSON.stringify(props)}`}</h2>
                <ReactImageZoom {...props} />
            </div>
        )
    }
}

ReactDOM.render( React.createElement(ReactImageZoomExample), document.getElementById('react-app'));
