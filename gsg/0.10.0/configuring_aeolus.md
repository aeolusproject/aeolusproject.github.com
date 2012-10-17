---
title: GSG 0.10.0 - Configuring Aeolus
layout: gsgpage
title: "GSG 0.10.0 - Configuring Aeolus"
summary: "GSG 0.10.0 - Configuring Aeolus"
---
{::options parse_block_html="true" /}

Configuring Aeolus 0.10.0
=========================

These next pages get you up and running with Aeolus using our **Getting
Started Guide**.

They take you through initial configuration, connecting with Amazon EC2
or the mock provider, then doing very simple instance management with
it.

<div class="page-listing">
### Getting Started Guide

1.  [Basic Glossary](basic_glossary.html "Basic Glossary")
2.  Configuring Aeolus
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
## Initial configuration

Most configuration for Aeolus is done through its web interface.

To turn on this web interface, we take a few simple steps:

1.  [Run aeolus-configure](#aeolus-configure)
2.  [Update the firewall](#update-firewall) (if it's on)
</div>
<br />

<div class="section-grouping">
### 1. Run aeolus-configure

The very first step is to run the *aeolus-configure* command **with**
super-user privileges (via sudo).

    $ sudo /usr/sbin/aeolus-configure -p ec2,mock

This performs an initial configuration of Aeolus with default settings,
along with pre-configured provider information for Amazon EC2 and the
mock provider.

It is fully automatic, and doesn't require any input. It will take a
while (can be several minutes), generating a fair amount of text.

As part of this automatic configuration each Aeolus component is
initialized, a PostgreSQL database is created, and the web interface is
activated.

<div class="note">
**NOTE -** Aeolus-configure can be passed other options, which you may
want to investigate at your leisure. For this introduction though,
they're not really needed.
</div>
</div>
<br />

<div class="section-grouping">
### 2. Update the firewall

Because Aeolus uses an encrypted web interface, the server running it
must accept connections on TCP port 443.

If a firewall is running on the Aeolus server, it needs updating to
allow those connections.

For the standard iptables firewall on Fedora or RHEL, use this command:

    $ sudo lokkit -s https

<div class="note">
**USEFUL NOTE -** You can additionally open TCP port 80, for users to
attempt connecting via standard http.

Aeolus automatically redirects them to the secure port.
</div>
</div>
<br />

<a class='button' href='first_login.html' title='First Login'>
  First Login <img alt='→' src='../../images/button-right.png' />
</a>