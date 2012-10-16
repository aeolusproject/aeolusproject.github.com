---
title: Aeolus 0.10.0 - Release Notes
layout: page
title: "Aeolus 0.10.0 - Release Notes"
summary: "Aeolus 0.10.0 - Release Notes"
---
{::options parse_block_html="true" /}

Aeolus 0.10.0 series - Release Notes
====================================

<div class="page-listing">
### Table of Contents

1.  [Known issues](#knownissue "Known issue")
2.  [Git Change Log for this release](#gitchangelog "Git Change Log for this release")
</div>

<div class="section-grouping">
**New Aeolus stable release 0.10.0 is now available.**

A new stable Aeolus release is available, 0.10.0.

The team has been working on this for a while, getting things into solid
shape. As always, we really appreciate the bug reports, pointers, and
general assistance from all over. Please keep it coming. :)

Packages are available for Fedora 16 (64-bit) for this release.

-   Fedora 17 packages are being worked on, but are not ready yet.
-   RHEL/CentOS 6 packages are **not** planned for this release. This is
    a temporary thing only. They will be available for future releases.

Instructions to get and install Aeolus are on the website:

   
[http://www.aeolusproject.org/get\_it.html](get_it.html "Get Aeolus")
</div>
<br />

<div class="section-grouping">
## Known issues {#knownissue}

The following is a known problem due for resolution in a subsequent
release:

-   **BZ [747895](https://bugzilla.redhat.com/show_bug.cgi?id=831156) -
    Launching instances in VMware fails if the instance name contains
    spaces**
</div>
<br />

<div class="section-grouping">
## Git Change Log for this release {#gitchangelog}

-   3bb7de0 Fix filter\_table for Ruby 1.9
-   91a1e06 BZ831577 - Fixed regression introduced by 796528
-   a552589 Set aeolus user home directory to /usr/share/aeolus-conductor
-   47f5639 Fix the filter view toggle after converge-ui layout changes
-   5c150ad Create homedir for aeolus user
-   81f10a6 Refactor SessionEntity model to work properly with API
-   1945d37 Fixed deployment rollback
-   187756e Fix the new Provider Account form error
-   274fb0b rm3343: credential: make attributes accessible/protected
-   a66fd19 RM 3246: fix smaller issues in instance model
-   b3dc87c RM3244: fix minor issues
-   04450b5 sanitize the use of details\_tab param
-   f1cbeea Add BuildRequires for rubygem-compass and
    rubygem-compass-960-plugin
-   b388935 rpmbuild changes: added converge-ui files, compass Require
    dependency, converge-ui symlinks creation and scss compilation using
    compass into spec file
-   2836e75 Removed old favicon and added new into public/images to be
    compatible with converge-ui layout
-   9f019b6 Removed Sass::Plugin scss compilation from development
    enviromnent config because Compass watcher takes care of scss
    compilation
-   1cc41e8 Moved compass config file to proper place, removed
    unnecessary compass.scss file
-   dfdfb0d Finishing touches in converge-ui integration
-   86c6978 Added symlink for fonts, removed fonts conductor stylesheet,
    removed conductor fonts folder content
-   36a7d9d updated converge-ui to latest version
-   d49ce9f converge-ui meeting updates
-   7500a18 Adding compass gem dependancy and symbolic link for
    converge-ui template.
-   bd736c7 Unified UI (converge-ui) changes to header, footer using the
    converge-ui git submodule.
-   5674223 Revert "Revert "Merge branch 'gelato'""
-   e3cd48d RM3311 fix for date range to be inclusive of times
-   3a4be6f RM3311 added date select, ordering options, and csv export
    to log history
-   bf0595d Redmine \#3345: Initial user groups implementation
-   5b34b65 BZ 827562 - Upgrade from CloudForms 1.0 to CloudForms 1.0.1
    requires additional data definition not provided by rails migration
-   537b86f Moving the service parameter type attr off the parameter tag
    onto the value tag because the type only applys when we collect a
    value.
-   e8f5b1e If an assambly doesn't define any configserver params,
    config for this assembly is not sent to configserver.
-   65c7767 Bug 807745 add 'use provider accounts' to global image admin
    role
-   c8e2f50 bug 808031: allow Global Provider user to view Provider
    Accounts
-   18ae85c Fix files declaration for daemons subpkg
-   05a2632 Fix images\#show when there's no existing build
-   3a146ec BZ815784 added Pool Family Quota Used column to Pool
    Families table
-   8ebf737 Fix spec
-   049958c Unifiy the way we store error messages for model attributes
-   333a884 BZ808393: Fix invalid name error message
-   759dbbe BZ808338: fix ajax caching for IE
-   dec27f2 BZ 806846 Disabled submit\_tag in images\#new views when no
    provider are enabled
-   144afb2 BZ 806846 ImageController: removed duplicate code, fixed
    flash displaying
-   bdc6f3e Fix mustache template handler to work with Rails 3.1 and
    above
-   799bd3a RM \#3269: Figure out what is wrong with deps (ruby/bundler
    mode)
-   4b03851 BZ\#801971 - Scalability: Catalog Images tab,
    /conductor/pools/1?details\_tab=images&only\_tab=true, is slow
-   ccfd67e Styling for pool catalog images tab
-   bf85e5f BZ815357: api: tests for template xml in CDATA
-   b3c4ecd BZ815357: api: handle template xml in CDATA in images
    controller
-   290dde4 BZ804543: template relaxng: make rootpw mandatory
-   fe8d4ed Corrected removed obsolette
    load\_tab\_captions\_and\_details\_tab method from pool\_families
    controller, replaced provider\_account header with helper method
-   445665b Revert "removed obsolette
    load\_tab\_captions\_and\_details\_tab method from pool\_families
    controller, replaced provider\_account header with helper method"
-   5c54d1d BZ810919 mustach-ify pretty-view pool header so that
    instance/deployment counts are automatically updated
-   f454171 removed obsolette load\_tab\_captions\_and\_details\_tab
    method from pool\_families controller, replaced provider\_account
    header with helper method
-   b602b93 pool\_families partials cleanup
-   4cfd406 Fixed typo - renamed 'stopable' to 'stoppable'
-   eb0dc37 3322 - Added deployment's history tab
-   1df022a Added basic events for deployment state changes
-   f96aa8f 3321 - Added partial launch support
-   7bfb7e2 3320 - Added deployment rollback
-   1a46ebb BZ806001 - aeolus-configure will always create an admin
    user, need to key of a uuid not name
-   dbdc389 Fix line limit violations in images\_controller for mustache
    patchset
-   2f3471e Fix line limit violations in some views for mustache
    patchset
-   dbb9bcf Fix line limit violations in deployables\_controller for
    mustache patchset
-   e374dd1 Delete jquery-template js lib
-   1c2932b Mustachifying images/show
-   0138aae Mustachifying pools/\_deployments
-   aaf99e9 Mustachifying deployables/show
-   8c8be91 Redmine \#3319: Set up conductor to use new Bundler
    extension point.
-   57bdcf7 Redmine \#3318: Add small extension library to bundler to
    load system gems
-   1b77242 Add BuildRequires: systemd-units for daemons subpackage
-   da4472b Remove jquery-svg entries from rpm spec
-   89dcc58 Delete jquery-svg
-   f7c7dfa application.js: Removed unused code
-   42af2a1 Removed unused JS libraries - yetii, trimpath-template
-   1332d3d RM 3144 specify default order for associated events
-   65a472e RM 3144 don't set unscoped as default, as this messes up
    uptime calculations
-   40100c2 Fix migration after paranoid gem changed the default scope
-   0c8f597 RM 3144 added soft\_delete tests
-   1f1ac5b RM 3144 updated models to include acts\_as\_paranoid
-   01be2df RM 3144 add deleted\_at column for soft delete
-   3486b97 RM 3144 added paranoia gem
-   5905bb8 adding service dependancy support for audrey
-   a1fde11 Temporary Bugfix for adding providers.
-   708a82d added app/views/logs
-   c406ca3 Revert "Merge branch 'gelato'"
-   da432dd Removed useless @deployment\_properties variable
-   65d9d8d Cleanup of deployments create action
-   e6fcb93 Merge branch 'gelato'
-   e142db5 RM 3145 touched up code to obey 80-character line limit
-   570795c RM 3145 updates reflecting new state attribute for
    deployments
-   c64fe05 RM 3145 added css section for hover links
-   7f6c191 RM 3145 added cucumber tests
-   e119c68 RM 3145 added logs section
-   3b50091 RM 3145 added logs page
-   cc0e066 RM 3145 added logs controller
-   54e749d RM 3145 added logs route
-   8d778df Fix typo in UpdateStateForExistingDeployments migration
-   8e7559c Redmine3153 partials cleanup and fixes part1
-   e3616e8 BZ 809722 - missing template for json response
-   482437a performance fixes for Redmine feature \#3149
-   f5010a6 Redmine \#3158: Use denormalized model for permission checks
-   30473d7 redmine task \#3157: UI to show inherited permissions
-   f6b80e3 permissions denormalization: redmine \#3155 and \#3156
-   0cd0270 RM 3181 - delayed\_job support - revised
-   03b6b45 Redmine \#3233: Consolidate duplicated steps
-   4a49749 Redmine \#3211: Switch step defs for login to use DMA
-   273833b Fixed setting of deployment state for existing deployments
-   73ccace bump version to 0.10.0
-   4594b35 import converge-ui stylesheet as partial to layout.scss
-   1e601d3 removed converge-ui files from lib
-   e40e4eb changed simlinks, layout\_helper is now unmodified, disabled
    most of the converge-ui stylesheets for now, reverted to conductor
    layout to prepare for incremental converge
-   be1ebc7 added converge-ui repo as git submodule co
    vendor/converge-ui
-   622f629 Basic implementation of converge-ui code
-   003582a Copies converge-ui into lib/
</div>
