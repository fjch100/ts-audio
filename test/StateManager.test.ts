import StateManager from '../src/StateManager';

describe('StateManager', () => {
  test('get and set', () => {
    const state = StateManager();

    state.set('isValid', true);
    expect(state.get('isValid')).toBeTruthy();

    state.set('isValid', false);
    expect(state.get('isValid')).toBeFalsy();
  });
});
