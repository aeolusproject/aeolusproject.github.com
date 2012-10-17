---
title: GSG 0.10.0 - First login
layout: gsgpage
title: "GSG 0.10.0 - First login"
summary: "GSG 0.10.0 - First login"
---
{::options parse_block_html="true" /}

First login
===========

On this page, you will log into Aeolus, be introduced to the main parts
of the web based interface, and change the administrator password.

<div class="page-listing">
### Getting Started Guide

1.  [Basic Glossary](basic_glossary.html "Basic Glossary")
2.  [Configuring Aeolus](configuring_aeolus.html "Configuring Aeolus")
3.  First login
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
## 1. Web based interface

After Aeolus has been initialized, with any firewall updates done, you
are ready to use the web interface.

Open the following address in your web browser (any modern one), using
the name of your Aeolus server instead of "**server\_name**":

    https://server_name/conductor

<div class="note">
**USEFUL INFO:** Aeolus is really [several pieces of software that work
together.](https://www.aeolusproject.org/redmine/projects/aeolus/wiki/Aeolus_Components)
"Conductor" is the web based user interface piece.
</div>

If everything is working properly, the initial login screen will appear:

[![Initial login screen - click to view at full size in a new
window](images/thumbnails/initial_login_screen_thumb.png "Initial login screen - click to view at full size in a new window")](images/initial_login_screen.png)

Login now, using the default administrator details set by
**aeolus-configure**:

       **Username:** admin  
       **Password:** password

We'll change that password in a few moments, after introducing you to
the major parts of the Aeolus interface.
</div>
<br />

<div class="section-grouping">
## 2. Welcome screen

Once you've logged in, the main Aeolus web interface appears:

[![Initial welcome screen - click to view at full size in a new window](images/thumbnails/initial_welcome_screen_thumb.png "Initial welcome screen - click to view at full size in a new window")](images/initial_welcome_screen.png)

The important parts are:

**Section tabs** 

These are the "**MONITOR**" and "**ADMINISTER**" tabs in the screenshot.

-   Clicking the *Monitor* tab switches to the Monitoring view. This
    is where the status and progress of your virtual machines is
    shown.

	<div class="note">
    **NOTE -** This view is the default when you log in. Clicking on
    *Monitor* when you're already in this view has no effect.
    </div>

-   Clicking the *Administer* tab switches the view to general
    configuration settings.

[![Section tabs - click to view at full size in a new window](images/thumbnails/initial_welcome_screen_section_tabs_thumb.png "Section tabs - click to view at full size in a new window")](images/initial_welcome_screen_section_tabs.png)

**View** 

This is the middle of the screen, from the "**Overview**" title bar down. It
includes everything down to (but not including) the page footer. The title,
options, and content in this area change as you perform different tasks in
Aeolus.

[![View - click to view at full size in a new window](images/thumbnails/initial_welcome_screen_view_thumb.png "View - click to view at full size in a new window")](images/initial_welcome_screen_view.png)

**View options** 

Some views, such as Monitor Overview, let you choose how data is displayed.
Conductor presents two views— **detail view** and **pretty view.** Pretty view
is represented by the "eyeball" icon and is the default view. It represents a
graphical overview of content. Detail view is represented by the "table" or
"grid" icon, and presents a more detailed view of content. In some cases,
detail view will present some controls that are not present in pretty view. For
now, we will stay in pretty view.

[![View options - click to view at full size in a new window](images/thumbnails/initial_welcome_screen_view_options_thumb.png "View options - click to view at full size in a new window")](images/initial_welcome_screen_view_options.png)

**View commands** 

View commands represent action buttons based on the objects you are viewing.
Depending on the page you are on, these actions may include creating a new
pool, deleting a user, launching an instance, etc.

[![View commands - click to view at full size in a new window](images/thumbnails/initial_welcome_screen_view_commands_thumb.png "View commands - click to view at full size in a new window")](images/initial_welcome_screen_view_commands.png)

**User options menu** 

The user menu contains actions for the currently logged-in user, including the
ability to edit your account preferences and to log out.

[![User options menu - click to view at full size in a new window](images/thumbnails/initial_welcome_screen_user_options_thumb.png "User options menu - click to view at full size in a new window")](images/initial_welcome_screen_user_options.png)
</div>
<br />

<div class="section-grouping">
## 3. Change the administrator password

In the top right corner of the interface, click on the silhouette button
next to "**aeolus user**". The user options menu will appear.

Then click "**My Account**". This is a shortcut to your user information
view in the *Administer* sections' "**Users and Groups**" area.

![User information shortcut](images/user_account_shortcut.png "User information shortcut")

Click the "**Edit**" button on the user's business card.

[![User information view - click to view at full size in a new window](images/thumbnails/aeolus_user_view_thumb.png "User information view - click to view at full size in a new window")](images/aeolus_user_view.png)

This loads the "**Edit User**" view:

[![Edit user view - click to view at full size in a new window](images/thumbnails/edit_user_view_thumb.png "Edit user view - click to view at full size in a new window")](images/edit_user_view.png)

Change the password now, using the "**Change password**" and "**Confirm
password**" fields.

If you want, also change the First name, Last name, and E-mail fields.

Click the "**Save User**" button when you're done. A message confirming
the change should appear:

[![Message indicating user update was successful - click to view at full size in a new window](images/thumbnails/user_update_successful_thumb.png "Message indicating user update was successful - click to view at full size in a new window")](images/user_update_successful.png)
</div>

<a class='button' href='configure_providers.html' title='Configure your Cloud Providers'>
  Configure your Cloud Providers <img alt='→' src='../../images/button-right.png' />
</a>