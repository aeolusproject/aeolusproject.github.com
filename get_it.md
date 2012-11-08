---
layout: page
title: "Get it"
---

<div id="get_it_container" markdown="1">
##Who Are You?##

- ###> A developer###
  All Aeolus development sources are served by git, see the
  [projects](projects.html) page for the individual project repositories and
  instructions on how to checkout, build, and use components.

  To checkout, use and build some of the most popular components:

  <pre>
  $ git clone deltacloud
  $ deltacloudd -i mock
  $ make rpms
  </pre>
  
  <pre>
  $ git clone imagefactory
  $ make rpms
  $ yum install imagefactory
  $ ...
  </pre>

- ###> A system administrator###
  For full end two end instructions on how to install and use Aeolus
  on a fresh Fedora system, see [this](gsg/0.10.0/configuring_aeolus.html)

- ###> An End User###
  If you are an end user looking to use the conductor web interface which
  has been setup for you, see the following [guide](gsg/0.10.0/first_login.html)
</div>
