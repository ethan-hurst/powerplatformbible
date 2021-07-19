---
template: SinglePost
title: Power Automate Flow - Option Sets Formatted Values
slug: 2021-07-07-power-automate-flow-option-sets-formatted-values
status: Published
date: 2021-07-08
featuredImage: https://ucarecdn.com/051dfab8-7ce0-47b5-9c18-79aa955c75ed/
excerpt: Testing for null strings
categories:
  - category: Power Automate Flow
  - category: Azure Dev Ops
  - category: Dynamics 365 CI/CD Pipeline
meta:
  title: Working with option set labels Microsoft Power Automate Flow Dataverse
---
I had this scenario where I needed to access the label of option sets. Previously in the old CDS connector, we were able to simply append something like this `_label` to our field and voila! With the newest flavour of Dataverse connectors, we now need to change our approach.

We have this flow below. 

![Power Automate Flow](https://ucarecdn.com/79910bb6-8d74-4011-96d9-35b3920e891a/)

In order to best get at those option set labels, I ended up using this

```outputs('Get_the_related_Opportunity')?['body/expectedcommencementdate@OData.Community.Display.V1.FormattedValue```

Thats basically it. You may want to include some null checks too, something like this will work. 

```if(empty(outputs('Get_the_related_Opportunity')?\['body/expectedcommencementdate']),'Not Available',outputs('Get_the_related_Opportunity')?\['body/expectedcommencementdate'])```

What we're doing here is saying, if the output from Get_the_related_Opportunity is empty, replace the string with 'Not Available' otherwise use the value contained in the string. You of course could replace the 'Not Available' string with anything you like really. 