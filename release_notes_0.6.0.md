---
title: Aeolus 0.6.0 - Release Notes
layout: page
title: "Aeolus 0.6.0 - Release Notes"
summary: "Aeolus 0.6.0 - Release Notes"
---
{::options parse_block_html="true" /}

Aeolus 0.6.0 - Release Notes
============================

<div class="page-listing">
### Table of Contents

1.  [New features](#newfeaturesummary "New features")
2.  [Known issues still remaining](#knownissues "Known issues still remaining")
3.  [Redmine items completed](#redmine "Redmine items completed")
    -   [Conductor](#rdcond "Conductor")
        -   [Scenarios](#rdcondscen "Scenarios")
        -   [Features](#rdcondfeat "Features")
        -   [Support](#rdcondsupp "Support")
        -   [Bugs](#rdcondbugs "Bugs")
        -   [Tasks](#rdcondtask "Tasks")

    -   [Image Factory](#rdifact "Image Factory")
        -   [Features](#rdifactfeat "Features")

    -   [Image Warehouse](#rdiwhd "Image Warehouse")
        -   [Bugs](#rdiwhdbugs "Bugs")

4.  [Issues closed (Bugzilla issue list)](#issuesclosedbz "Issues closed (Bugzilla issue list)")
</div>

<div class="section-grouping">
This is a **signficant** new release of Aeolus.

Installation is very straightforward, with instructions on the website:

   
[http://www.aeolusproject.org/get\_it.html](http://www.aeolusproject.org/get_it.html "Get Aeolus")

Packages are available for Fedora 15 x86\_64, and RHEL 6.1 x86\_64.

All testing and bug reports are hugely appreciated, directly
contributing towards the quality of Aeolus releases and future growth.

<div class="note">
**NOTE -** Although Aeolus is still some way from production quality, it
is suitable for testing.  
**Please don't use it with live data yet.**
</div>
</div>
<br />

<div class="section-grouping">
## New features {#newfeaturesummary}

-   **Aeolus-cli can now push to multiple providers simultaneously**  
    Prior to this release, aeolus-cli could only push images to one
    provider at a time.

    Now, it can handle simultaneous pushes, increasing efficiency.

-   **The Conductor API now communicates error messages clearly**  
    Clients now receive an error code, with a brief message to aid in
    resolving the problem.

     This allows clients to customize error information for their users.


    More information on the Conductor API, with the full listing of
    error codes, is available here:

        
    [https://www.aeolusproject.org/redmine/projects/aeolus/wiki/Conductor\_API](https://www.aeolusproject.org/redmine/projects/aeolus/wiki/Conductor_API "Conductor API documentation")


-   **Aeolus-cli now has human friendly error messages**  
    Error handling in aeolus-cli has been updated for the new Conductor
    API, making them simple to read, and helpful.
</div>
<br />

<div class="section-grouping">
## Known issues still remaining {#knownissues}

These are known problems due to be resolved in a subsequent release:

-   **BZ [721097](https://bugzilla.redhat.com/show_bug.cgi?id=721097)**
    - Failure to push images built with multiple targets.
-   **BZ [740902](https://bugzilla.redhat.com/show_bug.cgi?id=740902)**
    - Aeolus-image: catch errors more broadly
-   **BZ [740907](https://bugzilla.redhat.com/show_bug.cgi?id=740907)**
    - Deployment is created even if deployable validation fails
-   **BZ [745149](https://bugzilla.redhat.com/show_bug.cgi?id=745149)**
    - Configserver requires selinux in disable/permissive mode
-   **BZ [747762](https://bugzilla.redhat.com/show_bug.cgi?id=747762)**
    - Update services and aeolus-restart-services for f16
-   **BZ [748064](https://bugzilla.redhat.com/show_bug.cgi?id=748064)**
    - Must change default value to launch deployable
-   **BZ [749622](https://bugzilla.redhat.com/show_bug.cgi?id=749622)**
    - OzException: Unsupported RHEL-6 update 2
-   **BZ [749681](https://bugzilla.redhat.com/show_bug.cgi?id=749681)**
    - Unable to determine values for push command
-   **BZ [750824](https://bugzilla.redhat.com/show_bug.cgi?id=750824)**
    - Selecting ADMINISTER | Users & Groups | Users spins
-   **BZ [750957](https://bugzilla.redhat.com/show_bug.cgi?id=750957)**
    - [Design Check] As pool created, switched to pool view, I wanted to
    create multiple pools not switch
-   **BZ [752494](https://bugzilla.redhat.com/show_bug.cgi?id=752494)**
    - Image import fails
-   **BZ [754250](https://bugzilla.redhat.com/show_bug.cgi?id=754250)**
    - Instance w/ audrey bits fails to launch, stuck in "New" state
-   **BZ [754255](https://bugzilla.redhat.com/show_bug.cgi?id=754255)**
    - Building a template from a katello export is unable to
    authenticate CA cert
-   **BZ [754744](https://bugzilla.redhat.com/show_bug.cgi?id=754744)**
    - Launching audrey enabled rhevm instance returns nil:NilClass error
-   **BZ [754769](https://bugzilla.redhat.com/show_bug.cgi?id=754769)**
    - ConfigServer config not deployed to vsphere guests
-   **BZ [754810](https://bugzilla.redhat.com/show_bug.cgi?id=754810)**
    - Error in deploying rhevm instance w/ audrey bits
-   **BZ [755683](https://bugzilla.redhat.com/show_bug.cgi?id=755683)**
    - Facter rpm dependency error for RHEL image building
</div>
<br />

<div class="section-grouping">
## Redmine items completed {#redmine}

### Conductor {#rdcond}

#### Scenarios {#rdcondscen}

-   **Redmine
    [2661](https://www.aeolusproject.org/redmine/issues/2661)** - As a a
    user of aeolus-image, I should be able to push to multiple providers
-   **Redmine
    [2662](https://www.aeolusproject.org/redmine/issues/2662)** - As a a
    user of aeolus-image, I should be able initiate builds for multiple
    providers
-   **Redmine
    [2663](https://www.aeolusproject.org/redmine/issues/2663)** - iwhd
    users.js needs to be added to configure
-   **Redmine
    [2679](https://www.aeolusproject.org/redmine/issues/2679)** - As an
    end user, I would like aeolus conductor and ALL components to run
    with selinux enabled
-   **Redmine
    [2706](https://www.aeolusproject.org/redmine/issues/2706)** - As the
    product owner, I can see the results of the last sprint running on a
    RHEL box in the lab
-   **Redmine
    [2780](https://www.aeolusproject.org/redmine/issues/2780)** - Update
    Conductor API Error reporting
-   **Redmine
    [2781](https://www.aeolusproject.org/redmine/issues/2781)** - Update
    aeolus-image to utilize Conductor Error codes

#### Features {#rdcondfeat}

-   **Redmine
    [2499](https://www.aeolusproject.org/redmine/issues/2499)** -
    Initial implementation of Event API
-   **Redmine
    [2685](https://www.aeolusproject.org/redmine/issues/2685)** -
    Engineering expo presentation and preparation
-   **Redmine
    [2686](https://www.aeolusproject.org/redmine/issues/2686)** -
    External communications about engineering expo
-   **Redmine
    [2692](https://www.aeolusproject.org/redmine/issues/2692)** - As a
    Pacemaker Cloud admin, I want to register a Pacemaker Cloud server
    to Conductor via a webhooks API
-   **Redmine
    [2700](https://www.aeolusproject.org/redmine/issues/2700)** -
    Aeolus-image rename

#### Support {#rdcondsupp}

-   **Redmine
    [2676](https://www.aeolusproject.org/redmine/issues/2676)** - Update
    configure and rpms deps to set up rsyslog/relp

#### Bugs {#rdcondbugs}

-   **Redmine
    [2655](https://www.aeolusproject.org/redmine/issues/2655)** -
    Bugzillas
-   **Redmine
    [2665](https://www.aeolusproject.org/redmine/issues/2665)** -
    Identify any other components that need systemd upates and notify
    their owners
-   **Redmine
    [2667](https://www.aeolusproject.org/redmine/issues/2667)** -
    Settings.yml in conductor rpm needs to be marked as %config in the
    spec so that reinstalling doesn't overwrite
-   **Redmine
    [2669](https://www.aeolusproject.org/redmine/issues/2669)** -
    aeolus-configure no longer needs to write a custom conf.js for rhevm
    providers
-   **Redmine
    [2719](https://www.aeolusproject.org/redmine/issues/2719)** - Remove
    Red Hat trademarked logos
-   **Redmine
    [2736](https://www.aeolusproject.org/redmine/issues/2736)** - Remove
    the global search text input box from the UI
-   **Redmine
    [2763](https://www.aeolusproject.org/redmine/issues/2763)** - As a
    user, I want to launch instances on a wider range of EC2 geographic
    regions

#### Tasks {#rdcondtask}

-   **Redmine
    [2488](https://www.aeolusproject.org/redmine/issues/2488)** - Create
    tests for aeolus-image-rubygem
-   **Redmine
    [2492](https://www.aeolusproject.org/redmine/issues/2492)** - Rename
    aeolus-image gems and repos
-   **Redmine
    [2510](https://www.aeolusproject.org/redmine/issues/2510)** -
    Determine requirements for first pass at api
-   **Redmine
    [2511](https://www.aeolusproject.org/redmine/issues/2511)** - Write
    tests based on requirements from previous task
-   **Redmine
    [2512](https://www.aeolusproject.org/redmine/issues/2512)** -
    Implement subset of api
-   **Redmine
    [2513](https://www.aeolusproject.org/redmine/issues/2513)** -
    Configure additions for log location and output
-   **Redmine
    [2520](https://www.aeolusproject.org/redmine/issues/2520)** - Fix
    https://bugzilla.redhat.com/show\_bug.cgi?id=744192
-   **Redmine
    [2569](https://www.aeolusproject.org/redmine/issues/2569)** - UI for
    pool family provider accounts
-   **Redmine
    [2570](https://www.aeolusproject.org/redmine/issues/2570)** -
    Enforce provider account pool family association in taskomatic
    provider matching
-   **Redmine
    [2677](https://www.aeolusproject.org/redmine/issues/2677)** - Update
    approriate spec with rsyslog dependencies
-   **Redmine
    [2680](https://www.aeolusproject.org/redmine/issues/2680)** -
    aeolus-configure should not force selinux changes
-   **Redmine
    [2681](https://www.aeolusproject.org/redmine/issues/2681)** - Modify
    aeolus-configure puppet recipe to not modify the selinux settings
-   **Redmine
    [2693](https://www.aeolusproject.org/redmine/issues/2693)** - Fix
    the Pacemaker Cloud registration part of the API spec
-   **Redmine
    [2694](https://www.aeolusproject.org/redmine/issues/2694)** -
    Implement the registration portion of the Notification APi
-   **Redmine
    [2695](https://www.aeolusproject.org/redmine/issues/2695)** - Update
    Conductor API to infer targetimages from builds, images
-   **Redmine
    [2696](https://www.aeolusproject.org/redmine/issues/2696)** - Update
    aeolus-image to use the new Conductor Push syntax
-   **Redmine
    [2697](https://www.aeolusproject.org/redmine/issues/2697)** - Update
    aeolus-image documentation to reflect new push syntax changes
-   **Redmine
    [2699](https://www.aeolusproject.org/redmine/issues/2699)** -
    Confirm aeolus-image can initiate builds for multiple providers. Add
    a test
-   **Redmine
    [2701](https://www.aeolusproject.org/redmine/issues/2701)** - BZ
    \#750218: aeolus-images usage needs to be updated
-   **Redmine
    [2702](https://www.aeolusproject.org/redmine/issues/2702)** - BZ
    \#749681: unable to determine values for push command
-   **Redmine
    [2705](https://www.aeolusproject.org/redmine/issues/2705)** - Bug
    749254 - running configure for multiple providers causes oauth
    issues
-   **Redmine
    [2707](https://www.aeolusproject.org/redmine/issues/2707)** - Create
    repo definition files pointing to stable and testing at top level
-   **Redmine
    [2709](https://www.aeolusproject.org/redmine/issues/2709)** - Figure
    out an approach to handle the SELinux policies for RHEL 6.1
-   **Redmine
    [2713](https://www.aeolusproject.org/redmine/issues/2713)** - Define
    the options to present in a drop down for specific instances of
    tables within the app
-   **Redmine
    [2720](https://www.aeolusproject.org/redmine/issues/2720)** -
    Implement dropdown filter into filter\_table helper and present it
    in users table
-   **Redmine
    [2731](https://www.aeolusproject.org/redmine/issues/2731)** -
    Implement the design in /buildpush\_r8/02 Images.png
-   **Redmine
    [2732](https://www.aeolusproject.org/redmine/issues/2732)** - Decide
    what info t present in the table depicted in /buildpush\_r8/02
    Images.png
-   **Redmine
    [2752](https://www.aeolusproject.org/redmine/issues/2752)** -
    Implement the design in /buildpush\_r8/02 Image Detail.png
-   **Redmine
    [2753](https://www.aeolusproject.org/redmine/issues/2753)** - Add
    support for rebooting running instances on EC2
-   **Redmine
    [2754](https://www.aeolusproject.org/redmine/issues/2754)** - Add
    support for rebooting running instances on vsphere
-   **Redmine
    [2756](https://www.aeolusproject.org/redmine/issues/2756)** -
    Implement /buildpush\_r8/03 New Template (Upload).png
-   **Redmine
    [2757](https://www.aeolusproject.org/redmine/issues/2757)** -
    Implement /buildpush\_r8/05 New Template (URL) Copy1.png
-   **Redmine
    [2758](https://www.aeolusproject.org/redmine/issues/2758)** -
    Implement /buildpush\_r8/07 Edit Template.png
-   **Redmine
    [2759](https://www.aeolusproject.org/redmine/issues/2759)** -
    Implement /buildpush\_r8/08 Finish template.png
-   **Redmine
    [2760](https://www.aeolusproject.org/redmine/issues/2760)** - Save
    templates by making a build call to iwhd without a specified target
-   **Redmine
    [2764](https://www.aeolusproject.org/redmine/issues/2764)** -
    Investigate sending build & push requests to imagefactory for other
    ec2 regions
-   **Redmine
    [2765](https://www.aeolusproject.org/redmine/issues/2765)** -
    Investigate launching instances in ec2-japan via conductor & vertify
    that dc-api calls work as in us-east etc.
-   **Redmine
    [2766](https://www.aeolusproject.org/redmine/issues/2766)** - Based
    on results, add additional ec2 regions to the providers set up by
    aeolus-configure
-   **Redmine
    [2771](https://www.aeolusproject.org/redmine/issues/2771)** - BZ
    \#748030 - mongodb fails to stop w/ aeolus-cleanup
-   **Redmine
    [2772](https://www.aeolusproject.org/redmine/issues/2772)** - BZ
    \#747768 - aeolus-configure should exit w/ non 0 exit code if there
    is a failure
-   **Redmine
    [2774](https://www.aeolusproject.org/redmine/issues/2774)** - Bug
    749349 - better error messaging bad input/flags/etc
-   **Redmine
    [2775](https://www.aeolusproject.org/redmine/issues/2775)** -
    Implement preset filters for catalogs
-   **Redmine
    [2776](https://www.aeolusproject.org/redmine/issues/2776)** - Change
    list\_for\_user method to work as a scope to enable chainablity
-   **Redmine
    [2778](https://www.aeolusproject.org/redmine/issues/2778)** - Remove
    global search input box
-   **Redmine
    [2782](https://www.aeolusproject.org/redmine/issues/2782)** - BZ
    \#749349 - Better error messaging bad input/flags/etc
-   **Redmine
    [2783](https://www.aeolusproject.org/redmine/issues/2783)** - BZ
    \#747719 - Need error message for image import with incorrect parms
-   **Redmine
    [2784](https://www.aeolusproject.org/redmine/issues/2784)** - BZ
    \#740902 - Aeolus-image: catch errors more broadly
-   **Redmine
    [2785](https://www.aeolusproject.org/redmine/issues/2785)** - BZ
    \#723885 - Aeolus image should return an error for unsupported
    provider types while building
-   **Redmine
    [2791](https://www.aeolusproject.org/redmine/issues/2791)** -
    Implement Tables Search
-   **Redmine
    [2792](https://www.aeolusproject.org/redmine/issues/2792)** -
    Reviewing \#2775
-   **Redmine
    [2799](https://www.aeolusproject.org/redmine/issues/2799)** - Review
    \#2756
</div>
<br />

<div class="section-grouping">
### Image Factory {#rdifact}

#### Features {#rdifactfeat}

-   **Redmine
    [2798](https://www.aeolusproject.org/redmine/issues/2798)** - Add
    the ability to snapshot EBS images to EBS images - Make this the
    default at least for RHEL
</div>
<br />

<div class="section-grouping">
### Image Warehouse {#rdiwhd}

#### Bugs {#rdiwhdbugs}

-   **Redmine
    [2371](https://www.aeolusproject.org/redmine/issues/2371)** - Add
    OAuth
-   **Redmine
    [2399](https://www.aeolusproject.org/redmine/issues/2399)** - Parse
    \<reason\> and \<detail\> for FAILED import status
-   **Redmine
    [2414](https://www.aeolusproject.org/redmine/issues/2414)** -
    Waiting for template import in RHEV-M
-   **Redmine
    [2593](https://www.aeolusproject.org/redmine/issues/2593)** - -U
    user:pw is insecure, use -u /file
-   **Redmine
    [2599](https://www.aeolusproject.org/redmine/issues/2599)** - OAuth
    fails with POST and body
-   **Redmine
    [2628](https://www.aeolusproject.org/redmine/issues/2628)** -
    t/mongo-restart fails spuriously
</div>
<br />

<div class="section-grouping">
## Issues closed (Bugzilla issue list) {#issuesclosedbz}

-   **BZ [722805](https://bugzilla.redhat.com/show_bug.cgi?id=722805)**
    - Unable to build rhevm,vmware at the same time w/ aeolus-image
-   **BZ [742578](https://bugzilla.redhat.com/show_bug.cgi?id=742578)**
    - Aeolus-configure: can not specify more than one profile at a time
-   **BZ [749349](https://bugzilla.redhat.com/show_bug.cgi?id=749349)**
    - Better error messaging bad input/flags/etc
-   **BZ [749579](https://bugzilla.redhat.com/show_bug.cgi?id=749579)**
    - Default permissions for regular user cannot deploy image
-   **BZ [749716](https://bugzilla.redhat.com/show_bug.cgi?id=749716)**
    - Deltacloud on RHEL fails to start after aeolus-restart-services
-   **BZ [750189](https://bugzilla.redhat.com/show_bug.cgi?id=750189)**
    - Unhandled exception or status code (Unhandled exception or status
    code (undefined method \`hostFolder' for nil:NilClass)) while
    launching vsphere deployment from catalog list
-   **BZ [750218](https://bugzilla.redhat.com/show_bug.cgi?id=750218)**
    - Aeolus-images usage needs to be updated.
-   **BZ [750920](https://bugzilla.redhat.com/show_bug.cgi?id=750920)**
    - 2nd provider always fails for deployment
-   **BZ [750958](https://bugzilla.redhat.com/show_bug.cgi?id=750958)**
    - Provider account add/edit: remove combo box to choose provider
-   **BZ [750959](https://bugzilla.redhat.com/show_bug.cgi?id=750959)**
    - Conductor build error
-   **BZ [751118](https://bugzilla.redhat.com/show_bug.cgi?id=751118)**
    - Audrey config server, rpm dep errors installing on RHEL6.1
-   **BZ [751200](https://bugzilla.redhat.com/show_bug.cgi?id=751200)**
    - Unable to deploy instances w/ audrey to vsphere/rhevm
-   **BZ [751987](https://bugzilla.redhat.com/show_bug.cgi?id=751987)**
    - Mock deployments fail to launch due to mock hwp, hwp\_memory has
    invalid value
-   **BZ [752520](https://bugzilla.redhat.com/show_bug.cgi?id=752520)**
    - Aeolus-image push problems,Internal Error: can't convert nil into
    String
-   **BZ [752975](https://bugzilla.redhat.com/show_bug.cgi?id=752975)**
    - Multiple executions of aeolus-cleanup/configure not working as
    expected
-   **BZ [753250](https://bugzilla.redhat.com/show_bug.cgi?id=753250)**
    - Aeolus-configure fails No such file or directory -
    /etc/rsyslog.d/aeolus.conf.puppettmp\_6890
-   **BZ [753258](https://bugzilla.redhat.com/show_bug.cgi?id=753258)**
    - Aeolus-configure overwrites contents in
    /etc/imagefactory/imagefactory.conf every time its executed
-   **BZ [753273](https://bugzilla.redhat.com/show_bug.cgi?id=753273)**
    - Rsyslog configuration causes messages log to grow rapidly
-   **BZ [753886](https://bugzilla.redhat.com/show_bug.cgi?id=753886)**
    - Aeolus-cli list --images should populate columns
</div>
