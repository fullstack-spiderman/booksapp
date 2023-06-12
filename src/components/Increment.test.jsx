import { describe, it, expect } from 'vitest';
import Increment from './Increment';

describe('something truthy and falsy', () =>
{
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});