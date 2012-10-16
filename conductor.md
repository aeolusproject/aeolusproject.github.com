---
title: Aeolus Conductor
layout: page
title: "Aeolus Conductor"
summary: "Aeolus Conductor"
---
{::options parse_block_html="true" /}

Aeolus Conductor
================

Aeolus Conductor provides a web-based user interface for managing your
Cloud instances.

<div class="warning">
**WARNING:** The current installation process **deletes** any existing
data in your PostgreSQL database.

Either ensure that your data is backed up and restorable, or consider
installing Aeolus Conductor on a box that does not need PostgreSQL for
any other purpose.
</div>
<br />

<div class="note">
**NOTE:** The current installation works on 64-bit Linux only. 32-bit
support is planned, but does not work at this time.
</div>
<br />

<div class="section-grouping">
Installation Steps
------------------

1.  Set up an Aeolus repository, following the instructions on the [Get
    It](get_it.html "Get Aeolus") page.

2.  Install the Conductor:

        $ sudo yum install aeolus-conductor-daemons

</div>
<br />

<div class="section-grouping">
Aeolus Conductor Configuration
------------------------------

1.  Open ports 80 and 443 on the firewall, so that (secure) web traffic
    may be served.

2.  Ensure that the time is set correctly. Failure to do so causes
    connectivity issues with Amazon Elastic Cloud Compute (EC2).

3.  Clean up any existing remnants from an older installation.


    **WARNING:** This will destroy any existing data in the PostgreSQL
    database.


        $ sudo /usr/sbin/aeolus-cleanup

4.  Configure Aeolus Conductor:

        $ sudo /usr/sbin/aeolus-configure -p mock
</div>
<br />

<div class="section-grouping">
Verify Installation
-------------------

Browse to
[http://\<machine\_name\>/conductor](http://machine_name/conductor).

The login page for Aeolus Conductor should appear. A default
administrative account has been created with a username "admin" and a
password "password" (no quotes).
</div>
