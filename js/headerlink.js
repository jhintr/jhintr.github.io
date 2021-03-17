const headings = document.querySelectorAll('h4, h5');
headings.forEach(function(h) {
    const headerlink = `<span class="headerlink" title="permalink to this headline">¶</span>`;
    h.innerHTML = `<a href="#${h.id}">${h.innerHTML} ${headerlink}</a>`;
});