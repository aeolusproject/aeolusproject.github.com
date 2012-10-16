---
title: Aeolus 0.7.0 - Release Notes
layout: page
title: "Aeolus 0.7.0 - Release Notes"
summary: "Aeolus 0.7.0 - Release Notes"
---
{::options parse_block_html="true" /}

Aeolus 0.7.0 - Release Notes
============================

<div class="page-listing">
### Table of Contents

1.  [Release Highlights](#releasehighlights "Release Highlights")
2.  [Known issues still remaining](#knownissues "Known issues still remaining")
3.  [Issues Resolved](#issuesresolved "Issues Resolved")
</div>

<div class="section-grouping">
Aeolus community release 0.7.0 is now available from the latest release
repos. These notes contain a summary of the high points of the last
development sprint and point out significant issues that were not deemed
worthy of stopping the release.

Installation is very straightforward, with instructions on the website:

   
[http://www.aeolusproject.org/get\_it.html](http://www.aeolusproject.org/get_it.html "Get Aeolus")

Packages are available for Fedora 15 x86\_64, Fedora 16 x86\_64 and RHEL
6.1+ x86\_64.

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
## Release Highlights {#releasehighlights}

-   Aeolus now licensed under Apache Software License (ASL).
-   Added Conductor support for the Event API. This API provides
    Conductor with a means for tracking system messages, such as
    instance changes.
-   Improved i18n in API error codes and messages.
-   Aeolus now checks the status on image builds and pushes from
    ImageFactory. This helps Conductor track image building, pushing or
    readiness for deployment use.
-   Security fix removes logging of sensitive SQL occurring with RPM
    installation of Conductor.
-   Aeolus now indicates the remaining provider content after deleting a
    single provider image.
-   Conductor now supports image imports with the web interface. This
    provides users with the ability to import an image from a provider
    via Conductor.
</div>
<br />

<div class="section-grouping">
## Known issues still remaining {#knownissues}

A complete list of open issues can be viewed in Red Hat Bugzilla. The
following are known problems due for resolution in a subsequent release:

-   **BZ [761086](https://bugzilla.redhat.com/show_bug.cgi?id=761086) -
    RHEL 6.2 is not available in EC2**
-   **BZ [766791](https://bugzilla.redhat.com/show_bug.cgi?id=766791) -
    RHEL 6.2 with Config Server on RHEVM hangs at boot**
-   **BZ [766697](https://bugzilla.redhat.com/show_bug.cgi?id=766697) -
    aeolus-configure EC2 configure error (non-fatal)**
-   **BZ [766414](https://bugzilla.redhat.com/show_bug.cgi?id=766414) -
    Launching RHEL 5.7 build with ImageFactory on vSphere will kernel**
-   **BZ [761282](https://bugzilla.redhat.com/show_bug.cgi?id=761282)
    and BZ [766139](https://bugzilla.redhat.com/show_bug.cgi?id=766139) -
    Image imports fail with descriptions**
-   **BZ [766866](https://bugzilla.redhat.com/show_bug.cgi?id=766866) -
    Deploying from monitor tab and catalog entry**
-   **BZ [761079](https://bugzilla.redhat.com/show_bug.cgi?id=761079)
    and BZ [761502](https://bugzilla.redhat.com/show_bug.cgi?id=761502) -
    Filtering on Monitor grid view does not work**
-   **BZ [766473](https://bugzilla.redhat.com/show_bug.cgi?id=766473) -
    Granting access to catalog entries fails**
-   **BZ [765714](https://bugzilla.redhat.com/show_bug.cgi?id=765714) -
    Image import reports success for invalid entries**
-   **BZ [761392](https://bugzilla.redhat.com/show_bug.cgi?id=761392) -
    Quota reporting is off**
-   **BZ [761200](https://bugzilla.redhat.com/show_bug.cgi?id=761200) -
    Image build results in an internal server error due to missing
    \<rootpw\> element**
-   **BZ [766983](https://bugzilla.redhat.com/show_bug.cgi?id=766983) -
    Oz ignores \<persisted\>No\</persisted\> syntax in system
    templates**

Full lists of relevant issues in Bugzilla:

-   [https://bugzilla.redhat.com/showdependencytree.cgi?id=ce-sprint&hide\_resolved=1](https://bugzilla.redhat.com/showdependencytree.cgi?id=ce-sprint&hide_resolved=1)
-   [https://bugzilla.redhat.com/showdependencytree.cgi?id=ce-sprint-next&hide\_resolved=1](https://bugzilla.redhat.com/showdependencytree.cgi?id=ce-sprint-next&hide_resolved=1)
</div>
<br />

<div class="section-grouping">
## Issues Resolved {#issuesresolved}

The following section contains links to closed issues.

### Redmine

View the full list of completed Redmine issues for this version here:

[https://www.aeolusproject.org/redmine/projects/aeolus/issues?query\_id=86](https://www.aeolusproject.org/redmine/projects/aeolus/issues?query_id=86 "Resolved Redmine Issues")
</div>
