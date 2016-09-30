import React, {PropTypes} from 'react';
import ImageZoom from 'js-image-zoom';

class ReactImageZoom extends React.Component {
    static propTypes = {
        img: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        zoomWidth: PropTypes.number,
        scale: PropTypes.number,
        offset: PropTypes.object,
    };

    componentDidMount() {
        this.imageZoom = new ImageZoom(this.refs.container, this.props);
    }

    componentWillUnmount() {
        this.imageZoom.kill();
        this.imageZoom = void 0;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.img !== nextProps.img) {
            this.imageZoom.kill();
            this.imageZoom = new ImageZoom(this.refs.container, nextProps);
        }
    }


    render() {
        return <div ref='container' />;
    }
}

export default ReactImageZoom;
