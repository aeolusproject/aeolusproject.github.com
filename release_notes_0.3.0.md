---
title: Aeolus 0.3.0 - Release Notes
layout: page
title: "Aeolus 0.3.0 - Release Notes"
summary: "Aeolus 0.3.0 - Release Notes"
---
{::options parse_block_html="true" /}

Aeolus 0.3.0 Milestone - Release Notes
======================================

<div class="page-listing">
### Table of Contents

1.  [New virtualization platforms](#newplatforms "New virtualization platforms")
2.  [New features](#newfeaturesummary "New features")
3.  [Known issues still remaining](#knownissues "Known issues still remaining")
4.  [Redmine items completed](#redmine "Redmine items completed")
5.  [Issues resolved (Bugzilla issue list)](#issuesresolvedbz "Issues resolved (Bugzilla issue list)")
</div>

<div class="section-grouping">
This is a **signficant** new release of Aeolus.

It is our first to use the [new, user friendly, web
interface](screenshots.html "Aeolus Screenshots") designed by [Ken
Keiter](aeolus_team.html#tigger) and [Jonell
Lay](aeolus_team.html#jlay).

Additionally, this release brings **initial support** for **VMware
vSphere 4.1**, and tentative support for **Red Hat Enterprise
Virtualization** (RHEV).

Installation is very straightforward, with instructions on the website:

   
[http://www.aeolusproject.org/get\_it.html](http://www.aeolusproject.org/get_it.html "Get Aeolus")

Packages are available for Fedora 14 x86\_64, and RHEL 6.1 x86\_64.

All testing and bug reports are hugely appreciated, directly
contributing towards the quality of Aeolus releases and future growth.

**NOTE -** Although Aeolus is still some way from production quality, it
is suitable for testing. **Please don't use it with live data yet.**
</div>
<br />

<div class="section-grouping">
## New virtualization platforms {#newplatforms}

Initial working support has been added for:

-   **VMware vSphere 4.1**  
    Setup instructions are presently being created. Use this recent
    development snapshot of them [for
    now](http://justinclift.fedorapeople.org/aeolus/vsphere_4_1_configuration_aeolus_0_3_0.html "VMware vSphere v4.1 configuration instructions").

-   **Red Hat Enterprise Virtualization 2.x**  
    This is very early stage support, and still fragile. This should
    start to shape up from the next major Aeolus release (0.4.0).

    Initial setup instructions are
    [here](https://www.aeolusproject.org/redmine/projects/aeolus/wiki/RHEV-M_Setup "RHEV-M setup instructions").
    They are in rough initial form, with more user friendly ones due for
    creation soon.
</div>
<br />

<div class="section-grouping">
## New features {#newfeaturesummary}

-   **Completely new, user friendly, web interface**  
    Screenshots [here](screenshots.html "Aeolus 0.3.0 screenshots").

-   **Secure HTTP (https) for browser sessions**  
    The new web interface is now configured by default to use https,
    for improved security.

-   **New command line tool for managing images**  
    **aeolus-image** is a powerful, new command line tool, for managing
    Aeolus images.  
    This should allow many image management tasks to now become
    automated.

-   **Logging improvements for command line configuration tools**  
    Both aeolus-configure and aeolus-cleanup now support run time
    configurable verbosity level, though a new -v/--verbose command line
    argument.
</div>
<br />

<div class="section-grouping">
## Known issues still remaining {#knownissues}

These are known problems due to be resolved in a subsequent release:

- **The Aeolus "Getting Started Guide" needs updating for version 0.3.0.**

  -   Some parts of the Getting Started Guide, which were correct for the
      0.2.0 release, no longer work with the 0.3.0 release.
  -   The updated version of the Getting Started Guide, for this release,
      will be ready soon.

- **BZ [726428](https://bugzilla.redhat.com/show_bug.cgi?id=726428) - EC2
  push failure when deleting temporary security group**

  -   Pushes to Amazon EC2 Cloud occasionally fail with an error in the
      /var/log/imagefactory.log file.
  -   Users can still proceed to deploy images as long as they use both
      the image id and build id in their deployable xml file.
  -   Users should clean up defunct security groups resulting from a
      failed push.

- **BZ [717987](https://bugzilla.redhat.com/show_bug.cgi?id=717987) -
  Instance fails to launch with message "The requested Availability Zone
  is no longer supported..."**

  -   On occasion, Amazon changes which Availability Zones new instances
      can be launched on.
  -   This causes new instances to fail, if Aeolus has been configured to
      start them in that zone.
  -   The error message can be seen in the deltacloud daemon log file on
      the Aeolus server.
  -   At present, the workaround is to change the realm the instance is
      launched with, to only use supported availability zones. Then
      relaunch it.

- **BZ [726206](https://bugzilla.redhat.com/show_bug.cgi?id=726206) - With
  RHEV, only the Default Datacenter with Default Cluster can be used**

  -   In order to use Redhat Enterprise Virtualization Manager, hypervisor
      servers must be members of the default datacenter and default
      cluster.

- **BZ [723896](https://bugzilla.redhat.com/show_bug.cgi?id=723896) - Need
  smarter conductor RHEV-M heartbeat**

  -   Current implementation can result in overloading the RHEV-M v2.2
      server if more than five instances exist due to limitation in the
      RHEV-M api.
  -   Users should limit the number of instances running within RHEV-M.

- **BZ [725672](https://bugzilla.redhat.com/show_bug.cgi?id=725672) - RHEV
  instances do not report IP after being launched**

  -   Due to a limitation of the RHEV 2.2 API, the IP displayed for
      instances never progresses past "pending".

- **BZ [723894](https://bugzilla.redhat.com/show_bug.cgi?id=723894) -
  VMware deployments to low performance datastores error out**

  -   Low performance datastores are not recommend due to poor
      performance.

- **BZ [723897](https://bugzilla.redhat.com/show_bug.cgi?id=723897) -
  Unable to build RHEV-M and VMware at the same time with aeolus-image**

  -   Users should not attempt to build/push images to both rhevm and
      vmware at the same time.

- **BZ [723327](https://bugzilla.redhat.com/show_bug.cgi?id=723327) -
  aeolus-push fails to push images to the correct provider when multiple,
  different sets of credentials are used**

  -   Multiple provider accounts for a single provider are not supported
      in the beta.

- **BZ [719377](https://bugzilla.redhat.com/show_bug.cgi?id=719377) -
  Guests built for VMware/rhevm allow ssh as root with default password**

  -   Users should specify the root password when building templates for
      rhevm or vmware:

          <os>
            <name>RHEL-6</name>
            <version>1</version>
            <arch>x86_64</arch>
            <install type='iso'>
              <iso>http://path/to/path/EC2.iso</iso>
            </install>
            <rootpw>myRootPasswd</rootpw>
          </os>

- **BZ [719972](https://bugzilla.redhat.com/show_bug.cgi?id=719972) - Need
  documentation around the Oz tdl, for creating custom templates**

  -   Due to be created soon, with examples.
</div>
<br />

<div class="section-grouping">
## Redmine items completed {#redmine}

-   **Redmine
    [1914](https://www.aeolusproject.org/redmine/issues/1914)** - Remove
    unimplemented admin settings
-   **Redmine
    [1882](https://www.aeolusproject.org/redmine/issues/1882)** -
    Find\_index method doesn't find breadcrumb for slice! method
-   **Redmine
    [1870](https://www.aeolusproject.org/redmine/issues/1870)** -
    Conductor supports HWPs with nil attributes
-   **Redmine
    [1869](https://www.aeolusproject.org/redmine/issues/1869)** - Build
    imagefactory 0.2.2
-   **Redmine
    [1866](https://www.aeolusproject.org/redmine/issues/1866)** - Create
    config file for aeolus-cli if one doesn't exist
-   **Redmine
    [1845](https://www.aeolusproject.org/redmine/issues/1845)** - As a
    user, I would like the look of tab navigation to match that of the
    visual designs
-   **Redmine
    [1844](https://www.aeolusproject.org/redmine/issues/1844)** - As a
    self service user, I would like permission to launch deployables in
    all pools by default
-   **Redmine
    [1830](https://www.aeolusproject.org/redmine/issues/1830)** - When
    admin is adding new suggested deployables, warn if the URL they
    enter doesn't resolve to a valid XML file
-   **Redmine
    [1809](https://www.aeolusproject.org/redmine/issues/1809)** -
    aeolus-list
-   **Redmine
    [1799](https://www.aeolusproject.org/redmine/issues/1799)** - As
    RCM, I have access to updated packages in brew & a list of NEVRs for
    the rpms that need to be included
-   **Redmine
    [1796](https://www.aeolusproject.org/redmine/issues/1796)** - As a
    conductor/rhev-m user, I can launch a deployable on RHEV-M
-   **Redmine
    [1790](https://www.aeolusproject.org/redmine/issues/1790)** - As a
    conductor/rhev-m user, when I push an image the image is exported as
    a template in rhevm that is launchable
-   **Redmine
    [1784](https://www.aeolusproject.org/redmine/issues/1784)** -
    Removed the legacy Configure code whichs adds aeolus repos to
    /etc/yum.repos.d/
-   **Redmine
    [1761](https://www.aeolusproject.org/redmine/issues/1761)** - Fix JS
    method for selecting Provider in New ProviderAccount view
-   **Redmine
    [1683](https://www.aeolusproject.org/redmine/issues/1683)** - As a
    developer, I have an understanding of the IPA/SSO integration
    strategy so I can execute on future work
-   **Redmine
    [1681](https://www.aeolusproject.org/redmine/issues/1681)** -
    Resolve critical rubygem-rails bug
-   **Redmine
    [1663](https://www.aeolusproject.org/redmine/issues/1663)** - As an
    aeolus-conductor developer, there is an automated sequence to build
    an srpm using mock and trigger staged QE tests to pass rpm to
    fp-testing repo
-   **Redmine
    [1658](https://www.aeolusproject.org/redmine/issues/1658)** - Broken
    translations in next, after merge of newui
-   **Redmine
    [1650](https://www.aeolusproject.org/redmine/issues/1650)** - As an
    admin, I have a cli tool for building and importing images
-   **Redmine
    [1631](https://www.aeolusproject.org/redmine/issues/1631)** - As an
    end-user, pulp is not installed by an installation of aeolus-all
-   **Redmine
    [1618](https://www.aeolusproject.org/redmine/issues/1618)** - Check
    if pool has set up quota in pretty/filter view
-   **Redmine
    [1597](https://www.aeolusproject.org/redmine/issues/1597)** -
    Prepare to remove old/unnecessary components
-   **Redmine
    [1595](https://www.aeolusproject.org/redmine/issues/1595)** -
    building aeolus conductor from src instructions are no longer
    accurate
-   **Redmine
    [1575](https://www.aeolusproject.org/redmine/issues/1575)** -
    Implement loading/switching of AJAX partials for pretty/grid views
    on any pages which offer both
-   **Redmine
    [1566](https://www.aeolusproject.org/redmine/issues/1566)** -
    dbomatic periodically crashes (the next iteration)
-   **Redmine
    [1563](https://www.aeolusproject.org/redmine/issues/1563)** - As an
    aeous developer I want to work against puppet components in the
    upstream project
-   **Redmine
    [1524](https://www.aeolusproject.org/redmine/issues/1524)** -
    Dependency analysis for rails 3 upgrade next sprint
-   **Redmine
    [1514](https://www.aeolusproject.org/redmine/issues/1514)** - As a
    admin of machines running Fedora / Java stacks, I would like to see
    jruby in Fedora so as to eventually support aeolus on my platform
-   **Redmine
    [1487](https://www.aeolusproject.org/redmine/issues/1487)** - As an
    admin I would like more options to configure aeolus-configure
    logging
-   **Redmine
    [1473](https://www.aeolusproject.org/redmine/issues/1473)** - As a
    user of aeolus-configure, web requests should have consistent error
    handling/management
-   **Redmine
    [1458](https://www.aeolusproject.org/redmine/issues/1458)** - Fix
    public redmine issues
-   **Redmine
    [1453](https://www.aeolusproject.org/redmine/issues/1453)** - As a
    developer, I want the Rails application to know if the user's
    browser supports javascript
-   **Redmine
    [1451](https://www.aeolusproject.org/redmine/issues/1451)** - As a
    developer, I want ensure that my controllers adhere to REST
    principles
-   **Redmine
    [1449](https://www.aeolusproject.org/redmine/issues/1449)** - As a
    developer, I need the CRUD actions in the pools, deployments, and
    instances controllers to be able to render only a partial of the
    page when the request is made by XHR
-   **Redmine
    [1447](https://www.aeolusproject.org/redmine/issues/1447)** - As a
    developer, I need the CRUD actions in the pools, deployments, and
    instances controllers to respond\_to :json requests
-   **Redmine
    [1444](https://www.aeolusproject.org/redmine/issues/1444)** - As a
    developer, I want to simplify the controller namespacing
-   **Redmine
    [1439](https://www.aeolusproject.org/redmine/issues/1439)** -
    deltacloud-core-0.3.0 available in f14
-   **Redmine
    [1429](https://www.aeolusproject.org/redmine/issues/1429)** - As a
    team member, I have seen the QE automation suite in action and can
    run it myself
-   **Redmine
    [1406](https://www.aeolusproject.org/redmine/issues/1406)** - As a
    user, When I destroy a pool, I dont want to destroy Hardware Profile
-   **Redmine
    [1402](https://www.aeolusproject.org/redmine/issues/1402)** - RHEV-M
    issue encountered by iwhd
-   **Redmine
    [1386](https://www.aeolusproject.org/redmine/issues/1386)** - As a
    mainter of aeolus-conductor, there is a scripted way to synchronize
    the results of a mock build with the correct fedora public repo on
    fedorapeople
-   **Redmine
    [1384](https://www.aeolusproject.org/redmine/issues/1384)** - As an
    internal user of redmine, I can verify that reset password works as
    expected
-   **Redmine
    [1383](https://www.aeolusproject.org/redmine/issues/1383)** - As an
    internal user of redmine,I will get an email when I request a
    password change, create a new account, etc
-   **Redmine
    [1382](https://www.aeolusproject.org/redmine/issues/1382)** - As an
    end user, I can configure an aeolus-conductor machine by specifying
    the layout in yml. (external puppet node)
-   **Redmine
    [1381](https://www.aeolusproject.org/redmine/issues/1381)** - As an
    end user, I can launch an instance in RHEV
-   **Redmine
    [1379](https://www.aeolusproject.org/redmine/issues/1379)** - As an
    admin, I have access to imagefactory (0.1.7 +)
-   **Redmine
    [1378](https://www.aeolusproject.org/redmine/issues/1378)** - As an
    admin, I have libdeltacloud (0.8) + new condor (7.6.0 + patches for
    libdeltacloud 0.8 compatibility)
-   **Redmine
    [1374](https://www.aeolusproject.org/redmine/issues/1374)** - As a
    community member, I can see 'bleeding edge' rpms in the new repo
    locations. (peers to 0.2.0)
-   **Redmine
    [1363](https://www.aeolusproject.org/redmine/issues/1363)** - As a
    community member, both F14 and RHEL-6 versions of 0.2.0 appear to
    work as intended
-   **Redmine
    [1363](https://www.aeolusproject.org/redmine/issues/1363)** -
    rubygem\_rsolr 1.0.0 package in conductor 0.2.0 F14 repo is busted
-   **Redmine
    [1342](https://www.aeolusproject.org/redmine/issues/1342)** - As a
    user, I want the application to be capable of retaining the state of
    pages I've viewed
-   **Redmine
    [1341](https://www.aeolusproject.org/redmine/issues/1341)** - As a
    user, I want the application to include a breadcrumb trail for site
    navigation
-   **Redmine
    [1339](https://www.aeolusproject.org/redmine/issues/1339)** - As an
    Infrastructure Consumer, I want to review the operational status of
    a Deployment such as uptime, resource consumption, etc
-   **Redmine
    [1318](https://www.aeolusproject.org/redmine/issues/1318)** - Wrap
    up the public redmine installation
-   **Redmine
    [1303](https://www.aeolusproject.org/redmine/issues/1303)** - apply
    imagefactory-v0.5-amis.patch & build in brew
-   **Redmine
    [1302](https://www.aeolusproject.org/redmine/issues/1302)** - apply
    imcleod's ec2-repofix patch & build in brew
-   **Redmine
    [1272](https://www.aeolusproject.org/redmine/issues/1272)** - Review
    the patches for \#1270
-   **Redmine
    [1245](https://www.aeolusproject.org/redmine/issues/1245)** - Add
    some last minute in-place changes for a demo
-   **Redmine
    [1241](https://www.aeolusproject.org/redmine/issues/1241)** - As an
    end-user of aeolus, I want https on by default, with no other
    security features enabled
-   **Redmine
    [1230](https://www.aeolusproject.org/redmine/issues/1230)** - Verify
    localization infrastructure is functional
-   **Redmine
    [1192](https://www.aeolusproject.org/redmine/issues/1192)** -
    Template creation should generate assembly
-   **Redmine
    [1160](https://www.aeolusproject.org/redmine/issues/1160)** - As a
    team member, I have constant access to the internal bleeding edge
    yum repo
-   **Redmine
    [1142](https://www.aeolusproject.org/redmine/issues/1142)** -
    692161: Fix how /etc/init.d/solr reports status
-   **Redmine
    [1112](https://www.aeolusproject.org/redmine/issues/1112)** - Write
    up design doc for installation and puppet's role in same
-   **Redmine
    [1095](https://www.aeolusproject.org/redmine/issues/1095)** - As a
    scrum master, I have a way import & sync content from bugzilla
-   **Redmine
    [1082](https://www.aeolusproject.org/redmine/issues/1082)** - As an
    SA I want to create a Provider definition
-   **Redmine
    [1081](https://www.aeolusproject.org/redmine/issues/1081)** - As an
    SA I want to review the user who launched a deployment in the pool
-   **Redmine
    [1078](https://www.aeolusproject.org/redmine/issues/1078)** - As an
    SA I want to enable the pool so that it can be used for a deployment
-   **Redmine
    [1077](https://www.aeolusproject.org/redmine/issues/1077)** - As an
    SA I want to delete an existing pool
-   **Redmine
    [1075](https://www.aeolusproject.org/redmine/issues/1075)** - As an
    SA I want to create a pool
-   **Redmine
    [1074](https://www.aeolusproject.org/redmine/issues/1074)** - As an
    SA I want to create 3 pools that can be used for the development,
    test and production use of the applications/services that will
    utilize resources in the cloud
-   **Redmine
    [1040](https://www.aeolusproject.org/redmine/issues/1040)** - As an
    Infrastructure Consumer, I want to review the operational status of
    a Deployment such as uptime, resource consumption, etc
-   **Redmine
    [1013](https://www.aeolusproject.org/redmine/issues/1013)** - As an
    SA, I want to update an existing Deployable definition
-   **Redmine
    [1010](https://www.aeolusproject.org/redmine/issues/1010)** - As an
    SA, I want to delete an existing Deployable
-   **Redmine
    [1009](https://www.aeolusproject.org/redmine/issues/1009)** - As an
    SA, I want to review running Deployments that were derived from a
    Deployable
-   **Redmine [995](https://www.aeolusproject.org/redmine/issues/995)**
    \- As an SA, I want to create a Deployable definition
-   **Redmine [945](https://www.aeolusproject.org/redmine/issues/945)**
    \- As an SA, I want to create a Template
-   **Redmine [888](https://www.aeolusproject.org/redmine/issues/888)**
    \- As a system administrator, I want Conductor to work with SELinux
    turned on
-   **Redmine [751](https://www.aeolusproject.org/redmine/issues/751)**
    \- aeolus-configure output should be logged
-   **Redmine [680](https://www.aeolusproject.org/redmine/issues/680)**
    \- As a community member, I have access to a working aeolus ami
-   **Redmine [633](https://www.aeolusproject.org/redmine/issues/633)**
    \- As a sys admin, I want to configure location for factory connector
-   **Redmine [495](https://www.aeolusproject.org/redmine/issues/495)**
    \- As a member of the aeolus community, I would like the public
    aeolus redmine site to be production ready
-   **Redmine [459](https://www.aeolusproject.org/redmine/issues/459)**
    \- As a user I want to see instances running in a pool
-   **Redmine [409](https://www.aeolusproject.org/redmine/issues/409)**
    \- I want to launch a deployable in the cloud
-   **Redmine [315](https://www.aeolusproject.org/redmine/issues/315)**
    \- As a RHEL 6 user, I am able to cleanly install conductor
-   **Redmine [58](https://www.aeolusproject.org/redmine/issues/58)** -
    As an admin, I would like to be able to deploy Aeolus on RHEL 6
</div>
<br />

<div class="section-grouping">
## Issues resolved (Bugzilla issue list) {#issuesresolvedbz}

-   **BZ [641385](https://bugzilla.redhat.com/show_bug.cgi?id=641385)**
    \- Setups with lots of images/realms/providers/provider accounts may
    be slow
-   **BZ [723585](https://bugzilla.redhat.com/show_bug.cgi?id=723585)**
    \- Create generic hardware profiles and remove provider specific ones
-   **BZ [722340](https://bugzilla.redhat.com/show_bug.cgi?id=722340)**
    \- Conductor service does not start in aeolus-configure script
-   **BZ [721333](https://bugzilla.redhat.com/show_bug.cgi?id=721333)**
    \- Alert count not reflected correctly in UI
-   **BZ [721036](https://bugzilla.redhat.com/show_bug.cgi?id=721036)**
    \- aeolus-configure fails in latest installs,
    rubygem-image\_factory\_connector has failures: true
-   **BZ [720780](https://bugzilla.redhat.com/show_bug.cgi?id=720780)**
    \- RHEL 6.1 jeos image from EC2 tracker
-   **BZ [720772](https://bugzilla.redhat.com/show_bug.cgi?id=720772)**
    \- Enable/Disable Pools does not do anything.. leave it in the webui?
-   **BZ [720706](https://bugzilla.redhat.com/show_bug.cgi?id=720706)**
    \- aeolus-image list --images, include provider type
-   **BZ [720645](https://bugzilla.redhat.com/show_bug.cgi?id=720645)**
    \- Deployment with long name gets truncated.
-   **BZ [720426](https://bugzilla.redhat.com/show_bug.cgi?id=720426)**
    \- Deployment launch form is ugly
-   **BZ [720342](https://bugzilla.redhat.com/show_bug.cgi?id=720342)**
    \- Provider account quota is not enforced
-   **BZ [720337](https://bugzilla.redhat.com/show_bug.cgi?id=720337)**
    \- Pool family quota is not enforced
-   **BZ [720312](https://bugzilla.redhat.com/show_bug.cgi?id=720312)**
    \- Hardware profile page displayed while trying to sort provider
    account name
-   **BZ [719723](https://bugzilla.redhat.com/show_bug.cgi?id=719723)**
    \- Can't toggle collapse icons (in text)
-   **BZ [719590](https://bugzilla.redhat.com/show_bug.cgi?id=719590)**
    \- Aeolus does not start properly after reboot
-   **BZ [719481](https://bugzilla.redhat.com/show_bug.cgi?id=719481)**
    \- Need to install gem rbvmomi
-   **BZ [719383](https://bugzilla.redhat.com/show_bug.cgi?id=719383)**
    \- New deployable missing check on hw profile names
-   **BZ [719227](https://bugzilla.redhat.com/show_bug.cgi?id=719227)**
    \- Uninitialized constant Deltacloud::BackendError : On adding
    provider account on RHEL
-   **BZ [719122](https://bugzilla.redhat.com/show_bug.cgi?id=719122)**
    \- Need service restart after configuring iwhd conf for rhev
-   **BZ [719055](https://bugzilla.redhat.com/show_bug.cgi?id=719055)**
    \- Unable to deploy 32-bit Amazon Images
-   **BZ [719011](https://bugzilla.redhat.com/show_bug.cgi?id=719011)**
    \- Oz aborted the build after going 300 seconds with no disk activity
-   **BZ [718968](https://bugzilla.redhat.com/show_bug.cgi?id=718968)**
    \- Provider field blank in deployments
-   **BZ [718712](https://bugzilla.redhat.com/show_bug.cgi?id=718712)**
    \- Typo error: "vant should be replaced by want"
-   **BZ [718680](https://bugzilla.redhat.com/show_bug.cgi?id=718680)**
    \- Unable to delete deployments
-   **BZ [718354](https://bugzilla.redhat.com/show_bug.cgi?id=718354)**
    \- aeolus-image rails.log exception, RoutingError No route matching
    "/builds/update\_status"
-   **BZ [718331](https://bugzilla.redhat.com/show_bug.cgi?id=718331)**
    \- Building x86\_64 F15 Image fails on RHEVM/VMWARE
-   **BZ [718325](https://bugzilla.redhat.com/show_bug.cgi?id=718325)**
    \- view deployable def does not work
-   **BZ [718246](https://bugzilla.redhat.com/show_bug.cgi?id=718246)**
    \- aeolus configure adding erroneous entries to /etc/fstab
-   **BZ [718216](https://bugzilla.redhat.com/show_bug.cgi?id=718216)**
    \- Unable to build simple RHEL6.1 images
-   **BZ [718153](https://bugzilla.redhat.com/show_bug.cgi?id=718153)**
    \- frontend: undefined local variable or method \`brealms' for \# :
    when launching instances for all realms
-   **BZ [717967](https://bugzilla.redhat.com/show_bug.cgi?id=717967)**
    \- solr is not shutting down correctly
-   **BZ [717963](https://bugzilla.redhat.com/show_bug.cgi?id=717963)**
    \- cloud ssh key for the instance shall be available for running
    instances
-   **BZ [717673](https://bugzilla.redhat.com/show_bug.cgi?id=717673)**
    \- tracker bug for iteration three fixed bugs
-   **BZ [717634](https://bugzilla.redhat.com/show_bug.cgi?id=717634)**
    \- IP address of a launched instance is not displayed
-   **BZ [717585](https://bugzilla.redhat.com/show_bug.cgi?id=717585)**
    \- Multiple Image displayed for Invalid credentials.
-   **BZ [717571](https://bugzilla.redhat.com/show_bug.cgi?id=717571)**
    \- Remove selected button in pool family does not work.
-   **BZ [717569](https://bugzilla.redhat.com/show_bug.cgi?id=717569)**
    \- Pool Family sorting does not work
-   **BZ [717542](https://bugzilla.redhat.com/show_bug.cgi?id=717542)**
    \- Hardware profile page is loaded when clicked on Realm
-   **BZ [717541](https://bugzilla.redhat.com/show_bug.cgi?id=717541)**
    \- Need proper validation messages if images to be stopped are not
    selected
-   **BZ [717538](https://bugzilla.redhat.com/show_bug.cgi?id=717538)**
    \- Pools delete button not working
-   **BZ [717533](https://bugzilla.redhat.com/show_bug.cgi?id=717533)**
    \- Admin shall not be able to delete itself.
-   **BZ [717276](https://bugzilla.redhat.com/show_bug.cgi?id=717276)**
    \- Adding a rhevm provider account w/ bad username causes proxy error
-   **BZ [717219](https://bugzilla.redhat.com/show_bug.cgi?id=717219)**
    \- 0.2.0 install Error: Package:
    rubygem-right\_aws-2.0.0-1.fc14.noarch
-   **BZ [717176](https://bugzilla.redhat.com/show_bug.cgi?id=717176)**
    \- Frontend: undefined method \`kind' for nil:NilClass : when
    launching instance
-   **BZ [717172](https://bugzilla.redhat.com/show_bug.cgi?id=717172)**
    \- Realm Mapping deletion does not work
-   **BZ [717150](https://bugzilla.redhat.com/show_bug.cgi?id=717150)**
    \- Undefined method \`storage' for \# on adding VMWare Provider on
    Fedora
-   **BZ [716958](https://bugzilla.redhat.com/show_bug.cgi?id=716958)**
    \- Aeolus configure error:
    /Stage[main]/Aeolus::Conductor/Rails::Migrate::Db[migrate\_aeolus\_database]/Exec[migrate\_rails\_database]/
-   **BZ [716948](https://bugzilla.redhat.com/show_bug.cgi?id=716948)**
    \- Aeolus-configure error:
    /Stage[main]/Aeolus::Conductor::Seed\_data/Aeolus::Provider
-   **BZ [716866](https://bugzilla.redhat.com/show_bug.cgi?id=716866)**
    \- admin user can be created twice with different mail id
-   **BZ [716296](https://bugzilla.redhat.com/show_bug.cgi?id=716296)**
    \- Monitor, deployment list view , new deployments does not work
-   **BZ [716294](https://bugzilla.redhat.com/show_bug.cgi?id=716294)**
    \- pool quotas not not registered or enforced in new ui
-   **BZ [716286](https://bugzilla.redhat.com/show_bug.cgi?id=716286)**
    \- Could not find a matching backend provider
-   **BZ [715601](https://bugzilla.redhat.com/show_bug.cgi?id=715601)**
    \- match provider names between image factory and deltacloud
-   **BZ [715506](https://bugzilla.redhat.com/show_bug.cgi?id=715506)**
    \- aeolus-configure runs into multiple errors
-   **BZ [715218](https://bugzilla.redhat.com/show_bug.cgi?id=715218)**
    \- Install aeolus-all gives "Error: Package:
    rubygem-aws-2.5.2-1.fc14.noarch (updates)Requires:
    rubygem(right\_http\_connection)"
-   **BZ [715087](https://bugzilla.redhat.com/show_bug.cgi?id=715087)**
    \- match provider names between image factory and deltacloud
-   **BZ [714940](https://bugzilla.redhat.com/show_bug.cgi?id=714940)**
    \- URL Validation required while adding new deployable
-   **BZ [714935](https://bugzilla.redhat.com/show_bug.cgi?id=714935)**
    \- "No Matching Provider Hardware Profiles Could be found" is
    displayed when clicked on New Hardware profile
-   **BZ [714930](https://bugzilla.redhat.com/show_bug.cgi?id=714930)**
    \- Select:All/None option for selecting/deselecting multiple values
    should be made available in Users and Suggested deployables section
-   **BZ [714927](https://bugzilla.redhat.com/show_bug.cgi?id=714927)**
    \- Realm gets created with same name- Realm name validation required
-   **BZ [714816](https://bugzilla.redhat.com/show_bug.cgi?id=714816)**
    \- Provider account, editing an account fails
-   **BZ [714790](https://bugzilla.redhat.com/show_bug.cgi?id=714790)**
    \- Default non admin users have no rights, roles or privileges in new
    UI
-   **BZ [714787](https://bugzilla.redhat.com/show_bug.cgi?id=714787)**
    \- Fail error w/ green check box
-   **BZ [714757](https://bugzilla.redhat.com/show_bug.cgi?id=714757)**
    \- /usr/bin/rake dc:prepare\_repos returned 1 instead of one of [0]
-   **BZ [714287](https://bugzilla.redhat.com/show_bug.cgi?id=714287)**
    \- Uptime reported for instances that do not start
-   **BZ [714281](https://bugzilla.redhat.com/show_bug.cgi?id=714281)**
    \- getSchema error when building a template
-   **BZ [714276](https://bugzilla.redhat.com/show_bug.cgi?id=714276)**
    \- aeolus-image list --builds \$image\_id has an error
-   **BZ [714269](https://bugzilla.redhat.com/show_bug.cgi?id=714269)**
    \- /var/lib/aeolus-conductor/jobs not created, not owned by aeolus
-   **BZ [714052](https://bugzilla.redhat.com/show_bug.cgi?id=714052)**
    \- 'PGError: ERROR: null value in column "realm\_or\_provider\_id"
    violates not-null constraint" when Add mapping to realm
-   **BZ [713418](https://bugzilla.redhat.com/show_bug.cgi?id=713418)**
    \- Clicking on administrator/monitor tab does not display control
    panels drop-down list
-   **BZ [713048](https://bugzilla.redhat.com/show_bug.cgi?id=713048)**
    \- New Deployement : getaddrinfo: Name or service not known (Error
    should be handled by proper message )
-   **BZ [713045](https://bugzilla.redhat.com/show_bug.cgi?id=713045)**
    \- Delete a realm says "Please make a selection before clicking
    Delete button"
-   **BZ [713010](https://bugzilla.redhat.com/show_bug.cgi?id=713010)**
    \- Changing provider type in New Provider Account page causes error
-   **BZ [713010](https://bugzilla.redhat.com/show_bug.cgi?id=711294)**
    \- RFE : Remove failed option on instances should remove the
    erroneous instances not just stop them.
-   **BZ [713010](https://bugzilla.redhat.com/show_bug.cgi?id=711225)**
    \- Dbomatic fails to start after install
-   **BZ [711112](https://bugzilla.redhat.com/show_bug.cgi?id=711112)**
    \- F14 yum errors with public production repo
-   **BZ [711084](https://bugzilla.redhat.com/show_bug.cgi?id=711084)**
    \- Hardware Profiles are not loaded in the instance launch Page
-   **BZ [710041](https://bugzilla.redhat.com/show_bug.cgi?id=710041)**
    \- Condormatic - job\_name with slashes
-   **BZ [710033](https://bugzilla.redhat.com/show_bug.cgi?id=710033)**
    \- Building image from Image fails
-   **BZ [709980](https://bugzilla.redhat.com/show_bug.cgi?id=709980)**
    \- New UI : No Logout button under new UI
-   **BZ [709817](https://bugzilla.redhat.com/show_bug.cgi?id=709817)**
    \- iwhd initscript continues on in the face of failure
-   **BZ [709598](https://bugzilla.redhat.com/show_bug.cgi?id=709598)**
    \- Deltacloud::BackendError On adding provider account
-   **BZ [709584](https://bugzilla.redhat.com/show_bug.cgi?id=709584)**
    \- Install aeolus-all doesn't install/update puppet dependency
-   **BZ [706100](https://bugzilla.redhat.com/show_bug.cgi?id=706100)**
    \- Conductor displays incorrect error message on image import
-   **BZ [701482](https://bugzilla.redhat.com/show_bug.cgi?id=701482)**
    \- Building/pushing templates may bring down warehouse
-   **BZ [700953](https://bugzilla.redhat.com/show_bug.cgi?id=700953)**
    \- AMI needs manual run of aeolus-configure
-   **BZ [699906](https://bugzilla.redhat.com/show_bug.cgi?id=699906)**
    \- EC2 credentials printed to log file
-   **BZ [699831](https://bugzilla.redhat.com/show_bug.cgi?id=699831)**
    \- Templates, building templates in us-west fails, us-east works
-   **BZ [699783](https://bugzilla.redhat.com/show_bug.cgi?id=699783)**
    \- httpd does not start after cleanup/configure, missing rpms
-   **BZ [699417](https://bugzilla.redhat.com/show_bug.cgi?id=699417)**
    \- RFE: creating buckets/key should return server response '201
    Created'
-   **BZ [698765](https://bugzilla.redhat.com/show_bug.cgi?id=698765)**
    \- Additional log files to cover in documentation
-   **BZ [698763](https://bugzilla.redhat.com/show_bug.cgi?id=698763)**
    \- Additional log files found under /var/log/condor
-   **BZ [698762](https://bugzilla.redhat.com/show_bug.cgi?id=698762)**
    \- aeolus-conductor logs are not accurate
-   **BZ [698759](https://bugzilla.redhat.com/show_bug.cgi?id=698759)**
    \- Documentation bug in CloudForms Admin Guide
-   **BZ [698753](https://bugzilla.redhat.com/show_bug.cgi?id=698753)**
    \- Please add documentation for "self-service" users and the
    difference between self-service and regular users
-   **BZ [698750](https://bugzilla.redhat.com/show_bug.cgi?id=698750)**
    \- User details
-   **BZ [698747](https://bugzilla.redhat.com/show_bug.cgi?id=698747)**
    \- "System entities" is a little too ambiguous
-   **BZ [698716](https://bugzilla.redhat.com/show_bug.cgi?id=698716)**
    \- Dbomatic periodically crashes, no clear recreate atm
-   **BZ [698689](https://bugzilla.redhat.com/show_bug.cgi?id=698689)**
    \- Instances: periodic ssh failures
-   **BZ [698510](https://bugzilla.redhat.com/show_bug.cgi?id=698510)**
    \- QE Review: Cloud Engine Administration Guide should have correct
    Bugzilla component
-   **BZ [698509](https://bugzilla.redhat.com/show_bug.cgi?id=698509)**
    \- QE Review: Assumption of familiarity with interface layout
-   **BZ [698508](https://bugzilla.redhat.com/show_bug.cgi?id=698508)**
    \- QE Review: Superfluous Index
-   **BZ [698507](https://bugzilla.redhat.com/show_bug.cgi?id=698507)**
    \- QE Review: Cloud Engine Administration Guide TYPO's
-   **BZ [698270](https://bugzilla.redhat.com/show_bug.cgi?id=698270)**
    \- RFE: allow stopped instances to be removed from webui
-   **BZ [698259](https://bugzilla.redhat.com/show_bug.cgi?id=698259)**
    \- Duplicate aeolus-configure logs
-   **BZ [697906](https://bugzilla.redhat.com/show_bug.cgi?id=697906)**
    \- Aeolus related daemons need to be turned off at ami boot
-   **BZ [697552](https://bugzilla.redhat.com/show_bug.cgi?id=697552)**
    \- Some error messages persist on next tab click
-   **BZ [697543](https://bugzilla.redhat.com/show_bug.cgi?id=697543)**
    \- Misspelled word in provider error message
-   **BZ [697478](https://bugzilla.redhat.com/show_bug.cgi?id=697478)**
    \- Templates, adding package groups to template builds fails @push
-   **BZ [696710](https://bugzilla.redhat.com/show_bug.cgi?id=696710)**
    \- Aeolus configure stops aeolus connector when reexecuted
-   **BZ [696228](https://bugzilla.redhat.com/show_bug.cgi?id=696228)**
    \- Template builds stay in queued due to missing uuid in conductor
-   **BZ [695770](https://bugzilla.redhat.com/show_bug.cgi?id=695770)**
    \- Instance creation gui needs redhat/fedora logos
-   **BZ [695489](https://bugzilla.redhat.com/show_bug.cgi?id=695489)**
    \- Aeolus deltacloudd wrapper scripts report invalid status
-   **BZ [694060](https://bugzilla.redhat.com/show_bug.cgi?id=694060)**
    \- Image imports: On importing non existent image, unhandled error is
    thrown
-   **BZ [693715](https://bugzilla.redhat.com/show_bug.cgi?id=693715)**
    \- Self Service: Once validation for user creation fails, user save
    button disappears
-   **BZ [693699](https://bugzilla.redhat.com/show_bug.cgi?id=693699)**
    \- Template build fails
-   **BZ [693669](https://bugzilla.redhat.com/show_bug.cgi?id=693669)**
    \- Account Id is blank in UI after adding a provider account
-   **BZ [693514](https://bugzilla.redhat.com/show_bug.cgi?id=693514)**
    \- aeolus-cleanup need to clean up /var/tmp and /var/lib/iwhd/images
-   **BZ [693369](https://bugzilla.redhat.com/show_bug.cgi?id=693369)**
    \- Guarantee providers created w/ one run of aeolus-configure
-   **BZ [692923](https://bugzilla.redhat.com/show_bug.cgi?id=692923)**
    \- imgfactory is not stopped by aeolus-cleanup
-   **BZ [692651](https://bugzilla.redhat.com/show_bug.cgi?id=692651)**
    \- Template build failed status should be reflected in the webui
-   **BZ [692626](https://bugzilla.redhat.com/show_bug.cgi?id=692626)**
    \- condor\_q -better shows 1 "reject your job..."
-   **BZ [692207](https://bugzilla.redhat.com/show_bug.cgi?id=692207)**
    \- aeolus-connector stop does not work
-   **BZ [692204](https://bugzilla.redhat.com/show_bug.cgi?id=692204)**
    \- Several errors in connector.log while attempting to build
    templates
-   **BZ [692190](https://bugzilla.redhat.com/show_bug.cgi?id=692190)**
    \- Error while bulding simple f13 template, libvirt\_xml =
    self.guest.install(self.app\_config["timeout"])
-   **BZ [692173](https://bugzilla.redhat.com/show_bug.cgi?id=692173)**
    \- aeolus-configure needs to verify/install libvirtd before trying to
    start it
-   **BZ [692161](https://bugzilla.redhat.com/show_bug.cgi?id=692161)**
    \- /etc/init.d/solr status returns rake info. should return status
-   **BZ [690960](https://bugzilla.redhat.com/show_bug.cgi?id=690960)**
    \- Aeolus user does not exist error on rpm install
-   **BZ [690811](https://bugzilla.redhat.com/show_bug.cgi?id=690811)**
    \- Missing mongodb-server dependency
-   **BZ [690656](https://bugzilla.redhat.com/show_bug.cgi?id=690656)**
    \- Template builds do not progress past the queued state, due to
    network error
-   **BZ [690467](https://bugzilla.redhat.com/show_bug.cgi?id=690467)**
    \- Realm: Deleting mapping of realm w/o selecting anything throws
    error
-   **BZ [690436](https://bugzilla.redhat.com/show_bug.cgi?id=690436)**
    \- Hardware Profiles sorting doesn't work
-   **BZ [690266](https://bugzilla.redhat.com/show_bug.cgi?id=690266)**
    \- Libvirtd not started, causes image-factory exception (no building)
-   **BZ [690228](https://bugzilla.redhat.com/show_bug.cgi?id=690228)**
    \- aeolus-connector failed to start with aeolus-configure
-   **BZ [690154](https://bugzilla.redhat.com/show_bug.cgi?id=690154)**
    \- Hwp page misrenders the details pane
-   **BZ [689863](https://bugzilla.redhat.com/show_bug.cgi?id=689863)**
    \- aeolus-configure should no longer deploy /etc/init.d/iwhd and
    /etc/iwhd/conf.js
-   **BZ [689442](https://bugzilla.redhat.com/show_bug.cgi?id=689442)**
    \- Field check for pool families (it accepts special chars)
-   **BZ [688924](https://bugzilla.redhat.com/show_bug.cgi?id=688924)**
    \- Push requests not sent to factory connector for EC2
-   **BZ [688706](https://bugzilla.redhat.com/show_bug.cgi?id=688706)**
    \- Update copyright to 2011
-   **BZ [688688](https://bugzilla.redhat.com/show_bug.cgi?id=688688)**
    \- Sufficient libmicrohttpd missing from RHEL 6
-   **BZ [685046](https://bugzilla.redhat.com/show_bug.cgi?id=685046)**
    \- Validation for Hardware Profile fields
-   **BZ [685039](https://bugzilla.redhat.com/show_bug.cgi?id=685039)**
    \- Creating duplicate roles need to be handled by error message
-   **BZ [685036](https://bugzilla.redhat.com/show_bug.cgi?id=685036)**
    \- Edit admin launches the deployment page
-   **BZ [685036](https://bugzilla.redhat.com/show_bug.cgi?id=684893)**
    \- RFE: provider account should show quota percentage
-   **BZ [684105](https://bugzilla.redhat.com/show_bug.cgi?id=684105)**
    \- Delete h/w Profile w/o selecting a profile :Couldn't find
    HardwareProfile
-   **BZ [683190](https://bugzilla.redhat.com/show_bug.cgi?id=683190)**
    \- Template queued status no longer appears when build is waiting
-   **BZ [682277](https://bugzilla.redhat.com/show_bug.cgi?id=682277)**
    \- Unable to ssh into instances started from conductor
-   **BZ [681977](https://bugzilla.redhat.com/show_bug.cgi?id=681977)**
    \- Ruby deprecation warning with aeolus-configure
-   **BZ [680435](https://bugzilla.redhat.com/show_bug.cgi?id=680435)**
    \- Httpd not starting after reboot
-   **BZ [679890](https://bugzilla.redhat.com/show_bug.cgi?id=679890)**
    \- Incorrect label "Username" and "Password" on "New Account
    Provider" form
-   **BZ [679147](https://bugzilla.redhat.com/show_bug.cgi?id=679147)**
    \- Template build status changes depending on which tab you have
    selected
-   **BZ [678600](https://bugzilla.redhat.com/show_bug.cgi?id=678600)**
    \- Template build marked as complete even though it failed
-   **BZ [678597](https://bugzilla.redhat.com/show_bug.cgi?id=678597)**
    \- Yum xml issues, packages getting added to template that do NOT
    exist in repository
-   **BZ [678071](https://bugzilla.redhat.com/show_bug.cgi?id=678071)**
    \- Deleting provider accounts w/ instances, needs error message.
-   **BZ [676654](https://bugzilla.redhat.com/show_bug.cgi?id=676654)**
    \- Concurrent user test fails.. deleting objects w/ one user while
    another user views object
-   **BZ [674899](https://bugzilla.redhat.com/show_bug.cgi?id=674899)**
    \- The ssh key downloaded from instance details page has formatting
    issues
-   **BZ [674661](https://bugzilla.redhat.com/show_bug.cgi?id=674661)**
    \- PGError value too long on role name field
-   **BZ [674557](https://bugzilla.redhat.com/show_bug.cgi?id=674557)**
    \- After deletion of default pool, User creation fails.
-   **BZ [669246](https://bugzilla.redhat.com/show_bug.cgi?id=669246)**
    \- Launching an instance fails in Jan 4th build
-   **BZ [667927](https://bugzilla.redhat.com/show_bug.cgi?id=667927)**
    \- Set correct iwhd path
-   **BZ [662994](https://bugzilla.redhat.com/show_bug.cgi?id=662994)**
    \- When No access key provided :"No :access\_key\_id provided"
-   **BZ [662957](https://bugzilla.redhat.com/show_bug.cgi?id=662957)**
    \- Provider Account : Field Validation errors
-   **BZ [662947](https://bugzilla.redhat.com/show_bug.cgi?id=662947)**
    \- Provider Account : Test Account errors
-   **BZ [657025](https://bugzilla.redhat.com/show_bug.cgi?id=657025)**
    \- Some /var/log/dcloud-agg logs missing log-rotate, causing
    filesystem full
-   **BZ [649879](https://bugzilla.redhat.com/show_bug.cgi?id=649879)**
    \- Image fails to build when template name has single quote or
    semi-colon
-   **BZ [649473](https://bugzilla.redhat.com/show_bug.cgi?id=649473)**
    \- Instance: name too long throws PGError
-   **BZ [645370](https://bugzilla.redhat.com/show_bug.cgi?id=645370)**
    \- Don't show hardware profiles that can't possibly work
-   **BZ [645370](https://bugzilla.redhat.com/show_bug.cgi?id=644086)**
    \- EC2: key.pem returns a "corrupted" private key
-   **BZ [644050](https://bugzilla.redhat.com/show_bug.cgi?id=644050)**
    \- Instance Management: instances launched by non-admin users are
    listed as started by Admin
-   **BZ [643812](https://bugzilla.redhat.com/show_bug.cgi?id=643812)**
    \- Feature Request : Checkbox to select all users at once
-   **BZ [643096](https://bugzilla.redhat.com/show_bug.cgi?id=643096)**
    \- New User Account Cancel button is unstyled and does not work
-   **BZ [641948](https://bugzilla.redhat.com/show_bug.cgi?id=641948)**
    \- No error information is presented to the user on a failed
    "Provider Account"
-   **BZ [641376](https://bugzilla.redhat.com/show_bug.cgi?id=641376)**
    \- Clicking on actions without checking an instance in Instance
    Management shows confusing error
-   **BZ [640319](https://bugzilla.redhat.com/show_bug.cgi?id=640319)**
    \- Manage Providers: cloud engine does not accept URL redirect for
    provider url
-   **BZ [638326](https://bugzilla.redhat.com/show_bug.cgi?id=638326)**
    \- With no available images, EC2 driver throws a stack trace
-   **BZ [618307](https://bugzilla.redhat.com/show_bug.cgi?id=618307)**
    \- Support custom HW profiles in condor\_submit
-   **BZ [618306](https://bugzilla.redhat.com/show_bug.cgi?id=618306)**
    \- Support custom HW profiles in C libdeltacloud
</div>
