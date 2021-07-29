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