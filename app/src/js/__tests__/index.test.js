import { getRandomColor, applyRandomTextColor } from '../index';

describe('Color Functions', () => {
  test('getRandomColor generates a valid hex color', () => {
    const color = getRandomColor();
    expect(color).toMatch(/^#[0-9A-F]{6}$/i);
  });

  test('applyRandomTextColor applies color to elements', () => {
    document.body.innerHTML = '<p id="test">Test</p>';
    applyRandomTextColor();
    const element = document.getElementById('test');
    expect(element.style.color).toMatch(/^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/);
  });

  test('window.onload applies random text color', () => {
    document.body.innerHTML = '<p id="test">Test</p>';
    
    window.onload();

    const element = document.getElementById('test');
    expect(element.style.color).toMatch(/^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/);
  });
});
