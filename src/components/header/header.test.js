import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttribute } from '../../../utils/index';

///two ways to create the test
/// you can use test() or it()

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};


describe('Header Component', () => {

    ///this will run before every single test
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttribute(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    });

    it('Should render a logo inside a p', () => {
        const wrapper = component.find('.logo');
        expect(wrapper.length).toBe(1)
    });
});