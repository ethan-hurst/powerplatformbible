---
template: SinglePost
title: Dynamics 365 CI/CD Pipeline (Part 1 Azure App Registration)
status: Draft
date: 2021-07-14
excerpt: ""
categories:
  - category: Dynamics 365 (CRM)
  - category: Azure Dev Ops
  - category: Dynamics 365 CI/CD Pipeline
---
## Intro

So you want a pipeline eh? 

Alright, I'll walk you through my standard fitout for a Dynamics Pipeline. 

What we will be covering in this post is how we create our App Registration in Azure Active Directory, that we need in order to create the Application User.



## Create an App Registration in Azure Active Directory

Microsoft provides an applet that runs with PowerShell. 

(Note, it is best to open this up with a window of PowerShell that has administrative privileges. If you need to install any NuGet packages then this will save multiple window creation)