---
layout: page
title: Projects
---

Projects
========

Aeolus is an umbrella project consisting of several components.
Each may be used individually or all may be used
[together](get_it.html "together").

<div id="projects_container" markdown="1">
##Main Components:##
Core components providing cross and hybrid cloud functionality

- ###[Deltacloud](http://deltacloud.apache.org/ "Deltacloud")###
  ![dc_logo](http://deltacloud.apache.org/assets/img/logo.png)
  Deltacloud provides a RESTful Stateless API which clients written in any language
  can use to issue calls to cloud providers. The end user specifies the cloud provider and
  the credentials to use in the REST API headers. Deltacloud, which
  implements the [Distributed Management Task Force](http://dmtf.org/)'s
  [CIMI](http://dmtf.org/standards/cloud) standard, proxies abstract calls to resources
  and collections to the backend cloud provider.

- ###[Oz](https://github.com/clalancette/oz/wiki "Oz")###
  Oz is a tool for automatically installing operating systems into files
  with only minimal up-front input from the user.

  Oz can be used to bootstrap instances running Fedora, RHEL, Debian, Ubuntu,
  Suse, Windows, and more directly on the cloud.

- ##[ImageFactory](http://github.com/aeolusproject/imagefactory/ "ImageFactory")##
  Imagefactory provides a simple command and RESTful interface abstracting the
  cloud management commands to build images, allowing the end user to deploy the
  same image to any cloud provider.

  Behind the scenes, imagefactory uses Oz to build the bootstrap the environments
  to base the images off of on the cloud.

- ##[Conductor](http://github.com/aeolusproject/conductor/ "Conductor")##
  ![conductor_screenshot](http://www.aeolusproject.org/images/screenshots/0.9.0/thumbnails/monitor_overview_thumb.png)
  The Conductor UI unifies the various Aeolus components, providing a rich / high-level
  interactive user experience to deploy instances and configurations across clouds.

  <div style="clear:both"></div>

##Incubation Components:##
Components in development which serve various roles for users and administrators

- ##[Tim Rails Engine](http://github.com/aeolus-incubator/tim/ "Tim")##
  Tim is a Rails Engine responsible for Cloud image management.  It  allows clients to create, delete and upload images to a multitude of Cloud providers.  Tim builds on top of Imagefactory’s cloud abstraction layer.

  Adding the ability for clients to store meta-data (used for searching and sorting) as well as versioning and support for access control.  Tim wraps all this up in a clean, simply RESTful API.

  [ [latest release](releases/tim-0.2.0.html) ]

- ##[Template Repository](https://github.com/aeolus-incubator/templates "Template Repository")##
  A community maintained repository of templates verified to work with the Aeolus
  suite of utilities to build images and deploy various stacks of components to the
  cloud.

- ##[Heat](http://heat-api.org/ "Heat API")##
  ![heat_logo](http://heat-api.org/heat-logo-design/slow/heat_logo-large.png)
  Heat is a forthcoming OpenStack project that provides a programmable interface
  to orchestrate multiple cloud applications implementing well known standards such
  as [CloudFormation](http://aws.amazon.com/cloudformation/) and
  [TOSCA](http://docs.oasis-open.org/tosca/TOSCA/v1.0/csd04/TOSCA-v1.0-csd04.html).

  <div style="clear:both"></div>

- ##[Audrey](http://github.com/aeolusproject/audrey/ "Audrey")##
  Audrey facilitates cross-cloud configurations and provides
  post-boot configuration tools.

- ##[Snap](http://github.com/movitto/snap/ "Snap")##
  Snap is an in-instance cloud configuration utility which allows the end user to
  take a snapshot of an instance running on the cloud, able to be restored on an
  instance running on another cloud provider.

  Currently snap supports rpm based, deb based, and windows based environments. See
  the following [guide](http://mo.morsi.org/blog/node/347) on migrating instances
  across clouds.

- ##[Winged Monkey](http://www.wingedmonkey.org)##
  Winged Monkey is an application that provides an elegant and intuitive user interface for self-service consumers of cloud resources.  It offers simplified interactions for non-administrative users, and allows users working with multiple cloud providers to enjoy a common user experience.

  [ [latest release](releases/wingedmonkey-0.1.0.html) ]


##Ancillary Projects:##
Projects and resources to help users, developers, and the community.

- ##[Aeolus Website](https://github.com/aeolusproject/aeolusproject.github.com "This Website")##
  This Website!

- ##[Configure](http://github.com/aeolusproject/aeolus-configure "Configuration tool")##
  Puppet recipes and tools used to configure the full Aeolus stack.

  See the complete end-to-end [instructions](get_it.html) for more info.

- ##[DevTools](https://github.com/aeolus-incubator/dev-tools  "Aeolus Developer Tools")##
  Helper scripts and tools used to setup a complete Aeolus development environment
  from scratch.

- ##[Aeolus Cli](http://github.com/aeolusproject/aeolus-cli "The Aeolus Command Line Interface")##
  A command line interface to Conductor.

- ##[Aeolus-GUI](https://github.com/niteshnarayanlal/Aeolus-gui "Aeolus-GUI")##
  A graphic interface (qt based) to Conductor.

</div>
