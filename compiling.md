---
title: How to compile Aeolus
layout: page
title: "How to compile Aeolus"
summary: "How to compile Aeolus"
---
{::options parse_block_html="true" /}

How to compile Aeolus
=====================

Aeolus is made up of several components, each of which need to be
compiled separately.

Instructions for Fedora and RHEL/CentOS
---------------------------------------

Compiling in the following order is known to work

1.  [Conductor](#conduct)
2.  [Oz](#oz)
3.  [Image Factory](#factory)
4.  [Image Warehouse](#iwhd)
5.  [Audrey](#audrey)

This page also has instructions for building some external dependencies,
though they're generally not needed.

-   [libdeltacloud](#libdeltacloud)

<div class="section-grouping">

Pre-requisites
--------------

Aeolus has a large number of prerequisite packages.

The best way to install them is by first installing the released
Aeolus-all packages, using the instructions on the [Get
Aeolus](get_it.html) page.

Follow the instructions on the Get Aeolus installation page, then
return here.
</div>

<br />

<div class="section-grouping">

### Build Conductor

#### 1. Install the required development packages:

    $ sudo yum install git make rest-devel rpm-build ruby-devel zip rubygem-sass \
      rubygem-compass rubygem-compass-960-plugin

#### 2. Clone the Conductor git repository:

    $ git clone git://github.com/aeolusproject/conductor.git -b branch_name

Look up the *branch\_name* to use
[here](https://www.aeolusproject.org/redmine/projects/aeolus/wiki/GitHub_Branches_and_Tags).

#### 3. Initialise any needed git submodules

    $ cd conductor
    $ git submodule init
    $ git submodule update

#### 4. Build the Conductor RPMs:

    $ make rpms

The compiled RPMs are placed in: **\~/rpmbuild/RPMS/noarch**:

    $ ls -la ~/rpmbuild/RPMS/noarch/
    total 1732
    drwxr-xr-x. 2 jc jc    4096 May 28 16:53 .
    drwxr-xr-x. 3 jc jc    4096 May 28 16:53 ..
    -rw-rw-r--. 1 jc jc   17149 May 28 16:53 aeolus-all-0.9.0-0.20120528065313gite451adc.fc16.noarch.rpm
    -rw-rw-r--. 1 jc jc 1587482 May 28 16:53 aeolus-conductor-0.9.0-0.20120528065313gite451adc.fc16.noarch.rpm
    -rw-rw-r--. 1 jc jc   25986 May 28 16:53 aeolus-conductor-daemons-0.9.0-0.20120528065313gite451adc.fc16.noarch.rpm
    -rw-rw-r--. 1 jc jc  100546 May 28 16:53 aeolus-conductor-devel-0.9.0-0.20120528065313gite451adc.fc16.noarch.rpm
    -rw-rw-r--. 1 jc jc   21889 May 28 16:53 aeolus-conductor-doc-0.9.0-0.20120528065313gite451adc.fc16.noarch.rpm
</div>

<br />

<div class="section-grouping">

### Build Oz

#### 1. Install the required development packages:

    $ sudo yum install gcc git make rpm-build

#### 2. Clone the Oz git repository

    $ git clone git://github.com/clalancette/oz.git

#### 3. Build the RPMs

    $ cd oz
    $ make rpm

The RPMs are built and placed in **\~/rpmbuild/RPMS**, under either the
**i386** or **x86\_64** subdirectory, depending upon your architecture:

    $ ls -l ~/rpmbuild/RPMS/x86_64/oz-*
    -rw-r--r--. 1 jc jc 283452 Apr 21 20:19 /home/jc/rpmbuild/RPMS/x86_64/oz-0.3.0-1.fc14.x86_64.rpm
    -rw-r--r--. 1 jc jc   2060 Apr 21 20:19 /home/jc/rpmbuild/RPMS/x86_64/oz-debuginfo-0.3.0-1.fc14.x86_64.rpm

</div>

<br />

<div class="section-grouping">

### Build ImageFactory

#### 1. Install the required development packages:

    $ sudo yum install gcc git make rpm-build

#### 2. Clone the Image Factory git repository

    $ git clone git://github.com/aeolusproject/imagefactory.git

#### 3. Build the RPM

    $ cd imagefactory
    $ make rpm

The Image Factory RPM will be placed in **\~/rpmbuild/RPMS/noarch**:

    $ ls -la ~/rpmbuild/RPMS/noarch/im*
    -rw-r--r--. 1 jc jc 139914 Aug 22 15:24 imagefactory-0.4.1_55_g9203de5-1.fc14.noarch.rpm

</div>

<br />

<div class="section-grouping">

### Build Image Warehouse

#### 1. Install git and gperf

    $ sudo yum install git gperf

#### 2. Clone the Image Warehouse git repository

    $ git clone git://git.fedorahosted.org/iwhd.git

#### 3. Install its dependencies

    $ cd iwhd
    $ sudo yum install $(grep BuildReq iwhd.spec.in|sed 's/.*: //')

#### 4. Build the RPMs

    $ cd iwhd
    $ ./bootstrap
    $ ./configure --quiet
    $ make rpm

The Image Warehouse (iwhd) RPMs are placed in **\~/rpmbuild/RPMS**,
under either the **i386** or **x86\_64** subdirectory, depending upon
your architecture:

    $ ls -la ~/rpmbuild/RPMS/x86_64/iwhd-*
    -rw-r--r--. 1 jc jc 127244 Apr 21 21:34 /home/jc/rpmbuild/RPMS/x86_64/iwhd-0.93.5.adc3-1.fc14.x86_64.rpm
    -rw-r--r--. 1 jc jc 567404 Apr 21 21:34 /home/jc/rpmbuild/RPMS/x86_64/iwhd-debuginfo-0.93.5.adc3-1.fc14.x86_64.rpm

</div>

<br />

<div class="section-grouping">

### Build Audrey

#### 1. Install the required development packages:

    $ sudo yum install git

#### 2. Clone the Audrey git repository

    $ git clone git://github.com/aeolusproject/audrey.git

#### 3. Build the RPMs

    $ cd audrey/configserver
    $ rake rpm

The Audrey config server RPM is placed in **\~/rpmbuild/RPMS**, under
either the **i386** or **x86\_64** subdirectory, depending upon your
architecture:

    $ ls -la ~/rpmbuild/RPMS/x86_64/aeolus-config*
    -rw-r--r--. 1 jc jc 20672 Apr 22 00:49 /home/jc/rpmbuild/RPMS/x86_64/aeolus-configserver-0.1.0-1.fc14.x86_64.rpm

</div>

<br />

<div class="section-grouping">

Instructions for building external dependencies
-----------------------------------------------

*This is not always needed, but is useful to have instructions for.*

### Build libdeltacloud

Web site:
[http://www.deltacloud.org](http://www.deltacloud.org "Deltacloud home page")

#### 1. Install the required development packages:

    $ sudo yum install git

#### 2. Clone the libdeltacloud git repository

    $ git clone git://git.fedorahosted.org/deltacloud/libdeltacloud.git

#### 3. Build the RPMs

    $ cd libdeltacloud
    $ ./autogen.sh
    $ ./configure --quiet
    $ make rpm

The libdeltacloud RPMs are placed in **\~/rpmbuild/RPMS**, under either
the **i386** or **x86\_64** subdirectory, depending upon your
architecture:

    $ ls -la ~/rpmbuild/RPMS/x86_64/libdeltacloud-*
    -rw-r--r--. 1 jc jc 32680 Apr 22 12:59 /home/jc/rpmbuild/RPMS/x86_64/libdeltacloud-0.7-1.fc14.x86_64.rpm
    -rw-r--r--. 1 jc jc 68088 Apr 22 12:59 /home/jc/rpmbuild/RPMS/x86_64/libdeltacloud-debuginfo-0.7-1.fc14.x86_64.rpm
    -rw-r--r--. 1 jc jc  7600 Apr 22 12:59 /home/jc/rpmbuild/RPMS/x86_64/libdeltacloud-devel-0.7-1.fc14.x86_64.rpm

</div>
