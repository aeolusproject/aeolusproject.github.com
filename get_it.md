---
layout: page
title: "Get It"
---
{::options parse_block_html="true" /}

# Get Aeolus

<div class="section-grouping">

## Overview
Aeolus is comprised of a number of [projects](/projects.html). On this page, we provide specific instructions for installing Conductor and related projects such as Imagefactory, Tim, and Deltacloud. For other projects, such as Winged Monkey, Heat, or the Qt app, see the [projects page](/projects.html) for project-specific documentation.

## Installing Conductor and company
We use [dev-tools](https://github.com/aeolus-incubator/dev-tools) to install and configure Conductor and related projects, including Tim, Deltacloud, Imagefactory, etc. The advantage of dev-tools is that it is more portable than RPM packages, but easier to use than distributing tarballs.

### Stable
To install a stable release, you can follow the directions on the [Conductor 0.14.0 release page](/releases/conductor-0.14.0.html#install). namely:

<pre>
 # as regular user with password-less sudo, check out the dev-tools source repository with git
 git clone git://github.com/aeolus-incubator/dev-tools.git
 cd dev-tools/releases
 /bin/bash -x 0.14.0-release.sh
</pre>

### Development
Those interested in running the absolute latest code, versus a tested and known-stable release, can do so with dev-tools as well. Note that this setup is not guaranteed to work.

<pre>
  # as regular user with password-less sudo, check out the dev-tools source repository with git
  git clone git://github.com/aeolus-incubator/dev-tools.git
  cd dev-tools
  /bin/bash -x bootstrap.sh
</pre>

You are encouraged to read the <a href="https://github.com/aeolus-incubator/dev-tools/blob/master/README.md">dev-tools README</a> for instructions on other supported options. Those new to the project may also find the [develop section](/contribute.html#develop) of our Contribute page helpful.

## Other components
For other components, you should view the individual project pages linked from our master [projects list](/projects.html), which contain installation information.
</div>
