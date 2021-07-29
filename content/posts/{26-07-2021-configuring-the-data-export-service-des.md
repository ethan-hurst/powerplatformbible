---
template: SinglePost
title: Configuring The Data Export Service (Part 1 - Azure Configuration)
slug: des-config-pt1
status: Published
date: 2021-07-29
featuredImage: https://ucarecdn.com/6f3b825f-57f0-48cf-aba8-d975daf7ff88/
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

You'll need a lowercase name for it, and also an administrator username and password. Use your organisations password management strategy to maintain this. 

![](https://ucarecdn.com/e3db3aed-23e2-41fc-aecc-c1e58ae2d20d/)

When that has completed its provisioning. Something you need to do after the fact is navigate to the resource, and click on the firewall settings 

![](https://ucarecdn.com/29cb48bd-9142-4bae-9887-66870b65e94e/)

and ensure that this switch is set to yes. Otherwise our database will not be able to get access to this server. 

![](https://ucarecdn.com/b3011ee1-c262-4e1a-b055-140fc64b719d/)

#### Create the Azure SQL Database

Feel free to configure your database how you like. I've had really good experience with this configuration. It costs approximately $4/month too. 

![](https://ucarecdn.com/5a80ec5c-a959-42b4-b766-f96d5be82259/)

#### Create the Azure Key Vault

This part is crucial. It will be managing the connection string to the SQL Server for us, which the Data Export Service will use to securely get that plain-text string. 

Your key vault settings should look something like this. 

![](https://ucarecdn.com/3b9d724d-1b62-46a0-9f5c-b0578ad5efdb/)

While that is provisioning, lets go get our connection string from our Azure SQL Database. 

![](https://ucarecdn.com/73c98423-3c45-4115-b100-979cdf4d1854/)

And copy this string

![](https://ucarecdn.com/6e53dcfa-822c-4859-bf66-eca08edb3adf/)

Now you're going to want to copy that out to a notepad and paste it. This string contains a variable that you will need to change. 

![](https://ucarecdn.com/17aca57d-bc14-4987-a0fd-a0bb27da0ced/)

So go ahead and replace the {your_password} with the Azure SQL Server Password that you set when you created the Azure SQL **Server.**



Now that we have a valid connection string, we're going to create our secret. Navigate back to the key vault that we created and navigate to the Secrets area

![](https://ucarecdn.com/030ce960-9c63-4871-bfc1-5d97bf239cd6/)

and click on the Generate/Import button

![](https://ucarecdn.com/0ada7271-298a-4038-b4a8-945f5d5aa1b8/)

Paste in your string into the value field and give your secret a name then hit save. When that has provisioned, navigate into the secret. You'll need to now tag the secret with your orgId : tenantId. 

We can find out our orgId by navigating to your Dynamics Environment. Navigating to **Advanced Settings** -> **Customisation** -> **Developer Resources** 

and you want to copy this field

![](https://ucarecdn.com/cbcd4acb-c64c-4194-9b83-9e9b98e4f5c0/)

Note that string down somewhere. You will need it. To get your tenantId, back in the Azure Portal. Navigate to Azure Active Directory then copy this value 

![](https://ucarecdn.com/8a583e08-33f4-447f-ae5b-785790be074d/)

Head back to the secret in our Azure Key Vault, we want to click on Tags and input your orgId and tenantId like this 

![](https://ucarecdn.com/0be00c02-bd6a-46a1-a8ae-d2a2a253c693/)

## Conclusion

Alright that was a lot of configuration. Lets take a look at our run sheet and see where we're at. 

* Create Azure Resource Group ✅
* Create Azure SQL Server ✅

  * Ensure that other resources can access this ✅
* Create Azure SQL DB ✅
* Create Key Vault ✅
* Tag the secret OrgID : TenantID ✅
* Add the DES App from App Source 
* Configure the Entities you want to Migrate
* Configure the Relationships you want to Migrate



This one has already gotten longer than I intended. So we're going to cover off the DES Application and configuration in Part two!