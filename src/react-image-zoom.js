import React from 'react';
import PropTypes from 'prop-types';
import ImageZoom from 'js-image-zoom';

class ReactImageZoom extends React.Component {
  constructor(props) {
    super(props);
    this.container = undefined;
    this.getRef = this.getRef.bind(this);
  }

  componentDidMount() {
    this.rerenderImageZoom(this.props);
  }

  UNSAFE_componentWillUnmount() {
    this.imageZoom.kill();
    this.imageZoom = void 0;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.kill();
      this.rerenderImageZoom(nextProps);
    }
  }

  rerenderImageZoom(props) {
    this.imageZoom = new ImageZoom(this.container, JSON.parse(JSON.stringify(props)));
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
    return <div ref={this.getRef}/>;
  }
}

ReactImageZoom.propTypes = {
  width: PropTypes.number,
  img: PropTypes.string,
  height: PropTypes.number,
  zoomWidth: PropTypes.number,
  scale: PropTypes.number,
  offset: PropTypes.object,
  zoomStyle: PropTypes.string,
  zoomLensStyle: PropTypes.string,
  zoomPosition: PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'original'])
};

export default ReactImageZoom;
