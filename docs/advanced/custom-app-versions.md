# Customize App Versions

In some situations, like in the case of contentious forks, you may want to use a specific application version and not upgrade to the one used by myNode or upgrade to a new release prior to its inclusion in a myNode release. If that were to happen, myNode includes a tool to override the application version that is installed.

## Customizing an Application Version

To start customizing an app version, first go to the settings page and click on the 'Customize Application Versions' button.

<center>
  <figure>
    <img src="/images/advanced/custom_app_1.png">
  </figure>
</center>

This will open the application customization page and you will see an empty text field (if the first time customizing app verions) as well as a button to show the default app data. If you click "Show Default Version Config" it will display the data that is used to control which applications are installed by default on myNode. You can use this as a sample for what to enter as custom app version information.

You can override the version each application myNode installs. If you override it, future myNode updates will not affect the version you have specified.

Saving will update the "Latest Version" of an app shown on the application page. To perform the upgrade, you will need to update it there.

**Caution:** Errors in this file may prevent myNode from booting properly. To see the available variables, use the format from the included default myNode version configuration.

For example, if you are running Bitcoin Core version v0.21.1 and you wanted to use Bitcoin Core version v0.20.0, you could first verify your current version via the application page.

<center>
  <figure>
    <img src="/images/advanced/custom_app_2.png">
  </figure>
</center>

Then, you could update the version in the text field.

<center>
  <figure>
    <img src="/images/advanced/custom_app_3.png">
  </figure>
</center>

Once you have updated the config information, click "Save" and the page will reload. Then, click on the "apps" button in the top left and verify the application version has been updated. In this example, Bitcoin should show version "0.20.0" as shown below.

<center>
  <figure>
    <img src="/images/advanced/custom_app_4.png">
  </figure>
</center>

If the verison appears correct, click the "Upgrade" button next to the app and the version you specified will be installed.

<center>
  <figure>
    <img src="/images/advanced/custom_app_5.png">
  </figure>
</center>

The device will install the specified application version and reboot. After it reboots, the application version you specified will be the one that is running! You can verify on the application page once the reboot is complete.

<center>
  <figure>
    <img src="/images/advanced/custom_app_6.png">
  </figure>
</center>

Congratulations on running a custom application version!

**Caution:** Once again, be cautious with the version data you are configuring. Mistakes can cause myNode to not boot properly or the application to not install or run as expected. Custom application version are not officially supported by myNode.