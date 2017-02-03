import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReactImageZoom from '../src/react-image-zoom';

describe('ReactImageZoom', function () {

    beforeEach(() => {

    });

    it('Should render default component ', function () {
        const props = {width: 400, height: 250, zoomWidth: 500, img: "1.jpg", offset: {vertical: 0, horizontal: 10}};
        const component = renderer.create(<ReactImageZoom {...props} />);
        const instance = component.getInstance();
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        expect(instance.refs.container).toEqual(null);
        expect(instance.imageZoom).toBeDefined();
    });
});
