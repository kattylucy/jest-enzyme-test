import React from 'react';
import postReducer from './reducer';
import { types } from '../../actions/type';


// describe('Posts Reducer', () => {
//     it('should return default state', () => {
//        const newState =  postReducer(undefined, {});
//        expect(newState).toEqual([]);
//     });
// });










///testing reducer: 2 scenarios (default state and if the action does not match)

//// failing test below 


describe('Posts Reducer', () => {
    it('should return default state', () => {
       const newState =  postReducer(undefined, {});
       expect(newState).toEqual([]);
    });
});

describe('Posts Reducer', () => {
    it('should return new state if receiving type', () => {
       const posts =  [{ title: 'test 1 '}, { title: 'test 1 '}, { title: 'test 1 '}];
       const newState = postReducer(undefined, {
           type: types.GET_POSTS,
           payload: posts
       })
       expect(newState).toEqual(posts);
    });
});
