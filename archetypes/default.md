---
title: "{{ replace .Name "-" " " | title }}"
subtitle: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: false
brewing: true
weight: {{ replace .Name "-" 0 | title }}
---

