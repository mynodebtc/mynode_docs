---
title: "Customize App Versions"
description: "Pin a specific version of Bitcoin, LND, or any bundled MyNode app, so platform updates cannot change it. Useful during contentious forks or early releases."
tags:
- "MyNode"
- "app versions"
- "advanced setup"
- "package management"
---

# Customize App Versions

In some situations, like in the case of contentious forks, you may want to use a specific application version and not upgrade to the one used by MyNode or upgrade to a new release prior to its inclusion in a MyNode release. If that were to happen, MyNode includes a tool to override the application version that is installed.

## Customizing an Application Version

To start customizing an app version, first go to the settings page and click on the 'Customize Application Versions' button. A link it also available on the bottom of the Manage Apps page.

<center>
  <figure>
    <img src="/images/advanced/custom_app_1.png" alt="Applications section of the MyNode settings page with the Customize Application Versions button highlighted">
  </figure>
</center>

This will open the application customization page which has a table of all applications.

<center>
  <figure>
    <img src="/images/advanced/custom_app_2.png" alt="Customize Application Versions page listing each app with its current version, latest version, and a Customize button">
  </figure>
</center>

Each app row shows the current version (if installed) and the latest version. To customize the latest version, click the Customize button and text field will appear. You can then enter the custom version and click Save.

<center>
  <figure>
    <img src="/images/advanced/custom_app_3.png" alt="Bitcoin row of the version table with a text field open for entering a custom version, next to Save and Cancel buttons">
  </figure>
</center>

Once saved, the application's Latest Version will be updated to the one you entered.

<center>
  <figure>
    <img src="/images/advanced/custom_app_4.png" alt="Bitcoin row after saving, showing the latest version replaced by the custom version with a pin icon and a Clear button">
  </figure>
</center>

After the custom app has been saved, the app still needs to be upgraded. To perform the upgrade, navigate to the Manage Apps page via the icon in the top left. Once on the Manage Apps page, you will see a pin icon next to the app you customized indicating it has a customized version.

<center>
  <figure>
    <img src="/images/advanced/custom_app_5.png" alt="Bitcoin row on the Manage Apps page showing a pin icon beside the custom version, with Disable, Restart, Upgrade, and Reinstall buttons">
  </figure>
</center>

To upgrade the app, click the Upgrade button in the application row. Your device will begin upgrading the application before rebooting.

<center>
  <figure>
    <img src="/images/advanced/custom_app_6.png" alt="MyNode Installing screen reading This may take a while, with a spinner and a Show Upgrade Log button">
  </figure>
</center>

After rebooting, you can go back to the Manage Apps page and verify the Current Version and Latest Version of the app match and both indicate the custom version you chose.

<center>
  <figure>
    <img src="/images/advanced/custom_app_7.png" alt="Bitcoin row after the upgrade, with the current and latest versions both highlighted showing the same custom version">
  </figure>
</center>

Congratulations on running a custom application version!
