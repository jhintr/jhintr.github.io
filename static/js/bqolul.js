/* last update: 2025-07-28 */

window.addEventListener('DOMContentLoaded', function () {
  const article = document.querySelector('article');
  const firstHr = article.querySelector('hr');

  if (article && firstHr) {
    // 创建按钮
    const button = document.createElement('div');
    button.textContent = '隐藏义注';
    button.classList = 'alert alert-secondary text-center';
    button.style = 'cursor: pointer';
    button.id = 'toggle-quotes';

    // 插入到第一个 <hr> 之后
    firstHr.insertAdjacentElement('afterend', button);

    // 添加点击事件
    button.addEventListener('click', function () {
      const blockquotes = Array.from(article.querySelectorAll('blockquote ol,blockquote ul'));

      if (blockquotes.length === 0) return;

      const currentlyHidden = blockquotes[0].style.display === 'none';

      blockquotes.forEach(el => {
        el.style.display = currentlyHidden ? '' : 'none';
      });

      // 根据状态更新按钮文字
      button.textContent = currentlyHidden ? '隐藏义注' : '显示义注';
    });
  }
});
