'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
      </tr>
      <tr>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
const tdOne = document.createElement('td');
divEl.children[0].children[0].children[0].appendChild(tdOne);
divEl.children[0].children[0].children[0].children[0].innerHTML = 'a';

const tdTwo = document.createElement('td');
divEl.children[0].children[0].children[0].appendChild(tdTwo);
divEl.children[0].children[0].children[0].children[1].innerHTML = 'b';

const tdThree = document.createElement('td');
divEl.children[0].children[0].children[1].appendChild(tdThree);
divEl.children[0].children[0].children[1].children[0].innerHTML = 'c';

const tdFour = document.createElement('td');
divEl.children[0].children[0].children[1].appendChild(tdFour);
divEl.children[0].children[0].children[1].children[1].innerHTML = 'd';
// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
