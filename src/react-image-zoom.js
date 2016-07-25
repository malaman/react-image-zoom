import React, {Component, PropTypes} from 'react';
import ImageZoom from 'js-image-zoom';

class ReactImageZoom extends Component {
    static propTypes = {
        img: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired
    };

    componentDidMount() {
        this.imageZoom = new ImageZoom(this.refs.container, this.props)
    }

    componentWillUnmount() {
        this.imageZoom.kill();
        this.imageZoom = void 0;
    }

    render() {
        return <div ref='container' />
    }
}

export default ReactImageZoom;
