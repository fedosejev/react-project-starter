import React from 'react';
import renderer from 'react-test-renderer';
import Application from './Application';

const mockFunction = jest.fn();
const mockApplicationState = {
  isDoingSomething: false,
};

describe('Ad', () => {
  test('SHOULD render correctly', () => {
    const tree = renderer.create(
      <Application
        application={mockApplicationState}
        doSomething={mockFunction}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
