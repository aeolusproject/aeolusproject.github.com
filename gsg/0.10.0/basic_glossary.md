---
title: GSG 0.10.0 - Basic Glossary
layout: gsgpage
title: "GSG 0.10.0 - Basic Glossary"
summary: "GSG 0.10.0 - Basic Glossary"
---
{::options parse_block_html="true" /}

Basic Glossary for Aeolus 0.10.0
===============================

Before we get started with the initial configuration, here are some
terms and definitions that will be useful to know.

<div class="page-listing">
### Getting Started Guide

1.  Basic Glossary
2.  [Configuring Aeolus](configuring_aeolus.html "Configuring Aeolus")
3.  [First login](first_login.html "First login")
4.  [Configure your Cloud
    Providers](configure_providers.html "Configure your Cloud Providers")
5.  [Configure the Aeolus Command Line Interface
    tool](configure_cli.html "Configure the Aeolus Command Line Interface tool")
6.  [Create a Fedora 16
    Template](make_template.html "Create a Fedora 16 Template")
7.  [Start an Instance of the
    Image](start_image.html "Start an Instance of the Image")
8.  [Stop a running Instance](stop_image.html "Stop a running Instance")
9.  [Cleaning up](cleaning_up.html "Cleaning up")
</div>

<div class="section-grouping">
## 1. Provider Type and Provider

Cloud provider types include Amazon EC2, RHEV-M, Rackspace, etc. A
provider is simply an instance of a provider type - for example, an EC2
region such as us-east-1. Users may have one or multiple accounts
associated with a provider.

This guide will configure Aeolus for EC2, as well as a "Mock" provider
for those without an available EC2 account. The mock provider is simply
a fake provider used for testing.
</div>
<br />

<div class="section-grouping">
## 2. Instance

An instance is a single virtual machine running on a provider.
</div>
<br />

<div class="section-grouping">
## 3. Image

A Conductor image contains provider-independent metadata that Aeolus can
use to generate disk images on supported providers.

This guide will create an image for Fedora 16.
</div>
<br />

<div class="section-grouping">
## 4. Deployable and Deployment

A deployable references one or more images, along with the appropriate
hardware profiles for those images.

A deployable is lauched as a deployment. A deployment consists of one or
more instances controlled as a group, such as a database server, an
application server, and multiple front-end web servers.
</div>
<br />

<div class="section-grouping">
## 5. Pool

A pool is a grouping of instances and deployables. Aeolus provides tools
for managing pools, allowing the user to easily manage functions such as
administrative rights, permissions, and quotas.
</div>
<br />

<div class="section-grouping">
## 6. Catalog

A catalog contains one or more deployables. Each catalog is associated
with a single pool.
</div>
<br />

<a class='button' href='configuring_aeolus.html' title='Configuring Aeolus'>
  Configuring Aeolus <img alt='→' src='../../images/button-right.png' />
</a>