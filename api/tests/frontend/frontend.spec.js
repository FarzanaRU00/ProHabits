/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../../clients/index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })
    test('it has a header title', () => {
        let h1 = document.querySelector('h1');
        expect(h1.textContent).toContain('ProHabits');
    })
});

// describe('index.html' () => {
//     beforeEach(() => {
//         document.documentElement.innerHTML = html.toString();
//     })
//     test('it has a submit button' () => {
//         let button = 
//     })
// })