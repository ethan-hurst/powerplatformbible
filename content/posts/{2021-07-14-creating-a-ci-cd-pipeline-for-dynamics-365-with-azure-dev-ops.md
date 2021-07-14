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
meta:
  title: Dynamics ALM CI/CD Pipeline
  noindex: false
  description: Here we go over how you can create your own Dynamics 365 CI/CD and
    start practicing some application lifecycle management
---
## Intro

So you want a pipeline eh? 

Alright, I'll walk you through my standard fitout for a Dynamics Pipeline. 

What we will be covering in this post is how we create our App Registration in Azure Active Directory, that we need in order to create the Application User.

## Create an App Registration in Azure Active Directory

Microsoft provides an applet that runs with PowerShell. 

(Note, it is best to open this up with a window of PowerShell that has administrative privileges. If you need to install any NuGet packages then this will save multiple window creation)

You'll need to navigate to [this](https://docs.microsoft.com/en-us/power-platform/alm/devops-build-tools#configure-service-connections-using-a-service-principal) MS doc and download the PowerShell Applet. When you run this, it will take you through a series of login prompts and then create you an app registration, we're able to use. See below for an example. (Please note, this App Registration is now deleted and was generated for demonstration purposes only).

![](https://ucarecdn.com/ce50bd9e-9842-4765-a2a6-64809b4fc748/)

As you can see from the above image. We now have an Application ID. Take that GUID string and navigate to your target Dynamics environment. In the Advanced Settings area, we want to select Users. When you've navigated to the Users entity, please select the System Users view and hit New

![](https://ucarecdn.com/aa012ad5-804b-42da-9c7b-5148f219d6e1/)

##### Please Note 

You may need to change your form from the User form (Default) to the Application User form as shown below. 

![](https://ucarecdn.com/8510971b-6458-453e-bd8a-2a6f45a077fe/)

##### Other Resources 

[This](https://docs.microsoft.com/en-us/power-platform/alm/devops-build-tools#configure-service-connections-using-a-service-principal) MS Doc was invaluable for me when I was creating my own pipeline and this article series.