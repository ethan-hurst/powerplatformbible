---
template: SinglePost
title: Dynamics 365 CI/CD Pipeline (Part 2 Azure Dev Ops Configuration)
status: Draft
date: 29-07-2021
featuredImage: https://ucarecdn.com/250635f8-5171-4749-8206-5e108a81f765/
categories:
  - category: Dynamics 365 CI/CD Pipeline
  - category: Azure Dev Ops
  - category: Dynamics 365 (CRM)
---
## Intro

We left the last section having registered our Application User in Dynamics. Now we're ready to plug that into Azure Dev Ops as our means to connect and deploy to that environment.

## The Implementation

Now that we have our application user, we want to copy this value to our clipboard

![](https://ucarecdn.com/a839f880-95a4-4cbf-aeda-3d3c96afe1dd/)

Heading back to our Azure Dev Ops project, we can begin building out our pipeline.