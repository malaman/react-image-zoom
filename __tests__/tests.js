import React from 'react';
import renderer from 'react-test-renderer';
import ReactImageZoom from '../src/react-image-zoom';
import ImageZoom from 'js-image-zoom';

describe('ReactImageZoom', function () {
    let component;

    beforeEach(() => {

    });

    it('Should render default component ', function () {
        const props = {width: 400, height: 250, zoomWidth: 500, img: "1.jpg", offset: {vertical: 0, horizontal: 10}};
        const component = renderer.create(<ReactImageZoom {...props} />);
        const instance = component.getInstance();
        instance.container =  document.createElement('div');
        instance.imageZoom = new ImageZoom(instance.container, props);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        expect(instance.container).toEqual(jasmine.any(HTMLDivElement));
        expect(instance.imageZoom.kill).toEqual(jasmine.any(Function));
        expect(instance.imageZoom.setup).toEqual(jasmine.any(Function));
    });

    it('setup and kill method should be callable ', function () {
        const props = {width: 400, height: 250, zoomWidth: 500, img: "1.jpg", offset: {vertical: 0, horizontal: 10}};
        const component = renderer.create(<ReactImageZoom {...props} />);
        const instance = component.getInstance();
        instance.container =  document.createElement('div');
        instance.imageZoom = new ImageZoom(instance.container, props);
        instance.setup();
        instance.kill();
        expect(instance.imageZoom.kill).toEqual(jasmine.any(Function));
        expect(instance.imageZoom.setup).toEqual(jasmine.any(Function));
    });

});
