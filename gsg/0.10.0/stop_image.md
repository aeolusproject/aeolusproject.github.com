---
title: GSG 0.10.0 - Stop a running instance
layout: gsgpage
title: "GSG 0.10.0 - Stop a running instance"
summary: "GSG 0.10.0 - Stop a running instance"
---
{::options parse_block_html="true" /}

Stop a running Instance
=======================

<div class="page-listing">
### Getting Started Guide

1.  [Basic Glossary](basic_glossary.html "Basic Glossary")
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
8.  Stop a running Instance
9.  [Cleaning up](cleaning_up.html "Cleaning up")
</div>

<div class="section-grouping">
## 1. Stopping the Instance

Shutting down a running instance is very simple.

[![Shutting down the instance - click to view at full size in a new
window](images/thumbnails/aeolus_stop_instance_button_thumb.png "Shutting down the instance - click to view at full size in a new window")](images/aeolus_stop_instance_button.png)

1.  In the Aeolus web interface, click the **MONITOR** tab and select
    the grid view by clicking the grid button on the right side of the
    page.
2.  Click on "Instances" to view your running instances. Tick the
    checkbox next to the instance name in the instance list.
3.  Click the "Stop selected instances" button. Within a minute or two
    the instance status should change to say *stopped*:

[![Instance has stopped - click to view at full size in a new
window](images/thumbnails/aeolus_instance_stopped_thumb.png "Instance has stopped - click to view at full size in a new window")](images/aeolus_instance_stopped.png)

If you are using Amazon EC2, follow the next step to check for instances
running in EC2.
</div>
<br />

<div class="section-grouping">
## 2. Check for instances left running in EC2

When using a development version of Aeolus, always remember to check the AWS
Management Console for instances left running in EC2.

It's rare for this to happen, but better safe than sorry:

![Check AWS for EC2 instances left running](images/ec2_instance_clean_up.png "Check AWS for EC2 instances left running")
</div>

<a class='button' href='cleaning_up.html' title='Cleaning up'>
  Cleaning Up <img alt='→' src='../../images/button-right.png' />
</a>