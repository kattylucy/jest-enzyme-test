import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';

import { findByTestAttribute } from '../../../utils/index'; 

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test desc'
            };
            wrapper = setUp(props)
        });

        it('Should render without errors', () => {
            const component = findByTestAttribute(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a h1', () => {
            const component = findByTestAttribute(wrapper, 'header');
            expect(component.length).toBe(1);
        });

        it('Should render without errors', () => {
            const component = findByTestAttribute(wrapper, 'desc');
            expect(component.length).toBe(1);
        });
    });

    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp()
        });

        it('Should NOT render', () => {
            const component = findByTestAttribute(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });

    });
});