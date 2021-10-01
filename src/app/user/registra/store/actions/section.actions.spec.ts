import * as fromSection from './section.actions';

describe('ySections', () => {
  it('should return an action', () => {
    expect(fromSection.ySections().type).toBe('[Section] Y Sections');
  });
});
