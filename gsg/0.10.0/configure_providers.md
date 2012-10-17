---
title: GSG 0.10.0 - Configure providers
layout: gsgpage
title: "GSG 0.10.0 - Configure providers"
summary: "GSG 0.10.0 - Configure providers"
---
{::options parse_block_html="true" /}

Configure your Cloud Providers
==============================

On this page we configure Aeolus for **Mock**, a *pretend* Cloud
Provider. It is useful for demonstration and testing purposes.

We also (optionally) configure for EC2. This requires an existing Amazon
AWS account. You can skip this part if you want.

Which provider would you like to configure?
-------------------------------------------

-   [Mock Provider](#mock "Mock Provider")
-   [Amazon EC2](#ec2 "Amazon EC2")

<div class="page-listing">
### Getting Started Guide

1.  [Basic Glossary](basic_glossary.html "Basic Glossary")
2.  [Configuring Aeolus](configuring_aeolus.html "Configuring Aeolus")
3.  [First login](first_login.html "First login")
4.  Configure your Cloud Providers
5.  [Configure the Aeolus Command Line Interface
    tool](configure_cli.html "Configure the Aeolus Command Line Interface tool")
6.  [Create a Fedora 16
    Template](make_template.html "Create a Fedora 16 Template")
7.  [Start an Instance of the
    Image](start_image.html "Start an Instance of the Image")
8.  [Stop a running Instance](stop_image.html "Stop a running Instance")
9.  [Cleaning up](cleaning_up.html "Cleaning up")
</div>

Mock Provider
=============

<div class="section-grouping">
## 1. Confirm the Mock Provider account exists

The mock provider account should already exist. Follow these steps to
confirm.

1.  *In the Aeolus web interface* go to **Administer** ⇒ **Cloud Providers**.
2.  Choose the mock provider in the upper right hand corner.
3.  Click "Accounts" just below the choose provider selector.
4.  An account name "mock" should already exist.

If the account doesn't exist, you can create it by following these
steps:

1.  From the Accounts page, Click the "New Account" button.
2.  For **Account name** use "*mock*". For **Username** use
    "*mockuser*". For **Password** use "*mockpassword*".
</div>
<br />

Amazon EC2
==========

<div class="warning">
**WARNING:** Amazon and other Cloud providers charge fees for using
their products and services, including EC2.

Setting up EC2 with Aeolus means your Amazon EC2 account will be billed
with their appropriate usage charges as you follow this guide and/or try
things out.

We **ARE NOT** responsible for any EC2 or other Cloud fees and charges
you may incur.

As a precaution after finishing every Aeolus testing session, you
**must** manually check all storage and instances in Amazon have been
terminated and removed as you expect.

Development versions of Aeolus have on occasion been known to report
instances as stopped when they are in fact still running in EC2, thereby
incurring charges from Amazon.

**BE CAREFUL!**
</div>
<br />

<div class="section-grouping">
## 1. Configure EC2 credentials in Aeolus

Follow these steps to configure Amazon EC2 with Aeolus.

In the *Administer* tab, click the **Cloud Providers** button. This
switches to a view showing the configured Cloud Providers.

[![Click the Cloud Providers button - click to view at full size in a new
window](images/thumbnails/click_cloud_providers_thumb.png "Click the Cloud Providers button - click to view at full size in a new window")](images/click_cloud_providers.png)

Amazon EC2 was automatically populated by the *aeolus-configure* command
we gave earlier. It includes:

-   ec2-us-east-1
-   ec2-us-west-1
-   ec2-us-west-2
-   ec2-eu-west-1
-   ec2-ap-northeast-1
-   ec2-ap-southeast-1

At the top of the Cloud Providers page, there is a drop down list
listing available providers. You should see the

above list of providers, and you can select whichever region you wish to
use.

With a provider selected, press the "Accounts" button, and then choose
"New Account."

Fill in the EC2 account details, with your Amazon AWS account info. The
information you need from Amazon is on their AWS [Security ⇒ Security
Credentials](https://aws-portal.amazon.com/gp/aws/developer/account/index.html?action=access-key "Security Credentials")
page.

[![Fill in AWS account details - click to view at full size in a new
window](images/thumbnails/fill_in_ec2_account_details_thumb.png "Fill in AWS account details - click to view at full size in a new window")](images/fill_in_ec2_account_details.png)

When you are done, click the "**Save** button".
</div>
<br />

<div class="section-grouping">
## 2. Verify the account details work

After saving the account above, you can press the "Test Connection"
button to test your credentials.

[![Account properties view - click to view at full size in a new
window](images//thumbnails/ec2_account_testing_thumb.png "Account properties view - click to view at full size in a new window")](images/ec2_account_testing.png)
</div>

<a class='button' href='configure_cli.html' title='Configure the Aeolus Command Line Interface tool'>
  Configure CLI <img alt='→' src='../../images/button-right.png' />
</a>