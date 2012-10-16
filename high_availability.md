---
title: High Availability
layout: page
title: "Aeolus High Availability"
summary: "Aeolus High Availability"
---
{::options parse_block_html="true" /}

High Availability
=================

Since March the [Pacemaker Cloud
project](http://www.pacemaker-cloud.org "Pacemaker Cloud project") has
been working to provide high availability functionality for Aeolus.
</div>
<br />

<div class="section-grouping">
What is high service availability?
----------------------------------

A high degree of availability
([link](http://en.wikipedia.org/wiki/Availability "Availability article on wikipedia"))
applied to end user applications.

For more details, see further detailed mathematical constructs in this
presentation (pdf):

   
[http://www.redhat.com/summit/2011/presentations/summit/whats\_new/thursday/dake\_th\_1130\_high\_availability\_in\_the\_cloud.pdf](http://www.redhat.com/summit/2011/presentations/summit/whats_new/thursday/dake_th_1130_high_availability_in_the_cloud.pdf "High Availability in the Cloud")
</div>
<br />

<div class="section-grouping">
How do you achieve high service availability?
---------------------------------------------

There are four major steps:

1.  Monitor failure of components
2.  Isolate and terminate failed components
3.  Recover components by restart and escalation
4.  Report errors so a physical repair can be made
</div>
<br />

<div class="section-grouping">
How does this relate to Aeolus?
-------------------------------

Aeolus has several components that we are interested in appling the HA
methodology to.

These are **applications**, **assemblies**, and **deployables**.

In order to execute the high availability methodology, pacemaker-cloud
needs to know how an application is **started**, **stopped**, or
**monitored**. This is usually achieved via init scripts, but custom
mechanisms could also be used.
</div>
<br />

<div class="section-grouping">
What is recovery escalation?
----------------------------

If steps 2 or 3 fail, it is an indicator that the higher level object
may have failed, and at minimum can no longer be trusted.

For example, if an application fails to restart, the assembly may be
bad.

To resolve this problem, we escalate application failures into assembly
failures.
</div>
<br />

<div class="section-grouping">
Why monitor applications at all?
--------------------------------

Monitoring applications allows the complete High Availability (HA)
methodology to be applied to enterprise and open source applications.

This monitoring provides improved availability.
</div>
<br />

<div class="section-grouping">
Why not have the cloud provider tell when an assembly has failed?
-----------------------------------------------------------------

Typically cloud providers can tell if a VM crashes or disappears, but
can't tell whether the VM's operating system and applications are still
functioning.

This can lead to situations where the VM has failed in some way that the
cloud provider isn't aware of because it uses passive monitoring.

A better approach approach is to use active monitoring, where the
software running in the virtual machine is checked periodically to
ensure it is functioning correctly.
</div>
<br />

<div class="section-grouping">
What do we need out of Aeolus?
------------------------------

1.  We need
    [Matahari](https://github.com/matahari/matahari/wiki "Matahari Wiki link")
    installed into the assemblies, whether at instance build or launch
    time.

2.  An XML schema to describe the user application's **start**,
    **stop**, and **monitoring** mechanism.

    This is typically achieved through init scripts or OCF compliant
    scripts on the assembly.
</div>
