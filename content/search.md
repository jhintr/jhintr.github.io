---
title: "搜索"
subtitle: ""
date: 2023-01-29T08:14:43+08:00
lastmod: 2025-02-05
draft: false
layout: search
css:
  - /pagefind/pagefind-ui.css
---

<div class="text-end text-muted me-2 small pi">Powered by <a href="https://pagefind.app" target="_blank">pagefind</a></div>

<script src="/pagefind/pagefind-ui.js"></script>
<div id="search"></div>
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({
            element: "#search",
            force_language: "zh",
            highlightParam: "highlight",
            showSubResults: true,
            showImages: false
        });
    });
</script>
