---
template: SinglePost
title: Configuring The Data Export Service (DES)
slug: des-config
status: Draft
date: 26-07-2021
categories:
  - category: Microsoft Azure
  - category: Dynamics 365 (CRM)
---
## Intro

What we aim to cover off in this article is how you can configure the Data Export Service (DES) to copy data over to an Azure SQL database. A run sheet of what we will be doing is below.

* Create Azure Resource Group
* Create Azure SQL Server 

  * Ensure that other resources can access this 
* Create Azure SQL DB
* Create Key Vault
* Tag the secret OrgID : TenantID 
* Add the DES App from App Source 
* Configure the Entities you want to Migrate
* Configure the Relationships you want to Migrate

## Azure Configuration

There are multiple ways you can do this. For clarity's sake, I've gone and created a resource group to contain all of the resources related to the DES. 

#### Create a Resource Group

What is a resource group you might ask? Think of it as a container that elegantly *groups* your resources together. It simply provides a nice bit of separation for all of your resources in Azure.

Using a subscription that exists (If not you will need to create one). Go ahead and name your Resource Group using your organisations naming convention (snake case, camel case etc), and also set the region you'd like to deploy your resource group to. 

![](https://ucarecdn.com/4d28a116-0f91-4eba-866b-75f52a1e5a1b/)

Lets move on.

#### Create an SQL Server

Now that we have a container to group everything that we're going to create, lets spin up an SQL Server to host our database.