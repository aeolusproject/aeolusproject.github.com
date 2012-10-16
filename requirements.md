---
title: Aeolus Requirements
layout: page
title: "Aeolus Requirements"
summary: "Aeolus Requirements"
---
{::options parse_block_html="true" /}

Requirements for using Aeolus
=============================

<div class="section-grouping">
To use Aeolus effectively, the server you install it on must meet these
requirements:

<table width='60%'>
  <tr>
    <th align='left' style='vertical-align: top' width='25%'>
      Operating System:
    </th>
    <td style='padding-bottom: 0.7em'>
      Red Hat Enterprise Linux 6.2 (or higher) 64-bit, CentOS 6.2 (or
      higher) 64-bit, or Fedora 16+ 64-bit.
    </td>
  </tr>
  <tr>
    <th align='left' style='vertical-align: top'>CPU:</th>
    <td style='padding-bottom: 0.7em'>
      1.6Ghz dual core or higher recommended.
    </td>
  </tr>
  <tr>
    <th align='left' style='vertical-align: top'>
      CPU VT extensions:
    </th>
    <td style='padding-bottom: 0.7em'>
      Not required for creating Amazon EC2 virtual machine images, or
      importing existing images.
      <br />
      <br />
      VT extensions <b>are</b> required for creating new
      <b>vSphere</b> and <b>RHEV</b> virtual machine images.
    </td>
  </tr>
  <tr>
    <th align='left' style='vertical-align: top'>Memory:</th>
    <td style='padding-bottom: 0.7em'>2GB or greater.</td>
  </tr>
  <tr>
    <th align='left' style='vertical-align: top'>Firewall:</th>
    <td style='padding-bottom: 0.7em'>
      Must allow web browser connections on tcp port 443 (https).
    </td>
  </tr>
  <tr>
    <th align='left' style='vertical-align: top'>Disk space:</th>
    <td style='padding-bottom: 0.7em'>
      Less than 1 GB required for the Aeolus software,
      <br />
      + sufficient space to hold virtual machine images (may be on network
      storage such as SAN, NAS, or NFS).
    </td>
  </tr>
</table>
</div>
<br />

<div class="section-grouping">
Cloud provider accounts
-----------------------

You also need an account with each Cloud provider you want Aeolus to
manage, such as Amazon EC2, and/or Rackspace.

Creation of these accounts is something you must do outside of Aeolus,
using the standard sign up procedures for each Cloud provider.

**Note:** These accounts are completely optional, you do not need to
create an account with any Cloud provider you don't want Aeolus
managing.

That being said, our **Getting Started Guide** is written around having
an Amazon EC2 account already, so you will need one if you're going to
follow that.
</div>

<a class='button' href='get_it.html'>
  Get Aeolus <img alt='→' src='images/button-right.png' />
</a>
