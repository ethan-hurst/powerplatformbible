---
template: SinglePost
title: Creating Type Safe Entity JavaScript Files
slug: dyn-pipeline-pt2
status: Draft
date: 15-07-2021
categories:
  - category: Dynamics 365 CI/CD Pipeline
  - category: Azure Dev Ops
  - category: Dynamics 365 (CRM)
---
## Intro

First up, a tip of the hat is required; this post wouldn't be possible without Scott Durow's massive knowledge! If you don't follow him on GitHub or LinkedIn, I cannot highly recommend that you do, as we're going to be leveraging what he has put together here. At the bottom of this post I will leave some references to his work. 

You might be saying to yourself? Why would I even care? I said it myself when I was starting out. Let me go over just a few of the benefits to type safe programming.

1. You know exactly what type you're working with
2. You are **going** to save time developing, by avoiding type errors

With all that said, lets dig into how!

## High Level Design

This is effectively how it works 

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBKERldmVsb3AgVHlwZVNjcmlwdCBQZXIgRW50aXR5KSAtLT58QnVuZGxlICYgUHVibGlzaCB1c2luZyBTUEtMfCBCKFNpbmdsZSBXZWIgUmVzb3VyY2UgVXBsb2FkZWQpXG4gICAgQiAtLT4gQyhNYXAgRW50aXRpZXMgdG8gdGhlaXIgUmVzcGVjdGl2ZSBDbGFzcyB3aXRoaW4gRmlsZSlcbiAgICBDIC0tPnxBY2NvdW50IEVudGl0eXwgRFtCaW5kIEZ1bmN0aW9uc11cbiAgICBEIC0tPkUoT25TYXZlKVxuICAgIEQgLS0-RihPbkxvYWQpXG4gICAgQyAtLT58Q29udGFjdCBFbnRpdHl8IEdbQmluZCBGdW5jdGlvbnNdXG4gICAgRyAtLT5IKE9uTG9hZClcbiAgICBHIC0tPkkoT25TYXZlKSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/edit##eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBKERldmVsb3AgVHlwZVNjcmlwdCBQZXIgRW50aXR5KSAtLT58QnVuZGwgJiBQdWJsaXNoIHVzaW5nIFNQS0x8IEIoU2luZ2xlIFdlYiBSZXNvdXJjZSBVcGxvYWRlZClcbiAgICBCIC0tPiBDKE1hcCBFbnRpdGllcyB0byB0aGVpciBSZXNwZWN0aXZlIENsYXNzIHdpdGhpbiBGaWxlKVxuICAgIEMgLS0-fEFjY291bnQgRW50aXR5fCBEW0JpbmQgRnVuY3Rpb25zXVxuICAgIEQgLS0-RShPblNhdmUpXG4gICAgRCAtLT5GKE9uTG9hZClcbiAgICBDIC0tPnxDb250YWN0IEVudGl0eXwgR1tCaW5kIEZ1bmN0aW9uc11cbiAgICBHIC0tPkgoT25Mb2FkKVxuICAgIEcgLS0-SShPblNhdmUpIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

## My Implementation

For a start I'll show you how I've got this built in Visual Studio. 

![](https://ucarecdn.com/08ab0bc2-6b50-4d7b-9780-b6c7fdd5b70a/)

So as you can see we have two projects within our solution. One using the spkl task runner. The other doing our Entity script build.

This is how I'm playing with testing this out. The obvious caveat is that with a bundled files, that makes them very difficult to debug. Scott has figured out a neat little way to get around this using a program called Fiddler. 

I'll refer you to Scott's tutorials for how you can configure Fiddler ;) 

## TBC

* benefits
* how to register these event handlers per entity
* fiddler config

## Reference Material

* Scott's repo where he initially teaches [this](<* https://github.com/scottdurow/building-power-apps-js-webresources>)
* Scott's [video course](<* https://learn.develop1.net/courses/building-javascript-web-resources-using-typescript>) on putting this all together