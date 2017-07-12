import React from 'react';
import PropTypes from 'prop-types';
import ImageZoom from 'js-image-zoom';

class ReactImageZoom extends React.Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        img: PropTypes.string,
        height: PropTypes.number,
        zoomWidth: PropTypes.number,
        scale: PropTypes.number,
        offset: PropTypes.object,
        zoomStyle: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.container = undefined;
        this.getRef = this.getRef.bind(this);
    }

    componentDidMount() {
        this.imageZoom = new ImageZoom(this.container, this.props);
    }

    componentWillUnmount() {
        this.imageZoom.kill();
        this.imageZoom = void 0;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.kill();
            this.imageZoom = new ImageZoom(this.container, nextProps);
        }
    }

    setup() {
        this.imageZoom.setup();
    }

    kill() {
        this.imageZoom.kill();
    }

    getRef(ref) {
        this.container = ref;
    }

    render() {
        return <div ref={this.getRef} />;
    }
}

export default ReactImageZoom;
