---
sidebar_position: 4
---
# Managing Your Forms with Gravity Forms

Using Gravity Forms in WordPress is a powerful way to create and manage forms on your website. Here's a guide covering the basic steps of using Gravity Forms, checking entries, exporting entries, configuring email notifications, and checking SMTP settings if email is not sending using the WP SMTP plugin:

:::info
Before we start, make sure you've successfully [logged in to your WordPress Dashboard](wordpress/introduction/auth/index.md) & are navigated into it.
:::

## Creating new Forms

You can create new forms in Gravity Forms by following these steps:

1. ### Create a New Form

	1. After activation, go to "Forms" > "New Form" in the WordPress admin menu.
	1. Give your form a title.
	1. Use the form builder interface to add fields to your form by dragging and dropping them from the right-hand panel.

1. ### Configure Form Settings

	1. Configure form settings such as notifications, confirmations, and form settings by clicking on the settings icon next to the form title.
	1. Set up notifications to receive emails when a form is submitted.

1. ### Publish the Form

	1. Once you've designed your form, click on the "Update" button to save changes.
	1. Copy the shortcode provided for your form.
	1. Paste the shortcode into any post, page, or widget where you want the form to appear.

## Checking Entries

To view form entries, perform the following steps:

1. Go to "Forms" > "Entries" in the WordPress admin menu.
1. Click on the form name to view entries for that form.
1. You'll see a list of all form entries, including submission date, user IP, and entry details.

## Exporting Entries

To export form entries, follow these steps:

1. Go to "Forms" > "Entries" in the WordPress admin menu.
1. Select the form for which you want to export entries.
1. Check the entries you want to export or select all entries.
1. Choose "Export" from the bulk actions dropdown menu and click "Apply."

## Configuring Email Notifications

To configure email notifications for form submissions, follow these steps:

1. Go to "Forms" > "Settings" in the WordPress admin menu.
1. Click on the "Notifications" tab.
1. Edit the default notification or create a new one.
1. Configure recipient email addresses, subject, and message content.
1. Save your changes.

## Checking SMTP Settings with WP SMTP Plugin

If you're facing issues with email notifications not sending, you can check and configure SMTP settings using the WP SMTP plugin:

1. ### Install and Activate WP SMTP Plugin

	Install and activate the WP SMTP plugin from the WordPress plugin repository.

1. ### Configure WP SMTP Settings

	1. Go to "Settings" > "Email" in the WordPress admin menu.
	1. Configure SMTP settings including SMTP host, port, encryption, authentication, and sender email address.
	1. Save your changes.

1. ### Test Email Sending

	1. Go to "Forms" > "Settings" > "Emails" in the WordPress admin menu.
	1. Click on "Send Test" next to the notification you want to test.
	1. Check your inbox to verify if the test email was sent successfully.

By following these steps, you can effectively use Gravity Forms to create and manage forms on your WordPress website, check form entries, export entries, configure email notifications, and troubleshoot email sending issues using the WP SMTP plugin.