---
title: Winged Monkey 0.2.0
layout: page
summary: "Winged Monkey 0.2.0"
---
{::options parse_block_html="true" /}

Winged Monkey 0.2.0
==========

<div class='container_24'>
  <div class='grid_8'>

| **Project**      | [Winged Monkey](http://www.wingedmonkey.org) |
| **Release**      | 0.2.0          |
| **Release Date** | March 4th, 2013 |
| **Get It**       | [Installation Instructions](http://www.wingedmonkey.org/get_started.html) |

  </div>
  <div class='grid_16'>

<div class="section-grouping">

![wm_logo](http://www.wingedmonkey.org/images/logo.png)

##Project Overview

Winged Monkey is an application that provides an elegant and intuitive user interface for self-service consumers of cloud resources.  It offers simplified interactions for non-administrative users, and allows users working with multiple cloud providers to enjoy a common user experience.

</div>

<div class="section-grouping">

##Overview

The second release of Winged Monkey expands upon the first in several directions.  oVirt is now a supported provider.  Along with that, support for starting, stopping, pausing, and resuming applications has been added.  Finally, several UI enhancements make using Winged Monkey an even smoother experience than before.

You can try the new UI features at <a href="http://demo.wingedmonkey.org">our demo server</a>.
</div>

<div class="section-grouping">

##Features

- [oVirt Support](#ovirt)
- [Application Actions](#application-actions)
- [UI Enhancements](#ui-enhancements)
- [Future Plans](#future)

</div>

<div id="ovirt" class="section-grouping">
### oVirt Support

Winged Monkey 0.2.0 includes support for [oVirt](http://www.ovirt.org).  Here are some links that explain the configuration and integration, as well as a usage guide:

* [oVirt Configuration and Technical Notes](https://github.com/wingedmonkey/documents/wiki/ovirt)
* [Using Winged Monkey with oVirt](https://github.com/wingedmonkey/documents/wiki/Using-Winged-Monkey-with-oVirt)
</div>
<div id="application-actions" class="section-grouping">
### Application Actions

The following application actions are now supported:

* start
* stop
* pause
* resume

These actions are only available if the underlying provider supports them.
</div>
<div id="ui-enhancements" class="section-grouping">
### UI Enhancements

Several enhancements have been made to the index page:

* The page now auto-refreshes, so application status changes are automatically updated
* When a user chooses to perform an action on an application, an indicator appears
* Start/stop/pause/resume actions buttons are now included if the provider supports those actions
* Action buttons are greyed out if they are invalid for that particular application
* The 'terminate application' sequence has been smoothed out
* Buttons and indicators have been made more distinct

</div>
<div id="future" class="section-grouping">
### Future Plans

For our 0.3.0 release, we will be targeting [this list of issues](https://github.com/wingedmonkey/wingedmonkey/issues?milestone=8&state=open).  Interested in our long-term plans?  Take a look at [our roadmap](http://www.wingedmonkey.org/roadmap.html).

</div>

  </div>
</div>