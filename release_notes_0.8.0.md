---
title: Aeolus 0.8.0 - Release Notes
layout: page
title: "Aeolus 0.8.0 - Release Notes"
summary: "Aeolus 0.8.0 - Release Notes"
---
{::options parse_block_html="true" /}

Aeolus 0.8.0 - Release Notes
============================

<div class="page-listing">
### Table of Contents

1.  [Release Highlights](#releasehighlights "Release Highlights")
2.  [Critical changes to configuration](#critical-configuration "Critical changes to configuration")
3.  [Known issues still remaining](#knownissues "Known issues still remaining")
4.  [Issues Resolved](#issuesresolved "Issues Resolved")
</div>

<div class="section-grouping">
**Aeolus release 0.8.0 is now available.**

These notes summarise our last development sprint - highlighting the
improvements made, and listing the known issues that still need work.

Installation instructions are on the website:

   
[http://www.aeolusproject.org/get\_it.html](http://www.aeolusproject.org/get_it.html "Get Aeolus")

Packages are available for Fedora 15 x86\_64, Fedora 16 x86\_64 and RHEL
6.1+ x86\_64.

We appreciate all assistance with testing and bug reports, as they
really influence our depth and future growth.

<div class="note">
**NOTE -** Although Aeolus is still some way from production quality, it
is suitable for testing.  
**Please don't use it with live data yet.**
</div>
</div>
<br />

<div class="section-grouping">
## Release Highlights {#releasehighlights}

-   Addition of Images tab to the Pool Family details page.
-   Addition of New Image button to the images list.
-   Addition of New Deployable from Image button.
-   Ability to view template XML on the Image Details page.
-   Improvements to the the user interface for adding provider accounts
    to pools.
-   Verification of image's existence before importing from provider.
-   Addition of Creating deployables from imported images.
-   Catalog Entries are now called Deployables.
-   Each deployable contains a details page with:
    -   Status on deployable images availability;
    -   Functions to build and push images missing from a deployable;
    -   Options to add a deployable to multiple catalogs;
    -   Deployable permissions for users.

-   Added support to handle deployables without catalog.
-   Support for multiple accounts per RHEVM and VMWare providers.
-   Ability to set provider account priority
-   Added template validation when creating an image.
-   Sanitization of assembly name to prevent launch errors.
-   Addition of realm selection to Deployment Overview.
-   Ability to reboot multiple instances.
-   Change permissions tab label from Users to Role Assignments.
-   Security fix to restrict access of database.yml.
-   New icons and styling for Administer navigation, Build and Push user
    interface, and Deployable details.
</div>
<br />

<div class="section-grouping">
## Critical changes to configuration {#critical-configuration}

The following changes relate to RHEVM configuration
(/etc/aeolus-configure/nodes/rhevm\_configure):

-   "rhevm\_deltacloud\_provider:" changed to "rhevm\_deltacloud\_api:"
-   Added "rhevm\_deltacloud\_data\_center:"
-   BZ [773347](https://bugzilla.redhat.com/show_bug.cgi?id=773347) -
    Configuration requires UUIDs not visible in RHEVM Web UI.
-   NFS export domains must have the word 'export' in them - see BZ
    [782210](https://bugzilla.redhat.com/show_bug.cgi?id=782210)
</div>
<br />

<div class="section-grouping">
## Known issues still remaining {#knownissues}

A complete list of open issues can be viewed in Red Hat Bugzilla. The
following are known problems due for resolution in a subsequent release:

-   **BZ [747895](https://bugzilla.redhat.com/show_bug.cgi?id=747895) -
    "error reading information on service cgconfig" while installing
    aeolus on f16**
-   **BZ [767844](https://bugzilla.redhat.com/show_bug.cgi?id=767844) -
    aeolus conductor misrenders pages in ie8**
-   **BZ [769526](https://bugzilla.redhat.com/show_bug.cgi?id=769526) -
    aeolus-configure interactive :Syntax error at ':'; expected '}' at
    /usr/share/aeolus-configure/modules/aeolus/manifests/profiles/custom.pp**
-   **BZ [723327](https://bugzilla.redhat.com/show_bug.cgi?id=723327) -
    aeolus-push fails to push images to the correct provider when two
    diff sets of credentials are used**
-   **BZ [771344](https://bugzilla.redhat.com/show_bug.cgi?id=771344) -
    "Error Downloading Packages: rubygem-webmock-1.6.4-1.fc15.noarch:
    failure:" in install aeolus on f15Build failed with long Name tag in
    tdl template for RHEVM**
-   **BZ [744011](https://bugzilla.redhat.com/show_bug.cgi?id=744011) -
    building RHEVM templates w/ rhev agent requires updated packages**
-   **BZ [773002](https://bugzilla.redhat.com/show_bug.cgi?id=773002) -
    catalog/1/deployables/\$num is not updating build status in recent
    builds**
-   **BZ [772285](https://bugzilla.redhat.com/show_bug.cgi?id=772285) -
    conductor needs to reflect a failed push in the webui.**
-   **BZ [641130](https://bugzilla.redhat.com/show_bug.cgi?id=641130) -
    Deltacloud server via REST doesn't report all images of an ec2
    cloud**
-   **BZ [772996](https://bugzilla.redhat.com/show_bug.cgi?id=772996) -
    disable "launch" button if no images are built/pushed**
-   **BZ [769916](https://bugzilla.redhat.com/show_bug.cgi?id=769916) -
    ec2 running instances shows "Pending" state**
-   **BZ [765611](https://bugzilla.redhat.com/show_bug.cgi?id=765611) -
    Error connecting to framework: Address family not supported by
    protocol - socket(2)**
-   **BZ [734471](https://bugzilla.redhat.com/show_bug.cgi?id=734471) -
    Error while launching instance for ec2 in conductor UI ( The
    instance gets launched)**
-   **BZ [757684](https://bugzilla.redhat.com/show_bug.cgi?id=757684) -
    Failed to Push Images to RHEV NFS Export Disk**
-   **BZ [769938](https://bugzilla.redhat.com/show_bug.cgi?id=769938) -
    Imagefactory building for vsphere,condorcloud and rhevm FAILED**
-   **BZ [747048](https://bugzilla.redhat.com/show_bug.cgi?id=747048) -
    import f16 ami fails w/ malformed format string error**
-   **BZ [717987](https://bugzilla.redhat.com/show_bug.cgi?id=717987) -
    Instance fails to launch with message "The requested Availability
    Zone is no longer supported..."**
-   **BZ [733764](https://bugzilla.redhat.com/show_bug.cgi?id=733764) -
    Instances: download link for ec2 cert disappears after a few
    seconds**
-   **BZ [745181](https://bugzilla.redhat.com/show_bug.cgi?id=745181) -
    iwhd needs filesystem space check**
-   **BZ [770555](https://bugzilla.redhat.com/show_bug.cgi?id=770555) -
    Not able to delete stopped Instances**
-   **BZ [748487](https://bugzilla.redhat.com/show_bug.cgi?id=748487) -
    RHEV Instance requires attached iso\_domain**
-   **BZ [743395](https://bugzilla.redhat.com/show_bug.cgi?id=743395) -
    stopping rhevm deployment causes 6+ days added to total uptime**
-   **BZ [730105](https://bugzilla.redhat.com/show_bug.cgi?id=730105) -
    Stopping the imagefactory leaves resources in use**
-   **BZ [765854](https://bugzilla.redhat.com/show_bug.cgi?id=765854) -
    Race condition with network service start and audrey invocation**
-   **BZ [770445](https://bugzilla.redhat.com/show_bug.cgi?id=770445) -
    "undefined method \`name' for nil:NilClass " : When created a
    catalog entry with wrong hwp**
-   **BZ [772708](https://bugzilla.redhat.com/show_bug.cgi?id=772708) -
    /usr/lib/ruby/gems/1.8/gems/actionpack-3.0.10/lib/action\_view/helpers/url\_helper.rb:317:
    [BUG] rb\_gc\_mark(): unknown data type**
-   **BZ [771305](https://bugzilla.redhat.com/show_bug.cgi?id=771305) -
    aeolus-configure interactive : Error found in
    /etc/aeolus-configure/nodes/custom\_configure**
-   **BZ [772249](https://bugzilla.redhat.com/show_bug.cgi?id=772249) -
    After built images from UI, I see 'Images are not Built', but
    'Images Ready' in deployable\#show**
-   **BZ [770574](https://bugzilla.redhat.com/show_bug.cgi?id=770574) -
    Build should be allowed only for that provider for which deployable
    is created .**
-   **BZ [773277](https://bugzilla.redhat.com/show_bug.cgi?id=773277) -
    Deployments with stopped instances in it does not get deleted.**
-   **BZ [768028](https://bugzilla.redhat.com/show_bug.cgi?id=768028) -
    F16 doesn't build in Factory**
-   **BZ [770532](https://bugzilla.redhat.com/show_bug.cgi?id=770532) -
    Failed. Response code = 500. Response message = Internal Server
    Error when clicked on build button for mock.**
-   **BZ [773580](https://bugzilla.redhat.com/show_bug.cgi?id=773580) -
    For non-admin user submenu for Administer is rendered when clicked
    on My Accounts.**
-   **BZ [694525](https://bugzilla.redhat.com/show_bug.cgi?id=694525) -
    IE8 : undefined method \`[]' for nil:NilClass for Hardware profile**
-   **BZ [740810](https://bugzilla.redhat.com/show_bug.cgi?id=740810) -
    IE8 is misrendered in /conductor**
-   **BZ [773244](https://bugzilla.redhat.com/show_bug.cgi?id=773244) -
    Instances created by a user should be automatically stopped and
    deleted when the user is deleted**
-   **BZ [771627](https://bugzilla.redhat.com/show_bug.cgi?id=771627) -
    launch instance fails for providers added once images are built and
    pushed.**
-   **BZ [773407](https://bugzilla.redhat.com/show_bug.cgi?id=773407) -
    Launching, w/ a realm w/ multiple providers fails**
-   **BZ [770354](https://bugzilla.redhat.com/show_bug.cgi?id=770354) -
    No validation for Priority field in Add Provider Page**
-   **BZ [767570](https://bugzilla.redhat.com/show_bug.cgi?id=767570) -
    Non admin user able to launch instance even after revoking access of
    "global Deployable User "**
-   **BZ [767933](https://bugzilla.redhat.com/show_bug.cgi?id=767933) -
    Non user can stop an instance created by admin even when all
    deployable permissions are revoked.**
-   **BZ [772353](https://bugzilla.redhat.com/show_bug.cgi?id=772353) -
    odd import image workflow can cause: Failed. Response code = 400.
    Response message = Bad Request.**
-   **BZ [773672](https://bugzilla.redhat.com/show_bug.cgi?id=773672) -
    Ouptut of Push should show Provider Image not ID**
-   **BZ [773410](https://bugzilla.redhat.com/show_bug.cgi?id=773410) -
    provider priority is not taken into account when launching instances
    w/ Realm w/ multiple realms(datastores)**
-   **BZ [772644](https://bugzilla.redhat.com/show_bug.cgi?id=772644) -
    Realm.scan\_for\_new fetches realms only from first account**
-   **BZ [770087](https://bugzilla.redhat.com/show_bug.cgi?id=770087) -
    Search fails for realms.**
-   **BZ [765908](https://bugzilla.redhat.com/show_bug.cgi?id=765908) -
    Status stays pending on instance that failed to launch at RHEV**
-   **BZ [773466](https://bugzilla.redhat.com/show_bug.cgi?id=773466) -
    template xml validation results in mis-rendered page**
-   **BZ [743677](https://bugzilla.redhat.com/show_bug.cgi?id=743677) -
    turn providers off fail to stop instances**
-   **BZ [772784](https://bugzilla.redhat.com/show_bug.cgi?id=772784) -
    unable to navigate to user "my account, logout" in ie8**
-   **BZ [773198](https://bugzilla.redhat.com/show_bug.cgi?id=773198) -
    Uptime is displayed twice for instances**
-   **BZ [770377](https://bugzilla.redhat.com/show_bug.cgi?id=770377) -
    Wrong error message displayed when launching image for a provider
    for which images are not pushed**
-   **BZ [751209](https://bugzilla.redhat.com/show_bug.cgi?id=751209) -
    concurrent builds causes some builds to fail**
-   **BZ [741592](https://bugzilla.redhat.com/show_bug.cgi?id=741592) -
    Disclaimer,Terms of Use and Support links not directed to correct
    page.**
-   **BZ [773034](https://bugzilla.redhat.com/show_bug.cgi?id=773034) -
    image details page needs ajax updates of image status**
-   **BZ [754943](https://bugzilla.redhat.com/show_bug.cgi?id=754943) -
    Image push to vSphere fails if all virtual networks are Distributed
    Virtual Switches**
-   **BZ [772781](https://bugzilla.redhat.com/show_bug.cgi?id=772781) -
    imagefactory does not detect local jeos image, cached modified media
    builds as running**
-   **BZ [741748](https://bugzilla.redhat.com/show_bug.cgi?id=741748) -
    pushing vsphere/rhevm images displays console passwd in plain txt**
-   **BZ [750504](https://bugzilla.redhat.com/show_bug.cgi?id=750504) -
    Unable to update default hardware Profile(backend).**

Full lists of relevant issues in Bugzilla:

-   [https://bugzilla.redhat.com/showdependencytree.cgi?id=ce-sprint&hide\_resolved=1](https://bugzilla.redhat.com/showdependencytree.cgi?id=ce-sprint&hide_resolved=1)
-   [https://bugzilla.redhat.com/showdependencytree.cgi?id=ce-sprint-next&hide\_resolved=1](https://bugzilla.redhat.com/showdependencytree.cgi?id=ce-sprint-next&hide_resolved=1)
</div>
<br />

<div class="section-grouping">
## Issues Resolved {#issuesresolved}

The following section contains links to closed issues.

### Redmine

-   **Redmine [2864](https://bugzilla.redhat.com/show_bug.cgi?id=2864) -
    Create a VM based test harness for Snap**
-   **Redmine [2865](https://bugzilla.redhat.com/show_bug.cgi?id=2865) -
    Snap: Replace all 'subprocess' / 'tempfile' calls w/ a
    'capture\_output' helper method**
-   **Redmine [2867](https://bugzilla.redhat.com/show_bug.cgi?id=2867) -
    Add icons to launch gsnap from menus**
-   **Redmine [2868](https://bugzilla.redhat.com/show_bug.cgi?id=2868) -
    Snap: Indentation fixes**
-   **Redmine [2869](https://bugzilla.redhat.com/show_bug.cgi?id=2869) -
    Snap: Make sure deb post-install command line tools don't run in
    Snap**
-   **Redmine [2872](https://bugzilla.redhat.com/show_bug.cgi?id=2872) -
    Snap: Add more and better documentation**
-   **Redmine [2919](https://bugzilla.redhat.com/show_bug.cgi?id=2919) -
    "touch: missing file operand" displayed while restarting
    aeolus-conductor**
-   **Redmine [2890](https://bugzilla.redhat.com/show_bug.cgi?id=2890) -
    aeolus-cli build/push lists out target image hash but does not
    associate which provider**
-   **Redmine [2891](https://bugzilla.redhat.com/show_bug.cgi?id=2891) -
    need error message for image import with incorrect parms**
-   **Redmine [2892](https://bugzilla.redhat.com/show_bug.cgi?id=2892) -
    trim whitespaces in /etc/aeolus-configure/nodes configs**
-   **Redmine [2909](https://bugzilla.redhat.com/show_bug.cgi?id=2909) -
    new script to read in config files and ensure it is properly
    formatted**
-   **Redmine [2893](https://bugzilla.redhat.com/show_bug.cgi?id=2893) -
    aeolus-cleanup cleans up everything, should be more selective**
-   **Redmine [2894](https://bugzilla.redhat.com/show_bug.cgi?id=2894) -
    unmount rhevm nfs failure error; device is busy**
-   **Redmine [2895](https://bugzilla.redhat.com/show_bug.cgi?id=2895) -
    aeolus-configure-image returns /usr/bin/ruby: No such file or
    directory --
    /usr/lib/ruby/gems/1.8/gems/aeolus-image-0.1.0/bin/aeolus-image
    (LoadError).**
-   **Redmine [2898](https://bugzilla.redhat.com/show_bug.cgi?id=2898) -
    aeolus-configure-2.0.1-1.el6.fc14.noarch fails http 404 on
    https://localhost/conductor/providers**
-   **Redmine [2901](https://bugzilla.redhat.com/show_bug.cgi?id=2901) -
    "Error Downloading Packages: rubygem-webmock-1.6.4-1.fc15.noarch:
    failure:" in install aeolus on f15**
-   **Redmine [2902](https://bugzilla.redhat.com/show_bug.cgi?id=2902) -
    'Failed to find root/Administrator password in TDL" error in
    aeolus-image build**
-   **Redmine [2912](https://bugzilla.redhat.com/show_bug.cgi?id=2912) -
    As a user of the cli, I want a stable api structure**
-   **Redmine [2913](https://bugzilla.redhat.com/show_bug.cgi?id=2913) -
    Propose change, if needed, get buy-in from group**
-   **Redmine [2914](https://bugzilla.redhat.com/show_bug.cgi?id=2914) -
    Implement change based on design change to cli**
-   **Redmine [2916](https://bugzilla.redhat.com/show_bug.cgi?id=2916) -
    Configure should not write /root/.aeolus-cli**
-   **Redmine [2918](https://bugzilla.redhat.com/show_bug.cgi?id=2918) -
    Configure should set owner of pg\_hba.conf to postgres**
-   **Redmine [2920](https://bugzilla.redhat.com/show_bug.cgi?id=2920) -
    aeolus-cli rename to aeolus**
-   **Redmine [2767](https://bugzilla.redhat.com/show_bug.cgi?id=2767) -
    Provisioning F16 and exploring Openstack feature**

### Bugzilla

-   [Click here to view the full list of recently VERIFIED
    bugs.](https://bugzilla.redhat.com/buglist.cgi?bug_status=VERIFIED&classification=Red%20Hat&product=CloudForms%20Cloud%20Engine&query_format=advanced&order=changeddate%20DESC)
</div>
