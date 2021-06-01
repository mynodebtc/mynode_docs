# Accessing the Linux Terminal

For some issues, it can be necessary or helpful to run specific commands in Linux to diagnose or resolve issues. While this may seem complex, it might be easier than you think!

## Option 1 - Web Based Terminal

On the settings page, there is a button labeled "Linux Terminal" under the Status heading. Clicking this button open a new window and prompt for a username and password.

<center>
  <figure>
    <img src="/images/advanced/terminal1.png">
  </figure>
</center>
    
The username is "admin" and the password is the password you have set for your myNode device (default is "bolt").

<center>
  <figure>
    <img src="/images/advanced/terminal2.png">
  </figure>
</center>

After entering the username and password, you should be presented with an interactive Linux terminal in your web browser!

<center>
  <figure>
    <img src="/images/advanced/terminal3.png">
  </figure>
</center>

**Tip:** If accessing the web based Linux Terminal over Tor,  the terminal may not display properly. To resolve, click the image in the top left next to "Onion" (it looks a mountain and sun). Click to allow "Extract Canvas Data" and reload. The page should now display properly.

## Option 2 - Using SSH

In some cases, the web based Linux Terminal may not be working or you may prefer a more typical option for accessing the Linux terminal. This is done via SSH, which allows you to run an app or command on your PC to connect to the Linux shell on your device.

Good instructions for SSH access are available from Raspberry Pi's website. Start following this Guide at step #4.

<a href="https://www.raspberrypi.org/documentation/remote-access/ssh/" target="_blank">https://www.raspberrypi.org/documentation/remote-access/ssh/</a>

Once successfully connected, you should see a screen similar to this!

<center>
  <figure>
    <img src="/images/advanced/terminal4.png">
  </figure>
</center>