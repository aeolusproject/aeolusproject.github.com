---
title: Aeolus Configure
layout: page
title: "Aeolus Configure"
summary: "Aeolus Configure"
---
{::options parse_block_html="true" /}

Aeolus Configure
================

<div class="warning">
**NOTE:** This page is about the scripts **aeolus-configure**, and
**aeolus-cleanup**, rather than instructions for configuring Aeolus
itself.

If you are looking for Aeolus configuration instructions, [this
page](use_it.html "Use Aeolus Effectively") should get you started.
</div>
<br />

<div class="section-grouping">
Summary
-------

**Configure** is a high level, parameterized utility for installing and
configuring various Aeolus components.

-   [Goals](#goals)
-   [Use Cases](#usecases)
-   [Current Design](#design)
-   [High Level Requirements](#reqs)
-   [Tasks](#tasks)
</div>
<br />

<div class="section-grouping">
Goals
-----

-   Provide a high level interface for system administrators and
    developers, to install and configure various Aeolus components in a
    multi-machine environment, including:

    -   Deltacloud core
    -   Conductor
    -   Image Warehouse (iwhd)
    -   Image Builder
    -   Database (PostgreSQL)

-   Provide a high level interface to initialize and import cloud data
    for use in Aeolus, including:

    -   Cloud Providers
    -   Cloud Provider Accounts
    -   Existing and/or to-be-built templates, images, and deployments
    -   Instances

-   Provide simple command line utilities wrapping this interface to
    allow system administrators to select which components to install,
    where to install them, and configure data to be present on
    installation.

-   Take care of all of the low level details of setting up the various
    Aeolus components, including but not limited to setting up the
    platform needed to run Aeolus, configure the communication
    mechanisms between components, verifying security and other policies
    are in place to allow component operation, and printing any error or
    warning messages and gracefully terminating if anything fails.

-   Provide a **single** simplified command to install and completely
    configure Aeolus from scratch including but not limited to:

    -   setting up the correct repositories
    -   installing the aeolus components
    -   configuring and running the necessary services
    -   Prompting the user for cloud account credentials, instance
        details, and other seed data

-   Make all this functionality available via Puppet so as to accurately
    represent aeolus dependencies on a multi-machine aeolus install and
    to be able to be pulled into existing puppet deployments.
</div>
<br />

<div class="section-grouping">
Use Cases
---------

-   Bob the developer has checked out all the aeolus components from the
    source git, has built and installed all the rpms, and simply wants a
    way to setup a default aeolus configuration. He runs
    aeolus-configure which makes sure the correct components are
    inplace, sets up the default config and he's good to go

-   Sally the sys admin has existing cobbler and puppetmaster servers
    running and wants to provision some additional machines to run the
    image builder and warehouse. She imports the aeolus module into her
    puppet recipe and uses it to setup/install/configure iwhd and
    imagefactory. She then uses it to automatically create and deploy a
    few templates/images to be available upon installation right within
    her aeolus configuration recipe.

-   Joe is a relatively new cloud user who has signed up for EC2 and
    Rackspace via their corresponding web sites. He wants to use the
    same tooling to deploy instances for both but wants to do so in the
    most simple fashion. He installs aeolus-configure via 'rpm -ivh
    http://' and runs aeolus-install. This prompts him for his cloud
    credentials and then proceeds to setup the yum repositories, install
    the packages, and configure all aeolus components locally,
    automatically setting up the specified providers, and importing
    templates/images data. He can then login to the conductor ui and
    with one or two clicks, launch instances.

-   Janet has a few machines locally which she wants to use to run
    various aeolus components that are able to work with local existing
    security services and with an image builder and factory already
    setup in the cloud. She creates a puppet recipe on her local
    configuration server, pulling in aeolus-configure and creates
    profiles for her various machines w/ whatever aeolus subcomponents
    are to be installed on them. Upon installation, the aeolus recipe
    uses the ip address of each machine each that component is installed
    on to configure the communication channels

-   Michael wants to creating tooling around the aeolus api but is not
    sure the exact environment which his tooling will be deployed on or
    where in the world it will be deployed to. He uses aeolus-configure
    to install and configure in various environments, allowing him to
    parameterize package sources and installation, security
    configuration (or lack thereof), which seed data gets automatically
    created, documenation that gets installed, etc
</div>
<br />

<div class="section-grouping">
Current Design
--------------

The Aeolus configure project ships with:

-   A few puppet modules:
    -   Aeolus configuration module defining classes and functions to
        setup the aeolus components and seed data
    -   Apache (httpd) config module
    -   NTP config module
    -   OpenSSL / security config module
    -   PostgreSQL config module

    -   These can be pulled into an puppet recipe running anywhere
        (either locally via the puppet command or on a puppetmasterd
        server) to configure aeolus in any number of ways on any number
        of machines

-   Aeolus configure/cleanup puppet manifests
    -   These use the various modules to completely setup/remove aeolus
        on a local machine. These include the classes defining all the
        necessary aeolus subcomponents, and invoke the aeolus
        configuration methods to define providers, templates, and other
        data to be available immediately on startup
    -   These can be run locally via the 'puppet' cmd or via a
        puppetmaster to install aeolus on any given single machine
    -   These can be used as the basis for other scripts to
        setup/configure aeolus in any number of environments including
        those with a provisioned cluster, those in a environment
        requiring fewer aeolus subcomponents, those in environments w/
        packaging/security/other restrictions, etc

-   Binaries / scripts
    -   These are simply wrappers around the 'puppet' command, setting
        up the correct module path and loading the aeolus
        configure/cleanup puppet manifests to provide a simple means to
        install aeolus locally

The aeolus-configure rpm ships with all these components. It is
currently pulled into aeolus-conductor as a runtime dependency with the
other aeolus components, having the drawback that this does not allow
for the seperate multi-machine installation of the aeolus components
</div>
<br />

<div class="section-grouping">
High Level Requirements
-----------------------

-   Must provide a means to configure/cleanup all the Aeolus components
    and dependencies on a single machine, including:
    -   Conductor, core, Image Warehouse, Image Builder, PostgreSQL,
        libvirt, mongodb

-   Must provide a means which to configure/cleanup all the
    aforementioned components on multiple machines, ensuring
    communication and interoperability between them

-   Must provide a means which to initialize aeolus seed data

-   Must provide a parameterized interface through which to specify the
    seed data that is initialized

-   Must provide a means which to install/remove aeolus components,
    specifying alternative sources to retrieve from (yum and git
    repositories, local fs)

-   Must provide a means which to toggle various optional aeolus
    features
    -   Package installation and removal, package sources
    -   Security features (for export restrictions)
    -   Logging levels / destinations
    -   Which components are configured (for the command line binaries)

-   Must make all functionality available via command line utilities and
    a puppetmaster server

-   Provide a fully functional test suite and complete documentation
</div>
<br />

<div class="section-grouping">
Tasks
-----

-   The aeolus modules are close to supporting a multi-machine install
    as they are. Some tweaking will be needed around component
    communication, and we may want to ship additional component-specific
    configure/cleanup manifests.

-   Flags should to the command line binaries to specify which
    components are to be configured/cleaned up as well as toggling
    security features and log levels.

-   Additional functions for seed data initialization need to be created
    including those for templates, images, provider accounts, and
    instances.

-   A seperate command line utility should be built to prompt the user
    for aeolus configuration including providers account credentials,
    template packages, hwp information, etc. The result of this should
    be a yaml file which can be loaded into the aeolus recipe to
    autocreate those entities.

-   Seed data creation needs to be made more robust, return codes and
    status should be parsed out of the conductor http response and
    analyzed to determine operation status.

-   ProviderType should be parameterized to allow yum / git providers,
    and the recipe should provide the means which to install these
    repositories in a manner which the components can be installed from.

-   Greatly expand aeolus configure test suite and documentation, setup
    a builtin test harnass, for local automated e2e testing in a vm.
</div>
