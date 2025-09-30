/* last update: 2025-09-30 */

window.addEventListener('DOMContentLoaded', function () {
  const article = document.querySelector('article');
  const firstHr = article?.querySelector('hr');

  if (article && firstHr) {
    const row = document.createElement('div');
    row.className = 'row mb-5 g-2';
    firstHr.insertAdjacentElement('afterend', row);

    // Alert 1：切换 blockquote
    const col1 = document.createElement('div');
    col1.className = 'col-6';
    row.appendChild(col1);

    const toggleQuotes = document.createElement('div');
    toggleQuotes.textContent = '关闭注疏';
    toggleQuotes.className = 'alert alert-secondary text-center mb-0 py-2';
    toggleQuotes.style.cursor = 'pointer';
    col1.appendChild(toggleQuotes);

    const blockquotes = Array.from(article.querySelectorAll('blockquote li'));

    toggleQuotes.addEventListener('click', function () {
      if (blockquotes.length === 0) return;

      const currentlyHidden = blockquotes[0].style.display === 'none';
      blockquotes.forEach(el => {
        el.style.display = currentlyHidden ? '' : 'none';
      });

      toggleQuotes.textContent = currentlyHidden ? '关闭注疏' : '显示注疏';
    });

    // Alert 2：切换英文/引号开头的 <p>
    const col2 = document.createElement('div');
    col2.className = 'col-6';
    row.appendChild(col2);

    const togglePali = document.createElement('div');
    togglePali.textContent = '关闭巴利';
    togglePali.className = 'alert alert-secondary text-center mb-0 py-2';
    togglePali.style.cursor = 'pointer';
    col2.appendChild(togglePali);

    // 正则：拉丁字母 或 英文单双引号
    const regex = /^[\p{Script=Latin}'"‘“]/u;
    const paliParas = Array.from(article.querySelectorAll(':scope > p'))
      .filter(p => regex.test(p.textContent.trim()));

    togglePali.addEventListener('click', function () {
      if (paliParas.length === 0) return;

      const currentlyHidden = paliParas[0].style.display === 'none';
      paliParas.forEach(p => {
        p.style.display = currentlyHidden ? '' : 'none';
      });

      togglePali.textContent = currentlyHidden ? '关闭巴利' : '显示巴利';
    });
  }
});
