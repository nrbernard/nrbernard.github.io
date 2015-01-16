---
layout: default
title-tag: Today I Learned - Nick Bernard
description: A diary of code-related things I learn each day.
---
##Today I Learned

###Monday
I was calling an AJAX request with Backbone. Even though I was getting a 200 status back, the .done event would never fire--only .fail. [This article](http://forum.jquery.com/topic/jquery-calls-error-callback-on-successful-ajax-request-status-200) enlightened me to the fact that AJAX expects JSON back by default. The error was from the parser, as it expected JSON but I was giving it a string from my Rails controller. I just added `dataType: "text"` and it works like a charm now.
