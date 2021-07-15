---
template: SinglePost
title: My Take On Writing Entity JavaScript Forms
status: Published
date: 2021-07-08
featuredImage: https://ucarecdn.com/bc48a150-0e5a-465c-94eb-d9f95f848616/
excerpt: Entity JavaScript. Love it or hate it, you're going to come across this
  in the power platform. So get cosy.
categories:
  - category: Dynamics 365 (CRM)
---
This is a subject that could garner a lot of controversy, as with all things, there are different opinions for what constitutes best practice. So I'm going to preface this one by saying that this is what I've found to work the best for me in my experience consulting. 

Entity JavaScript. Love it or hate it, you're going to come across this in the power platform. So get cosy. 

If the entity doesn't have an existing JavaScript file. This is how I'll go about creating the file.

![](https://ucarecdn.com/e6bf766a-523d-497a-9555-ed74dfd7a3dc/)

From there. Its as simple as registering those two functions `onSave` & `onLoad` in our form event handlers.

![](https://ucarecdn.com/6a461ed4-3d45-42e2-bfab-e7c861a08728/)

Obviously repeating this for our `onSave` function too. 

My reasoning for this approach is as follows. 

1. You're only registering two functions on the form itself. Eliminating the need to look through each field for an `onSave`, `onLoad` or `onChange` binding.
2. We're hoisting up our executionContext and formContext into our global variables for use in debugging if you don't have access to those contexts yet. Not always needed, but handy to have if you do (If you're unfamiliar with variable hoisting [this](https://www.w3schools.com/js/js_hoisting.asp) link might help you).