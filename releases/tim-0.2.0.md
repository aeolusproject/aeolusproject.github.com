---
title: Tim 0.2.0
layout: page
summary: "Tim 0.2.0"
---
{::options parse_block_html="true" /}

Tim 0.2.0
==========

<div class='container_24'>
  <div class='grid_8'>

| **Project**      | [Tim](https://github.com/aeolus-incubator/tim) |
| **Release**      | 0.2.0          |
| **Release Date** | January 16th, 2013 |
| **Get It**       | [Download](http://rubygems.org/gems/tim) |

  </div>
  <div class='grid_16'>

<div class="section-grouping">

##Project Overview

Tim is a Rails Engine responsible for Cloud image management.  It  allows clients to create, delete and upload images to a multitude of Cloud providers.  Tim builds on top of Imagefactory’s cloud abstraction layer.

Adding the ability for clients to store meta-data (used for searching and sorting) as well as versioning and support for access control.  Tim wraps all this up in a clean, simple RESTful API.

</div>

<div class="section-grouping">

##Overview

This is the fourth release of Tim.  New features include:

* Support for importing existing images
* Support for Snapshot building functionality
* Support for host application passing in respond_options.
* Addition of initial rpm spec, script, and documentation; this can serve as a starting point for other distributions to package Tim

Read the [documentation](http://rubydoc.info/gems/tim/0.2.0/frames) to find out more.

</div>

<div class="section-grouping">

##Features

- [Introduction to Tim](#introduction)
- [Import Existing Images](#import)
- [Full List of Updates](#full)

</div>

<div id="feature1" class="section-grouping">
### Introduction to Tim

During the Aeolus Developer Conference, Martyn Taylor gave an introductory talk about TIM.  [View his presentation](http://www.aeolusproject.org/docs/presentations/2012-nov-conference/tim.odp) or watch the screencast below.

<iframe width="560" height="315" src="http://www.youtube.com/embed/eYmzoOWeykM" frameborder="0" allowfullscreen></iframe>

</div>
<div id="import" class="section-grouping">
### Import Existing Images

This release supports the importing of images into Tim.  To see how, view the [documentation](http://rubydoc.info/gems/tim/0.2.0/file/README.rdoc#Import_Image).
</div>
<div id="full" class="section-grouping">
### Full List of Updates

* Support for importing existing images
* Support for Snapshot building functionality
* Support for host application passing in respond_options
   * This allows, for example, custom redirect URLs to be passed to Tim.
* Better error reporting if unable to connect to factory
* Added new hooks for setting provider and credentials to be sent to
   factory.
* Documentation updates
   * BaseImage and Template usage
   *  Import example
* Improve error handling on XML sytanx errors for Templates
* Various bugfixes
* Additional model validations and associations to make for better
   consistency.
* Added initial rpm spec, script, documentation
   This can serve as a starting point for other distributions to
   package Tim.
* Gem packaging cleanup/fixes.
</div>

  </div>
</div>