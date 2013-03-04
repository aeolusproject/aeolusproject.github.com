---
title: Conductor 0.14.0
layout: page
summary: "Conductor 0.14.0"
---
{::options parse_block_html="true" /}

Conductor 0.14.0
==========

<div class='container_24'>
  <div class='grid_8'>

| **Project**      | [Conductor](http://github.com/aeolusproject/conductor) |
| **Release**      | 0.14.0          |
| **Release Date** | March 4th, 2013 |
| **Get It**       | [Installation Notes](#install) |

  </div>
  <div class='grid_16'>

<div class="section-grouping">

##Project Overview

Aeolus is software for running virtual machines both internally on your own equipment, and in Clouds from several leading vendors. All at the same time.

Aeolus is comprised of several component projects that work together, including:

* [Conductor](https://github.com/aeolusproject/conductor)
* [Thor CLI](https://github.com/aeolus-incubator/thor-cli)
* [Aeolus Image Rubygem](https://github.com/aeolusproject/aeolus-image-rubygem)
* [Tim](https://github.com/aeolus-incubator/tim)
* [ImageFactory](https://github.com/aeolusproject/imagefactory/)

If you'd like additional information please [contact us](/contact.html)!
</div>

<div class="section-grouping">

##Overview

This release of Conductor includes additional support for cloud providers, updated image management through Tim and Imagefactory v2, several UI enhancements, cost-based provider selection, and more.  See the sections below for details.
</div>

<div class="section-grouping">

##Features and Information

- [Installation Notes](#install)
- [RHEVM Support](#rhevm)
- [OpenStack Support](#openstack)
- [Cost-Based Provider Selection](#provider-selection)
- [Alchemy](#alchemy)
- [Implementation of Simple Forms](#simple-forms)
- [Tim / ImageFactory v2](#image)
- [API Enhancements and Changes](#api)
- [Notable Bug Fixes](#fixes)
- [Known Issues](#issues)
- [Reporting Errors](#report)
- [Contributors](#contributors)

</div>

<div id="install" class="section-grouping">
### Installation Notes

Aeolus is installed for development purposes using a helpful side project called dev-tools. Dev-tools provides a quick and easy way to get a running aeolus instance from source.  It is developed and tested on Fedora 17/18 and CentOS 6.

Read about dev-tools [here](https://github.com/aeolus-incubator/dev-tools/blob/master/README.md) if you want to know how it works or to see the many configurable installation options. Note that running bootstrap.sh from dev-tools master will not install the 0.14.0 release by default, but rather the bleeding-edge development versions of all Aeolus components.

We distribute a release-specific install script from dev-tools. This should be executed as a regular user with password-less sudo privileges.

    # as regular user with password-less sudo, check out the dev-tools source repository with git
    git clone git://github.com/aeolus-incubator/dev-tools.git
    cd dev-tools/releases
    /bin/bash -x 0.14.0-release.sh

Following a successful installation, you should be able to browse to Aeolus Conductor at [http://localhost:3000](http://localhost:3000). 
</div>

<div id="rhevm" class="section-grouping">
### RHEVM Support

Please note that in order to add these providers, the conductor UI requires the existence of the following json files under /etc/imagefactory directory where provider name matches a definition within the json file.  No imagefactd  restart is necessary.

In addition, rhev support requires the conductor host to have the rhevm export domain nfs share mounted with the values found within rhevm.json.          
  
Please use the following as examples:
  

    # /etc/imagefactory/rhevm.json
    {
      "rhevm-31":
      {
        "nfs-dir": "/mnt/rhevm31-nfs",
        "nfs-path": "/home/rhev/export",
        "nfs-host": "<nfs_host>",
        "api-url": "https://<rhevm_host>/api",
        "cluster": "_any_",
        "timeout": 1800
      }
    }

</div>

<div id="openstack" class="section-grouping">
### OpenStack Support

This release of Conductor includes support for [OpenStack](http://www.openstack.org).  Watch this video to see some of the development work involved in adding this support.

<iframe width="560" height="315" src="http://www.youtube.com/embed/gg-ilp-vZTY" frameborder="0" allowfullscreen></iframe>
</div>

<div id="provider-selection" class="section-grouping">
### Cost-Based Provider Selection

In cost-based provider selection, costs are associated with hardware profiles.  Administrators can then either price the usage per hour (or wall clock hour); or assign costs to the usage of CPU/memory/storage per hour, which is then calculated into an overall cost for the hardware profile.

A user choosing to deploy based on a cost-based provider selection strategy has three additional options: low, medium, or high cost impact.  This determines how much weight should be given to cost when deciding upon a provider.  And after a deployment is launched, deployment and instance cost estimates are available.

<iframe width="560" height="315" src="http://www.youtube.com/embed/m6C5b3XbRg0" frameborder="0" allowfullscreen></iframe>
</div>

<div id="alchemy" class="section-grouping">
### Alchemy

Conductor now uses Alchemy as its integrated UI component.  Alchemy is an open source project that provides styled user interface components (forms, buttons, flash messages) and complex Ruby-on-Rails composites (header, navigation, login) to ease web developers' lives and help users with web usability.

Find out more at [http://ui-alchemy.org](http://ui-alchemy.org).
</div>

<div id="simple-forms" class="section-grouping">
### Implementation of Simple Forms

The [simple_form gem](https://github.com/plataformatec/simple_form) eases the construction of Conductor forms tremendously, ensuring that developers will all be able to create their forms in a canonical way.

<iframe width="560" height="315" src="http://www.youtube.com/embed/LZelTzfNbfQ" frameborder="0" allowfullscreen></iframe>
</div>

<div id="image" class="section-grouping">
### Tim / ImageFactory v2

Conductor 0.14.0 brings integration with Tim and ImageFactory v2.  Tim is a Rails Engine responsible for Cloud image management.  It  allows clients to create, delete and upload images to a multitude of Cloud providers.  Tim builds on top of Imagefactory's cloud abstraction layer.

<iframe width="560" height="315" src="http://www.youtube.com/embed/eYmzoOWeykM" frameborder="0" allowfullscreen></iframe>
</div>

<div id="api" class="section-grouping">
### API Enhancements and Changes

*The Conductor API is not stable.* It is a work in progress and changes should be expected.

* API: Instances index, show, and entrypoint v3
* API: frontend realms index, show, and entrypoint v2
* API: More info in deployments #show
* API: Make time helpers more defensive
* API: ProviderType - delete action
* API Deployables: list deployables from pool and it's permissions in transaction
* API #show checks provider account is not null
* API status:
   * API can list, create, edit and delete providers, provider_accounts, pools, pool families and catalogs
   * API can list and delete provider_types, deployables
   * API can list, create and hardware_profiles
   * API can list: provider_realms, frontend_realms, instances, deployments

<iframe width="560" height="315" src="http://www.youtube.com/embed/2eop1dxVaog" frameborder="0" allowfullscreen></iframe>
</div>

<div id="fixes" class="section-grouping">
### Notable Bug Fixes

* Prevent duplicated save in Taskomatic create_instance!
</div>

<div id="issues" class="section-grouping">
### Known Issues

* Due to an ImageFactory issue, vSphere is currently unusable with Conductor: [https://github.com/aeolusproject/imagefactory/issues/248](https://github.com/aeolusproject/imagefactory/issues/248)
</div>

<div id="report" class="section-grouping">
### Reporting Errors

To report issues with Aeolus, please use mailing list aeolus-devel@lists.fedorahosted.org to reach the user community.  Or report issues directly via github:

* [https://github.com/aeolusproject/conductor](https://github.com/aeolusproject/conductor)
* [https://github.com/aeolus-incubator/thor-cli](https://github.com/aeolus-incubator/thor-cli)
* [https://github.com/aeolusproject/aeolus-image-rubygem](https://github.com/aeolusproject/aeolus-image-rubygem)
* [https://github.com/aeolus-incubator/tim](https://github.com/aeolus-incubator/tim)
</div>

<div id="contributors" class="section-grouping">
### Contributors

* Brian McLaughlin
* Imre Farkas
* Ivan Necas
* Jan Provaznik
* Jaromír Coufal
* Jason Guiditta
* Jiří Stránský
* John Eckersberg
* Justin Clift
* Maroš Zaťko
* Martin Povolny
* Matt Wagner
* Petr Blaho
* Richard Su
* Steve Linabery
</div>

  </div>
</div>