/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution(pageNumber, itemsPerPage, pageData) {
  if (!Array.isArray(pageData)) {
    throw `Invalid pageData argument, pageData should be an array`;
  }
  const pageStartAbs = Math.abs(pageNumber);
  const pageStart = pageStartAbs === 0 ? 1 : pageStartAbs;
  const itemsPage = parseInt(itemsPerPage);
  const start = parseInt(pageStart - 1) * itemsPage;
  const end = start + itemsPage;

  const items = pageData.slice(start, end);
  if (!items.length) {
    return null;
  }
  return items;
}

const data = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

module.exports = { solution, data };
