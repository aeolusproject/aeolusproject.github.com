---
title: ImageFactory
layout: page
title: "ImageFactory"
summary: "ImageFactory"
---
{::options parse_block_html="true" /}

Image Factory
=============

*Your infrastructure in a sky full of clouds.*

Image Factory enables appliance creation and deployment to multiple
virtualization and Cloud providers.

![](http://aeolusproject.github.com/imagefactory/images/IF-highlevel.png)

<div class="section-grouping">
Features
--------

-   Build guest images for a growing list of operating system and cloud
    combinations.
    -   Current guest OS support: Fedora 7-16, RHEL 5.x and 6.x
    -   Current cloud support: Red Hat Enterprise Virtualization, VMware
        vSphere, Amazon EC2, Rackspace

-   Image Factory supports "build and upload" or snapshotting of
    existing images.
-   RESTful API makes integrating Image Factory into existing workflows
    simple.
</div>
<br />

<div class="section-grouping">
Using Image Factory
-------------------

Building an image begins with a template describing what to build. See
an example of such a template below. See the [schema documentation for
TDL](http://imgfac.org/documentation/tdl/TDL.html) for more detail
on creating a template. Note that a template is **not** tied to a
specific cloud.

    <template>
      <name>f16jeos</name>
      <os>
        <name>Fedora</name>
        <version>16</version>
        <arch>x86_64</arch>
        <install type='iso'>
          <iso>http://download.fedoraproject.org/pub/fedora/linux/releases/16/Fedora/x86_64/os/</iso>
        </install>
        <rootpw>p@55word!</rootpw>
      </os>
    </template>

Ensure you change the \<rootpw\> element to your desired root password.

Next, use the imagefactory command to specify the template to use, and
which clouds to build an image for. The above template example was saved
to a file named *f16\_64.tdl*.

    $ sudo imagefactory --template f16_64.tdl --target ec2

Once the image has been built, use the imagefactory command again, this
time to push the image into the cloud.

    $ sudo imagefactory --provider ec2-us-west-1 --credentials ec2_credentials.xml

That's it! You can now launch an instance of this image using either the
cloud provider's management console or a cloud management tool such as
**[Aeolus](http://www.aeolusproject.org)**.
</div>
<br />

<div class="section-grouping">
Installing Image Factory
------------------------

Installing Image Factory is quick and easy. Fedora 15-16 and RHEL 5-6
users can add the Aeolus repository for either RHEL or Fedora as
described on the [Get
It](http://www.aeolusproject.org/get_it.html#stable) page. Once
configured, yum can be used to install Image Factory with:

    $ sudo yum install imagefactory

Other, unsupported, systems can install Image Factory using setuptools:

    $ git clone git://github.com/aeolusproject/imagefactory.git
    ...
    $ cd imagefactory
    $ sudo setup.py install
</div>
<br />

<div class="section-grouping">
Further information
-------------------

More in depth information about Image Factory, including configuration,
troubleshooting and recovery information, can be found in the
[ImageFactory Admin
Guide](http://git.fedorahosted.org/cgit/iwhd.git/tree/doc/admin_guide.md).
</div>
