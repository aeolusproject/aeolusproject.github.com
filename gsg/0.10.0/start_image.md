---
title: GSG 0.10.0 - Start an instance
layout: gsgpage
title: "GSG 0.10.0 - Start an instance"
summary: "GSG 0.10.0 - Start an instance"
---
{::options parse_block_html="true" /}

Start an Instance of the Image
==============================

With the image pushed to your provider account, you can start instances
when desired.

We'll take you through starting an instance of the image using Aeolus's
web interface. Then, if you're using Amazon EC2, we'll show you how to
connect to that image remotely using SSH.

<div class="page-listing">
### Getting Started Guide

1.  [Basic Glossary](basic_glossary.html "Basic Glossary")
2.  [Configuring Aeolus](configuring_aeolus.html "Configuring Aeolus")
3.  [First login](first_login.html "First login")
4.  [Configure your Cloud
    Providers](configure_providers.html "Configure your Cloud Providers")
5.  [Configure the Aeolus Command Line Interface
    tool](configure_cli.html "Configure the Aeolus Command Line Interface tool")
6.  [Create a Fedora 16
    Template](make_template.html "Create a Fedora 16 Template")
7.  Start an Instance of the Image
8.  [Stop a running Instance](stop_image.html "Stop a running Instance")
9.  [Cleaning up](cleaning_up.html "Cleaning up")
</div>

<div class="section-grouping">
## 1. Create a Catalog and Deployable

Create a deployable XML file with the following content. Use the Image
ID generated when you pushed the built image. Save it to your local
filesystem, for use in a moment.

    <deployable name="My Deployable">
      <description>This is an example deployment</description>
      <assemblies>
        <assembly name="samplehost" hwp="hwp1">
          <image id="609a6eee-5ec5-4b13-8486-7491d091f8dc" />
        </assembly>
      </assemblies>
    </deployable>

<div class="note">
**NOTE -** Get the Image ID value (above) from the aeolus-image **build**
command on the previous page.  
If you've lost it, type:

    aeolus-image list --images

to see all images and their IDs.
</div>

1.  In the Aeolus web interface, go to **Administer** ⇒ **Content**.
2.  Click the "New Catalog" button. Give your catalog a name, associate
    it with the Default pool, and save it.
3.  Click on the name of your new catalog. Click on the "New Deployable"
    button. Give your entry a name, description, and upload the
    deployable XML file you created. Save your new deployable.
4.  In the Aeolus web interface, go to the **Monitor** tab.  
    Under "Your Pools" is the default pool. On the right side of the
    default pool there's an arrow. Click the arrow and it will expose
    the button "New Deployment". Click the "New Deployment" button:

    [![New Deployment - click to view at full size in a new
    window](images/thumbnails/new_deployment_thumb.png "New Deployment - click to view at full size in a new window")](images/new_deployment.png)

5.  Give your deployment a name and upload the deployable you just
    created. Click the **Next** button.
6.  To launch the deployment click the "Launch" button.

    [![Launch Deployment - click to view at full size in a new
    window](images/thumbnails/launch_deployment_thumb.png "Launch Deployment - click to view at full size in a new window")](images/launch_deployment.png)

Aeolus will then launch an instance of the template, using the AMI created on
the previous page.

The main view will list your instances, with the message "*Deployment
launched.*" near the top:

[![Instance 1 added](images/thumbnails/instance_added_thumb.png "Instance 1 added")](images/instance_added.png)

Within a minute or two, the **State** field for the instance should change to
"*running*". The state will automatically be updated on the page; there is no
need to refresh the page.

If you are using Amazon EC2, follow the next steps to complete your
configuration.
</div>
<br />

<div class="section-grouping">
## 2. Configure EC2 for SSH connections

By default, Amazon EC2 does not allow network connections to instances.

If you want to use SSH with them, it needs to be enabled in the EC2 Security
Groups settings:

1.  In the [Amazon AWS Management
    Console](https://console.aws.amazon.com/ec2/home?#s=SecurityGroups),
    go to **EC2** ⇒ **Security Groups**.
2.  Click on the **default** security group.  
    This displays the details for the default security group, in the
    lower part of the window.
3.  Click on the **Inbound** tab.
4.  For the **Create a new rule** selector, choose *SSH*.
5.  Click the **Add Rule** button.
6.  Click the **Apply Rule Changes** button just below it.

    ![SSH rule added to EC2 default security
group](images/ec2_ssh_rule_added.png "SSH rule added to EC2 default security group")

EC2 now allows SSH connections to your instances.
</div>
<br />

<div class="section-grouping">
## 3. Retrieve the Private SSH Key

To connect to the new running instance using SSH, you need the private
key generated for it:

1.  In the Aeolus web interface, click the **MONITOR** tab.
2.  Click the name of the new running instance. **My First Deployment**
    in the above screenshot.
3.  Click the *Download Key* link to bring up a download dialog for the
    SSH private key file:

    ![Text link to Instance 1 SSH private
    key](images/instance_ssh_private_key_download_link.png "Text link to Instance 1 SSH private key")

4.  Save the private key with a name such as
    *instance\_1\_private\_key.pem*.
5.  Tighten the permissions of the saved private file to only allow
    access by yourself, and only read access:

        $ chmod 400 instance_1_private_key.pem

     **IMPORTANT:** *This is because SSH will refuse to use any private
    key with insecure permissions.*
</div>
<br />

<div class="section-grouping">
## 4. Connect to the instance

Now we connect to the new running instance using SSH:

1.  Get the public address of the instance from the instance list on the
    same screen the ssh key came from:

    ![Text link to Instance 1 SSH private
    key](images/instance_ssh_private_key_download_link.png "Text link to Instance 1 SSH private key")

2.  Launch a terminal session on your desktop.
3.  In the terminal session, start ssh, passing it the name of the
    private key file for the instance with the "*-i*" option, giving the
    root user, and giving the public address of the instance:

    $ ssh -i instance_1_private_key.pem root@ec2-67-202-12-174.compute-1.amazonaws.com
    The authenticity of host 'ec2-67-202-12-174.compute-1.amazonaws.com (67.202.12.174)' can't be established.
    RSA key fingerprint is 09:94:bc:be:1c:a0:7c:8b:50:e5:bf:42:8c:cf:86:1b.
    Are you sure you want to continue connecting (yes/no)? yes
    Warning: Permanently added 'ec2-67-202-12-174.compute-1.amazonaws.com,67.202.12.174' (RSA) to the list of known hosts.
    [root@localhost ~]#

You are now logged into the running Fedora 16 instance as the root user.

<div class="note">
**IMPORTANT:** Changes to the file system persist across reboots, but
are lost when it is shut down. This means a *yum update* (then reboot)
will be needed each time the instance is started.
</div>
</div>

<a class='button' href='stop_image.html' title='Stop an Instance of an Image'>
  Stop Image <img alt='→' src='../../images/button-right.png' />
</a>