---
title: Submitting patches
layout: page
title: "Submitting patches"
summary: "Submitting patches"
---
{::options parse_block_html="true" /}

Submitting patches
==================

Patches to improve Aeolus are very welcome, and encouraged.

<div class="section-grouping">
Preparing patches
-----------------

Patches should be generated with
[`git format-patch`](http://kernel.org/pub/software/scm/git/docs/git-format-patch.html)
and sent to the appropriate mailing list using
[`git send-email`](http://kernel.org/pub/software/scm/git/docs/git-send-email.html).

-   **DO** include a short summary in your patch as a description,
    followed by all information that would be useful to a reviewer
    and/or someone looking back at git history to see what you did.

    For example:

        Fix adding account to pool functionality

        We had an issue with blah where we were checking foo instead of
        bar, this resulted in xyz, and required that we abc to get it
        correct again.

-   **DON'T** put all that above info in the first line of your patch.
    It makes things like `"git log --oneline"` unreadable.

-   **DO** use the --compose flag to add a summary explaining your
    patchset, if you think it may be unclear to a reviewer why this is a
    set vs a single patch. Also use it to add any over-arching details
    that may be missed by reading just the individual commit messages.
</div>
<br />

<div class="section-grouping">
Where to email them
-------------------

For all parts of Aeolus except Image Warehouse, they should be emailed
to the
[aeolus-devel](https://fedorahosted.org/mailman/listinfo/aeolus-devel)
mailing list.

Patches for Image Warehouse should be emailed to the
[iwhd-devel](https://fedorahosted.org/mailman/listinfo/iwhd-devel)
mailing list.
</div>
<br />

<div class="section-grouping">
The Review process
------------------

We use a Submit ⇒ ACK ⇒ Push approach for all patches.

When a patch is submitted, someone familiar with that area of the
Aeolus code manually reviews it.

When they've finished their review, appropriate feedback is emailed to
the public mailing list for potential discussion, including either an
**ACK** indicating approval, or **NACK** indicating it was rejected.

If the patch was approved, someone with write access to the appropriate
git repository will then apply the patch.

This approach works well for us, letting us benefit from each others
knowledge and strengths. Plus it's a good way for people of all skill
levels to hone their technique (or teach others).
</div>
