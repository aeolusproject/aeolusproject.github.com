---
layout: page
title: "Submitting pull requests"
summary: "Submitting pull requests"
---
{::options parse_block_html="true" /}

Submitting pull requests
========================

Pull requests to improve Aeolus are very welcome, and encouraged. Majority of
our projects accept pull requests on GitHub. Deltacloud does not use GitHub and
has its own
[contribution guide](http://deltacloud.apache.org/how-to-contribute.html).

<div class="section-grouping">
Preparing pull requests
-----------------------

Please follow a few basic principles in your pull requests:

-   **DO** include a short summary in your commits as a description,
    followed by all information that would be useful to a reviewer
    and/or someone looking back at git history to see what you did.

    For example:

        Fix adding account to pool functionality

        We had an issue with blah where we were checking foo instead of
        bar, this resulted in xyz, and required that we abc to get it
        correct again.

-   **DON'T** put all that above info on the first line of the commit message.
    It makes things like `"git log --oneline"` unreadable.

-   **DO** provide a summary for your pull request, if you think its purpose
    might be unclear to others. Also comment on any over-arching details that
    may be missed by reading just the individual commit messages.
</div>
<br />

<div class="section-grouping">
Where to submit pull requests
-----------------------------

Here are the individual project locations:

* [Conductor](https://github.com/aeolusproject/conductor)

* [ImageFactory](https://github.com/aeolusproject/imagefactory)

* [Oz](https://github.com/clalancette/oz)

* [Tim](https://github.com/aeolus-incubator/tim)

* [Audrey](https://github.com/aeolusproject/audrey)

* [Aeolus-configure](https://github.com/aeolusproject/aeolus-configure)

* [CLI](https://github.com/aeolus-incubator/thor-cli)

* [DevTools](https://github.com/aeolus-incubator/dev-tools)

* [Website](https://github.com/aeolusproject/aeolusproject.github.com)

For Deltacloud, look at
[Deltacloud contribution guide](http://deltacloud.apache.org/how-to-contribute.html).


</div>
<br />

<div class="section-grouping">
The Review process
------------------

We use a Submit ⇒ ACK ⇒ Merge approach for all pull requests.

When a pull request is submitted, someone familiar with that area of the Aeolus
code manually reviews it.

When they've finished their review, appropriate feedback is posted to the pull
request on GitHub for potential discussion, including either an **ACK**
indicating approval, or **NACK** indicating it was rejected.

If the pull request was approved, someone with write access to the appropriate
git repository will then merge it.

This approach works well for us, letting us benefit from each others
knowledge and strengths. Plus it's a good way for people of all skill
levels to hone their technique (or teach others).
</div>
