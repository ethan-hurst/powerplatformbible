---
template: SinglePost
title: Power Automate Flow - Option Sets Formatted Values
status: Published
date: 2021-07-08
excerpt: Testing for null strings
categories:
  - category: Power Automate Flow
---
I had this scenario where I needed to test if a string contained data otherwise I wanted to replace the value. Below is my sample code

```if(empty(outputs('Get_the_related_Opportunity')?\['body/xpectedcommencementdate']),'Not Available',outputs('Get_the_related_Opportunity')?\['body/expectedcommencementdate'])```

What we're doing here is saying, if the output from Get_the_related_Opportunity is empty, replace the string with 'Not Available' otherwise use the value contained in the string