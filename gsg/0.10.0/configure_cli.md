---
title: GSG 0.10.0 - Configure aeolus-cli
layout: gsgpage
title: "GSG 0.10.0 - Configure aeolus-cli"
summary: "GSG 0.10.0 - Configure aeolus-cli"
---
{::options parse_block_html="true" /}

Configure the Aeolus Command Line Interface tool
================================================

<div class="page-listing">
### Getting Started Guide

1.  [Basic Glossary](basic_glossary.html "Basic Glossary")
2.  [Configuring Aeolus](configuring_aeolus.html "Configuring Aeolus")
3.  [First login](first_login.html "First login")
4.  [Configure your Cloud
    Providers](configure_providers.html "Configure your Cloud Providers")
5.  Configure the Aeolus Command Line Interface tool
6.  [Create a Fedora 16
    Template](make_template.html "Create a Fedora 16 Template")
7.  [Start an Instance of the
    Image](start_image.html "Start an Instance of the Image")
8.  [Stop a running Instance](stop_image.html "Stop a running Instance")
9.  [Cleaning up](cleaning_up.html "Cleaning up")
</div>

<div class="section-grouping">
## 1. Update Aeolus CLI Config

Aeolus CLI is a command line tool for creating and managing aeolus
images. The Aeolus CLI Config file is installed in the user's home
directory as .aeolus-cli ('~/.aeolus-cli').

    :conductor:
      :url: https://localhost/conductor/api
      :username: admin
      :password: password

You should update the password to the one you created during the [First
Login Step](first_login.html).

Also make sure that the conductor url is set to where conductor is
running with the "/api" postfix and the username is correct. Unless you
have strayed from the default setup, the default values should be
sufficient.

<div class="note">
**NOTE -** New users who want to create and manage aeolus images from
the command line, must install the aeolus-cli and update the config with
their own credentials
</div>
</div>

<a class='button' href='make_template.html' title='Create A Fedora 16 Template'>
  Make Image <img alt='→' src='../../images/button-right.png' />
</a>