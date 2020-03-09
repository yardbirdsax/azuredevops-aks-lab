import * as api from './api'

it('Returns the correct string',() => {
    expect(api.getResponse()).toBe('Hello World v1.0');
});