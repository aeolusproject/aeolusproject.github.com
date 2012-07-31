What does each Aeolus component do, specifically?
-------------------------------------------------

### Aeolus Conductor

-   lets a user launch a VM on a cloud, track it through its lifecycle,
    and clean it up when it is no longer needed.
-   lets a user easily check how much cloud time she has burned up, set
    thresholds for alerting her when interesting things happen (a VM
    crashed, she's about to go over n hours of usage this month). If an
    admin has defined a per-hour cost for the cloud providers the user
    is using, the user can check how much actual money has been used and
    set an alert on it.
-   lets an administrator group cloud resources for other users, so that
    they can track and control which resources are used and at what
    level.
-   lets a user share access to his VMs with others.
-   lets a user make an informed choice of which of the available clouds
    to use, based on cost and QOS data and other useful metrics. Or,
    lets the user delegate that choice to Conductor itself.
-   lets the user monitor software and services on the guest, and the
    health of the guest.
-   has a truly superior GUI for doing all this.

### Aeolus Composer

-   lets users create a template that defines an image, which we can
    build for each cloud they are interested in
-   lets users, as part of building the image, specify arguments to pass
    into the build process to configure software installation, and also
    to specify values that will be passed back into the image metadata
    to be used later
-   lets users build images for multiple operating systems, including
    Windows and various Linux flavors
-   lets users rebuild images from the original template if needed, to
    update packages for feature enhacements, bug fixes, or security
    issues

### Aeolus Orchestrator

-   lets users specify a clump of images to launch and configure
    simultaneously. We want the user's specification to be human
    readable and portable
-   lets users specify values to collect at launch-time. The values will
    influence how the instances configure themselves, either by being
    interpolated into config snippets in the clump specification, or by
    being passed directly to the instance post-boot. Launch-time values
    mean the instances in a clump can be configured differently each
    time they are launched. (For example, suppose the user wants to
    specify in advance the timezone the app should run in. They would
    set that parameter in a form presented at launch-time, and it would
    be passed through to the instance and applied to the system
    configuration at boot time.)
-   lets users provide configuration parameters and tooling for each
    instance, to be injected and run at launch time. User-provided
    configuration tooling can do anything including install software
    packages, set config values, or start and stop services. Config
    tooling can be in any form that the user's image supports -- puppet
    manifest, bash script, powershell script are all fine.

### Aeolus HA Manager

-   lets users include instances or clumps of instances in an HA
    infrastructure which provides isolation, recovery, and notification
    of failed applications or instances
-   lets users specify policy for maintaining or relaunching services
    within an HA infrastructure

