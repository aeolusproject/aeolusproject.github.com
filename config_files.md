---
title: Aeolus Config files
layout: page
title: "Configuration files"
summary: "Configuration files"
---
{::options parse_block_html="true" /}

Aeolus configuration files
==========================

Each component of Aeolus has its own configuration files, as listed
below:

-   [Audrey](#audrey)
-   [Conductor](#conductor)
-   [Configure](#configure)
-   [Connector](#connector)
-   [Image Factory](#factory)
-   [Image Warehouse](#iwhd)
-   [Oz](#oz)

Configuration files for major Aeolus dependencies:

-   [Apache HTTP Server](#httpd)
-   [Deltacloud](#deltacloud)
-   [Gofer](#gofer)
-   [Libvirt](#libvirt)
-   [MongoDB](#mongodb)
-   [Pulp](#pulp)
-   [Puppet](#puppet)

<div class="section-grouping">
Audrey → Aeolus Configuration Server
------------------------------------

Aeolus-configserver is a service for storing and retrieving VM
configurations.

### Location

On RHEL/Fedora, its configuration file is located at:

    /etc/sysconfig/aeolus-configserver


### Contents

    # Settings overrides for /etc/init.d/aeolus-configserver
    # Defaults shown for each config option

    # Environment setting for rack (sinatra)
    #RACK_ENV="${RACK_ENV:-production}"

    # root directory of the Aeolus Config Server sinatra application
    #CONFIG_SERVER_DIR="/usr/share/aeolus-configserver"

    # location of rackup file to configure rack for Aeolus Config Server
    # relative to the $CONFIG_SERVER_DIR
    #CONFIG_SERVER_RACKUP="config.ru"

    # thin server port
    #CONFIG_SERVER_PORT="4567"

    # thin log file for Aeolus Config Server
    #THIN_LOG="/var/log/aeolus-configserver/thin.log"

    # thin pid file for Aeolus Config Server
    #THIN_PID="/var/run/aeolus-configserver/thin.pid"

    # thin lock file for Aeolus Config Server
    #THIN_LOCKFILE="/var/lock/subsys/aeolus-configserver"

    # thin server IP address
    #THIN_IP="127.0.0.1"

    # user and group under which Aeolus Config Server sinatra application runs
    #AEOLUS_USER="aeolus"
    #AEOLUS_GROUP="aeolus"

    # thin server prefix (i.e., application context) for Aeolus Config Server
    # sinatra application
    #PREFIX="/"

    # Directory where aeolus-configserver stores the instance configrations
    #STORAGE_DIR="/var/lib/aeolus-configserver/configs"

    # Location of Relax NG schema file for instance-config
    # This can be a local file location or a URL (http://here.org/file.rng)
    #INSTANCE_CONFIG_RNG="/var/lib/aeolus-configserver/schema/instance-config.rng"

### Configuration settings

#### RACK\_ENV

The Config Server is a ruby application based on the Sinatra simple web
framework. Sinatra is an extension to the ruby rack framework. The
**RACK\_ENV** variable controls which environment rack thinks it is
running in. This essentially controls where the instance configuration
data is stored by the Config Server (see [Instance configuration
storage](audrey.html#instance-config-storage) on the Audrey page). The
default value is "**production**".

#### CONFIG\_SERVER\_DIR

Info goes here

#### CONFIG\_SERVER\_RACKUP

Info goes here

#### CONFIG\_SERVER\_PORT

Info goes here

#### THIN\_LOG

Info goes here

#### THIN\_PID

Info goes here

#### THIN\_LOCKFILE

Info goes here

#### THIN\_IP

Info goes here

#### AEOLUS\_USER

Info goes here

#### AEOLUS\_GROUP

Info goes here

#### PREFIX

Info goes here

#### STORAGE\_DIR

Info goes here

#### INSTANCE\_CONFIG\_RNG

Info goes here
</div>
<br />

<div class="section-grouping">
Conductor
---------

Conductor is Aeolus' web based user interface, written using Ruby on
Rails.

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
Configure
---------

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
Connector → Image Factory Connector
-----------------------------------

Provides a REST web interface for Image Factory. Aeolus uses this for
internal communication with Image Factory.

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
Image Factory
-------------

Imagefactory is a high level daemon, responsible for creating virtual
machine images for each Cloud provider.

It uses Oz for some parts of the image creation process.

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
Image Warehouse
---------------

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
Oz
--

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
Configuration files for Aeolus dependencies
-------------------------------------------

Apache HTTP Server™
-------------------

Web site:
[http://httpd.apache.org](http://httpd.apache.org "Apache HTTP Server home page")

Stuff goes here

    Stuff goes here

Apache and Apache HTTP Server are trademarks of The Apache Software
Foundation.
</div>
<br />

<div class="section-grouping">
Deltacloud
----------

Web site:
[http://www.deltacloud.org](http://www.deltacloud.org "Deltacloud home page")

Deltacloud provides the communication layer between Aeolus and each of
the Cloud Providers.

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
Gofer
-----

Web site:
[https://fedorahosted.org/gofer/](https://fedorahosted.org/gofer/ "Gofer home page")

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
Libvirt
-------

Web site:
[http://www.libvirt.org](http://www.libvirt.org "Libvirt home page")

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
MongoDB
-------

Web site:
[http://www.mongodb.org](http://www.mongodb.org "MongoDB home page")

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
Pulp
----

Web site:
[http://www.pulpproject.org](http://www.pulpproject.org "Pulp home page")

Stuff goes here

    Stuff goes here
</div>
<br />

<div class="section-grouping">
Puppet
------

Web site:
[http://www.puppetlabs.com](http://www.puppetlabs.com "Puppet home page")

Stuff goes here

    Stuff goes here
</div>
