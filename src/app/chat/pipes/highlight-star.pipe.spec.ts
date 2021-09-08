import { HighlightStarPipe } from './highlight-star.pipe';

describe('HighlightStarPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlightStarPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return #true if the #value is greater or equal to the given #index', () => {
    const pipe = new HighlightStarPipe();
    expect(pipe.transform(3, '3')).toBe(true);
    expect(pipe.transform(3, '4')).toBe(true);
  });

  it('should return #false if the #value is less than the given #index', () => {
    const pipe = new HighlightStarPipe();
    expect(pipe.transform(3, '2')).toBe(false);
  });
});
