---
template: SinglePost
title: Creating a CI/CD Pipeline for Dynamics 365 with Azure Dev Ops (Part 1)
status: Draft
date: 2021-07-14
excerpt: TBC
categories:
  - category: Dynamics 365 (CRM)
  - category: Azure Dev Ops
---
So you want a pipeline eh? 

Alright, I'll walk you through my standard fitout for a Dynamics Pipeline. 

What you're going to need before we start permissions wise:

1. Access to manage your Tenants Azure Active Directory
2. System Admin in your target Dataverse Environment
3. The ability to create a Project in Azure Dev Ops or access to an already created project
4. Some experience with Git will be very useful

## Create an App Registration in Azure Active Directory

Navigate to https://portal.azure.com and select Azure Active Directory as shown below

![Azure Home Screen](https://ucarecdn.com/8eed4f41-473a-4f05-87f9-f74a50cd1443/ "Azure Home Screen")

That will have opened up a screen where we can navigate in two ways to the App Registrations Page

Either of these will work. 

![](https://ucarecdn.com/6f556be4-33b3-4901-a1e2-e015ebd17696/)

Now that we have successfully navigated