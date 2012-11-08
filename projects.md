---
layout: page
title: Projects
---

Projects
========

Aeolus is an umbrella project consisting of several components.
Each may be used individually or all may be used
[together](get_it.html "together")

<div id="projects_container" markdown="1">
##Main Components:##
Core components providing cross and hybrid cloud functionality

- ###[Deltacloud](http://deltacloud.apache.org/ "Deltacloud")###
  ![dc_logo](http://deltacloud.apache.org/assets/img/logo.png)
  Deltacloud is the core Aeolus component providing an abstract API which to issue
  calls to [many](http://deltacloud.apache.org/drivers) drivers.

  Deltacloud provides a RESTful Stateless API which clients written in any language
  can issue calls to cloud providers. The end user specifies the cloud provider which
  to connect to and the credentials to use in the REST API headers. Deltacloud, which
  implements the [Distributed Management Task Force](http://dmtf.org/)'s
  [CIMI](http://dmtf.org/standards/cloud) standard, proxies abstract calls to resources
  and collections to the backend cloud provider

- ###[Oz](https://github.com/clalancette/oz/wiki "Oz")###
  Oz is a tool for automatically installing operating systems into files
  with only minimal up-front input from the user.

  Oz can be used to bootstrap instances running Fedora, RHEL, Debian, Ubuntu,
  Suse, Windows, and more directly on the cloud.

- ##[ImageFactory](http://github.com/aeolusproject/imagefactory/ "ImageFactory")##
  Imagefactory provides a simple command abstracting the cloud management commands
  to build images, allowing the end user to deploy the same image to any cloud provider.

  Behind the scenes imagefactory uses oz to build the bootstrap the environments
  to base the images off of on the cloud

##Incubation Components:##
Components in development which to serve various roles by end users

- ##[Conductor](http://github.com/aeolusproject/conductor/ "Conductor")##
  ![conductor_screenshot](http://www.aeolusproject.org/images/screenshots/0.9.0/thumbnails/monitor_overview_thumb.png)
  The Conductor UI unifys the various Aeolus components, providing a rich / high-level
  interactive user experience to deploy instances and configurations across clouds

  <div style="clear:both"></div>

- ##[TIM Rails Engine](http://github.com/aeolus-incubator/tim/ "Tim")##
  TIM is a pluggable Rails Engine which provides image management capabilities 
  to Ruby on Rails based applications. Currently TIM plugins exist to work with
  imagefactory and other image mangement systems can be easily added.

- ##[Template Repository](https://github.com/aeolus-incubator/templates "Template Repository")##
  A community maintained repository of templates verified to work against the Aeolus
  suite of utilities to build images and deploy various stacks of components to the
  cloud to serve various purposes.

- ##[Heat](http://heat-api.org/ "Heat API")##
  ![heat_logo](http://heat-api.org/heat-logo-design/slow/heat_logo-large.png)
  Heat is an upcoming an OpenStack project that provides a programmable interface
  to orchestrate multiple cloud applications implementing well known standards such
  as [CloudFormation](http://aws.amazon.com/cloudformation/) and
  [TOSCA](http://docs.oasis-open.org/tosca/TOSCA/v1.0/csd04/TOSCA-v1.0-csd04.html)

  <div style="clear:both"></div>

- ##[Audrey](http://github.com/aeolusproject/audrey/ "Audrey")##
  Audrey facilitates cross cloud configurations and provides
  post boot configuration tools 

- ##[Snap](http://github.com/movitto/snap/ "Snap")##
  Snap is an in instance cloud configuration utility which allows the end user to
  take a snapshot of an instance running on the cloud, able to be restored on an
  instance running on another cloud provider.
  
  Currently snap support rpm based, deb based, and windows based environments. See
  the following [guide](http://mo.morsi.org/blog/node/347) on migrating instances
  across clouds.


##Ansillary Projects:##
Projects and resources to help users, developers, and the community.

- ##[Aeolus Website](http://github.com/aeolusproject/website "This Website")##
  This Website!

- ##[Configure](http://github.com/aeolusproject/aeolus-configure "Configuration tool")##
  Puppet recipes and tools used to configure the full Aeolus stack.

  See the complete end-to-end [instructions](get_it.html) for more info

- ##[DevTools](https://github.com/aeolus-incubator/dev-tools  "Aeolus Developer Tools")##
  Helper scripts and tools used to setup a complete Aeolus development environment
  from scratch.

- ##[Aeolus Cli](http://github.com/aeolusproject/aeolus-cli "The Aeolus Command Line Interface")##
  A command line interface to Conductor

- ##[Aeolus-GUI](https://github.com/niteshnarayanlal/Aeolus-gui "Aeolus-GUI")##
  A graphic interface (qt based) to Conductor

</div>
