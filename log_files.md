---
title: Aeolus Log files
layout: page
title: "Aeolus Log files"
summary: "Aeolus Log files"
---
{::options parse_block_html="true" /}

Log file locations
==================

Default log file locations of all Aeolus components:

-   [Audrey](#audrey)
-   [Conductor](#conductor)
-   [Configure](#configure)
-   [Connector](#connector)
-   [Image Factory](#factory)
-   [Image Warehouse](#iwhd)

Default log file locations for major Aeolus dependencies:

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

By default, all log files for it are in the directory:

    /var/log/aeolus-configserver

### Thin

Thin is the ruby web server Audrey Config Server uses to run the web
application.

The Thin log file for aeolus-configserver is located at:

    /var/log/aeolus-configserver/thin.log
</div>
<br />

<div class="section-grouping">
Conductor
---------

Conductor is Aeolus' web based user interface, written using Ruby on
Rails.

By default, all log files for Conductor are in the directory:

    /var/log/aeolus-conductor/

### DBomatic

DBomatic updates the Conductor database based on what happens in the
configured Cloud Providers.

The DBomatic log file is located at:

    /var/log/aeolus-conductor/dbomatic.log

### Rails

Rails is the ruby based web application framework used by Conductor.

The Rails log file is located at:

    /var/log/aeolus-conductor/rails.log

### Thin

Thin is the ruby based web server used by Conductor for its web
interface.

The Thin log file is located at:

    /var/log/aeolus-conductor/thin.log
</div>
<br />

<div class="section-grouping">
Configure
---------

By default, all log files for Configure are in the directory:

    /var/log/aeolus-configure/

### aeolus-configure

The log file for aeolus-configure is located at:

    /var/log/aeolus-configure/aeolus-configure.log

### aeolus-cleanup

The log file for aeolus-cleanup is located at:

    /var/log/aeolus-configure/aeolus-cleanup.log
</div>
<br />

<div class="section-grouping">
Connector → Image Factory Connector
-----------------------------------

Provides a REST web interface for Image Factory. Aeolus uses this for
internal communication with Image Factory.

By default, the log file for it is here:

    /var/log/aeolus-connector.log

You can run a tail on this log, to watch progress:

    $ tail -f /var/log/aeolus-connector.log
</div>
<br />

<div class="section-grouping">
Image Factory
-------------

Imagefactory is a high level daemon, responsible for creating virtual
machine images for each Cloud provider.

It uses Oz for some parts of the image creation process, capturing Oz's
logging in the Image Factory log file for convenience.

By default, the Image Factory log file is located at:

    /var/log/imagefactory.log

You can run a tail on this log, to watch progress of image building:

    $ tail -f /var/log/imagefactory.log
</div>
<br />

<div class="section-grouping">
Image Warehouse
---------------

Image Warehouse stores cloud images, upload them to cloud providers
based on a set of rules.

By default, the its log file is located at:

    /var/log/iwhd.log
</div>
<br />

Logs files for Aeolus dependencies
----------------------------------

<div class="section-grouping">
Apache HTTP Server™
-------------------

Web site:
[http://httpd.apache.org](http://httpd.apache.org "Apache HTTP Server home page")

By default, the Apache HTTP Server log files go into this directory:

    /var/log/httpd/

    /var/log/httpd/access_log
    /var/log/httpd/error_log
    /var/log/httpd/ssl_access_log
    /var/log/httpd/ssl_error_log
    /var/log/httpd/ssl_request_log

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

    /var/log/deltacloud-mock/
</div>
<br />

<div class="section-grouping">
Gofer
-----

Web site:
[https://fedorahosted.org/gofer/](https://fedorahosted.org/gofer/ "Gofer home page")

By default, the Gofer log file is located at:

    /var/log/gofer/agent.log
</div>
<br />

<div class="section-grouping">
Libvirt
-------

Web site:
[http://www.libvirt.org](http://www.libvirt.org "Libvirt home page")

By default, all Libvirt log files go into:

    /var/log/libvirt/
</div>
<br />

<div class="section-grouping">
MongoDB
-------

Web site:
[http://www.mongodb.org](http://www.mongodb.org "MongoDB home page")

By default, the MongoDB log file is located at:

    /var/log/mongodb/mongodb.log
</div>
<br />

<div class="section-grouping">
Pulp
----

Web site:
[http://www.pulpproject.org](http://www.pulpproject.org "Pulp home page")

By default, all log files for Pulp go into this directory:

    /var/log/pulp/

    /var/log/pulp/client.log
    /var/log/pulp/events.log
    /var/log/pulp/grinder.log
    /var/log/pulp/pulp.log
</div>
<br />

<div class="section-grouping">
Puppet
------

Web site:
[http://www.puppetlabs.com](http://www.puppetlabs.com "Puppet home page")

By default, all log files for Pupppet go into this directory:

    /var/log/puppet/
</div>
