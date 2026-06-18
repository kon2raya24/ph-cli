import { describe, it, expect } from 'vitest';
import { formatPHPeso } from '../currency';

describe('ph-cli', () => {
  it('should format peso correctly', () => {
    const result = formatPHPeso(1000);
    expect(result).toContain('1,000');
  });
});
