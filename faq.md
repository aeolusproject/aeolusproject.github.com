---
title: Aeolus FAQ
layout: page
title: "Aeolus FAQ"
summary: "Aeolus FAQ"
---
{::options parse_block_html="true" /}

Frequently Asked Questions (FAQ)
================================

List of both non-technical, and technical, frequently asked questions
with their answers.

<div class="section-grouping">
### When loading the Aeolus Web Interface, "Service Temporarily Unavailable" is displayed.

This can be caused by SELinux running in Enforcing mode. The solution is
to change SELinux to permissive mode, by editing the
**/etc/selinux/config** configuration file.

The line to change is:

    SELINUX=enforcing

to:

    SELINUX=permissive

This change becomes effective with the next reboot.

**IMPORTANT NOTE** - Needing SELinux to not be in Enforcing mode is
purely a temporary measure.

When Aeolus reaches Production quality, it will operate normally in
Enforcing mode.
</div>
