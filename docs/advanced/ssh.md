# Using SSH Key Authentication

## Connecting to MyNode with SSH Key Authentication

You can increase security to your device by limiting SSH access to the MyNode device to only the computer(s) holding a special key.
Setup Key Based Authentication

On your PC, open a terminal window.

1. SSH into your MyNode with username 'admin' at(@) its network IP, example:

```sh
ssh admin@192.168.1.123
```

Response from the computer:

```sh
The authenticity of host '192.168.1.123 (192.168.1.123)' can't be established. ECDSA key fingerprint is SHA256:A5qAKCyxD1E0ApKdqUzU6rR5HMwRPHRO. Are you sure you want to continue connecting (yes/no)?
```

2. Agree by typing yes

3. Enter your password when required, default = `bolt`

```sh
                 _   _           _
 _ __ ___  _   _| \ | | ___   __| | ___
| '_ ` _ \| | | |  \| |/ _ \ / _` |/ _ \
| | | | | | |_| | |\  | (_) | (_| |  __/
|_| |_| |_|\__, |_| \_|\___/ \__,_|\___|
           |___/

Welcome to MyNode!
Linux MyNode 4.19.75-v7l+ #1270 SMP Tue Sep 24 18:51:41 BST 2019 armv7l GNU/Linux

System load:   1.46 1.56 1.21   Up time:       21 min
Memory usage:  6 % of 3955MB    IP:            192.168.1.123
Usage of /:    17% of 29G       storage/:      13% of 1.8T


=======================================================
===            Visit the MyNode Web GUI
===               http://mynode.local/
===                        OR
===              http://192.168.1.123/
=======================================================

Last login: Thu Oct 10 19:28:45 2019 from 192.168.99.99
```

You're now logged on onto the device using SSH and by default you should be in Your home folder (home folder symbol = '~').
Example:

```sh
admin@MyNode:~ $
```

4. Now type the following, creating a folder called '.ssh'

```sh
admin@MyNode:~ $ mkdir .ssh
```

5. Go into the folder called '.ssh'

```sh
admin@MyNode:~ $ cd .ssh
```

6. Open a new file called 'authorized_keys' using a text editor called 'nano'

```sh
admin@MyNode:~/.ssh $ sudo nano authorized_keys
```

7. Leave this terminal window as-is (text editor is open and the screen is empty).

8. On the PC open a SECOND terminal window (CMD)

9. Goto your home folder, example: C:\Users\ME>

10. Generate new private and public keys on the client (in this case the PC) using 'ssh-keygen'

```sh
C:\Users\ME>ssh-keygen

Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\ME/.ssh/id_rsa): id_rsa
Enter passphrase (empty for no passphrase): Dont enter any passphrase here
Enter same passphrase again: Again, dont enter any passphrase here
Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.
The key fingerprint is:
SHA256:A5qAKCyxD1E0ApKdqUzU6rR5HMwRPHROasdf ME@PC-name
The key's randomart image is:
+---[RSA 2048]----+
|                .|
|             . 3 |
|            3 =  |
|           3 =   |
|        S . o .  |
|         bhT0yw` |
|        .bhT0yw`o|
|         .bhT0yw`|
|          bhT0yw`|
+----[SHA256]-----+
```

11. Goto the directory '.ssh' created in your home folder

```sh
C:\Users\ME>cd .ssh
```

12. Look into the public key file by showing the information it's holding using 'type':

```sh
C:\Users\ME\.ssh>type id_rsa.pub

ssh-rsa LjH~pJep_{FTU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-PbskEiD8jD8pQheyCE6q'TU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-+1rzXelrHziIW6Ohem5V1ZKmf+q'TU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-PbskEiD8jD8pQheyCE6q'TU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-+q'TU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-PbskEiD8jD8pQheyCE6Gjq'TU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-PbskEiD8jD8pQ ME@PC-name
```

13. Select and copy/paste all text (everything in between and including 'ssh-rsa .... ME@PC-name' in the id_rsa.pub file on the PC from the SECOND terminal window (current) into the open authorized_keys file on the device in the FIRST terminal window (the one you left as-is) You can do this by left-click and drag the mouse over all the text, and when all is selected press key combination CTRL-C. To paste in the FIRST terminal window (the empty file), right-click the mouse.

14. When the publickey information is pasted into the other terminal screen, close the editor by using the keys:

```sh
[CTRL-X]
	Save modified buffer?  (Answering "No" will DISCARD changes.)
[Y]
	File Name to Write: authorized_keys
[ENTER]
```

15. Show the content of the newly created authorized_keys file on the device:

```sh
cat authorized_keys

ssh-rsa LjH~pJep_{FTU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-PbskEiD8jD8pQheyCE6q'TU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-+1rzXelrHziIW6Ohem5V1ZKmf+q'TU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-PbskEiD8jD8pQheyCE6q'TU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-+q'TU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-PbskEiD8jD8pQheyCE6Gjq'TU9-T*DEvwLjH~pJep_{F.i)"t8bb$_vkXYge)m<i-PbskEiD8jD8pQ ME@PC-name
```

16. Now open another file to make sure that the sudo password is not asked for at logon, so you can only logon if you are using a PC holding the correct private key:

```sh
sudo nano /etc/ssh/sshd_config
[sudo] password for admin: bolt
```

17. Make sure that for the following text in the file there is no '#' in front of the text and they all finish with the word 'no':

```sh
ChallengeResponseAuthentication no
PasswordAuthentication no
UsePAM no
```

18. Close the editor by using the keys:

```sh
[CTRL-X]
	Save modified buffer?  (Answering "No" will DISCARD changes.)
[Y]
	File Name to Write: /etc/ssh/sshd_config
[ENTER]
```

19. Restart the ssh service:

```sh
sudo service ssh reload
```

You are now able to log into your device using 'ssh admin@192.168.1.123' from a terminal window, and you'll find that you will be able to login directly without entering a password. Your device is now only accessible using ssh from this PC, or another device holding the same exact private key (id_rsa) information.
