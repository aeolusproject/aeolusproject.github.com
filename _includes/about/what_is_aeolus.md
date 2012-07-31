What is Aeolus?
---------------

Aeolus is a single, consistent set of tools to build and manage
organized groups of virtual machines across clouds.

So, what does Aeolus need to provide a user to accomplish its mission?

-   **Aeolus Conductor:** A way to provide cloud resources to users,
    manage users' access to and use of those resources, and control
    users' instances in clouds. This lets users make intelligent choices
    about which cloud to use.
-   **Aeolus Composer:** A way to build cloud-specific images from
    generic templates, so that users can choose clouds freely using
    compatible images.
-   **Aeolus Orchestrator:** A way to manage clumps of instances in an
    organized way. Users should be able to automatically bring up a set
    of different instances on a single cloud or spanning multiple
    clouds, configure them, and tell them about each other.
-   **Aeolus HA Manager:** A way to make instances or clumps of
    instances in the cloud highly available.

All these things are possible because of the
[Deltacloud](http://www.deltacloud.org "Deltacloud web site")
cross-cloud abstraction library. Deltacloud itself is a separate
project.

