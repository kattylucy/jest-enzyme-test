import React from 'react';
import postReducer from './reducer';
import { types } from '../../actions/type';
import { GET_POSTS } from '../' 


///testing reducer: 2 scenarios (default state and if the action does not match)

describe('Post reducer', () => {
    it('Should return default state', () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return array of posts', () => {
        const posts = [ {title:'Test 1'}, {title:'Test 2'}, {title:'Test 3'} ];
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    })
})



