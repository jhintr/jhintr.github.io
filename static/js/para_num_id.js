/* last update: 2026-04-16 */
/* 说明：若 p 段落以 <加粗数字.> 开始，就设置此段落 id 为数字 */

const articleParagraphs = document.querySelectorAll('article p');

articleParagraphs.forEach(p => {
  const firstChild = p.firstElementChild;

  if (firstChild && (firstChild.tagName === 'B' || firstChild.tagName === 'STRONG')) {
    const match = firstChild.textContent.trim().match(/^(\d+)\./);
    if (match) {
      const idValue = match[1];
      p.id = idValue;
    }
  }
});
