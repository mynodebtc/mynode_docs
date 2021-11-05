# My Web Browser shows an Error

When you first connect to your node, it may use HTTP which is less secure than HTTPS. Most users will want to start using HTTPS by clicking the lock icon in the top right of the home page, once it loads.

## You see a "Your connection is not Private" Error

Some users browsers will show an error and it may appear like myNode interface cannot load. In most cases, the browser is warning you that the certificate is unknown to the browser because the certifcate being used is self-signed by the device. Since the myNode interface is not a public website, the browser can't verify the validity of the certificate, like it does for public websites.

You may see an error similar to this.

<center>
  <figure>
    <img src="/images/troubleshooting/https_error_2.png" alt="HTTPS Error">
  </figure>
</center>

First, click on the Advanced button to open more options.

<center>
  <figure>
    <img src="/images/troubleshooting/https_error_3.png" alt="HTTPS Error">
  </figure>
</center>

Then, click the proceed link. Even though it may say unsafe, the HTTPS certificate is still providing security between your browser and the device.

## You see an "Not Connection" Warning

Even after accepting the certificate in the section above, you may still see a warning in your browser about the site not being secure, like below.

<center>
  <figure>
    <img src="/images/troubleshooting/https_error_1.png" alt="Insecure Warning">
  </figure>
</center>

This is caused by the same reason as above. The certificate is providing security between your browser and the device, but the web browser cannot verify the certificate came from a trusted source, like it does with public websites.