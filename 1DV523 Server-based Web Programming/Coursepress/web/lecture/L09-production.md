## Content

How to setup a production server, specifically to solve the Assignment 3.



## Introduction

In the following text and demo videos we will go through how to work with our own private cloud. All student will get an own Linux virtual server to use as a production server for your web application. The severs will be taken down after the examination.

The recommendation is to follow along in this exercise before you start working on the examination assignments.

**NOTE**. The computer you have access to is publicly reachable over the Internet. You are only allowed to use this machine for the purposes described in this course. You are not allowed to use the machine for private projects.

**NOTE**. The SSH-key you have received (through GitLab) should be considered a secret, and it is important that you do not send it to a third party or show the key in any online streams.



## What to do

This is a brief list of things that this exercise will process. You can, if you like, try to do it by your self by reading the documentation, or by follow along in the recordings.

1. Connect to your cloud server

    1. Download the SSH-key
    1. Connect to the server using SSH

1. Update the server and install:

    1. npm and node

1. Configure NGINX to serve as a proxy for your applications

1. Add HTTPS support using Lets Encrypt

1. Enable HTTP2 (optional)



## Step 1 - Connect to your server

First of all you need to download the SSH-key from Gitlab. You find the file in a project called "Secrets" in your course.

<iframe width="650" height="315" src="https://www.youtube.com/embed/hb0fWnC8BxI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Useful commands

```
# Change the mod of the ssh key file
chmod 600 ~/.ssh/the-ssh-key

# Login using a ssh key file
ssh ubuntu@{HOST} -i ~/.ssh/the-ssh-key

# Add the ssh key file and login with easier access
ssh-add ~/.ssh/the-ssh-key
ssh ubuntu@{HOST}
```



## Step 2 - Update, Upgrade and install Node and NPM

<iframe width="650" height="315" src="https://www.youtube.com/embed/HfAkTO1fT38" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Useful links

* [Node.js - Installation](https://nodejs.org/en/download/package-manager/)



### Useful commands

```
# Update and upgrade your system
sudo apt-get update
sudo apt-get dist-upgrade

# Install version (14) of Node (get the latest stable)
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Check versions (you might have other versions)
$ git --version
git version 2.25.1
$ node --version
v14.15.1
$ npm --version
6.14.8
```



## Step 3 - Configure NGINX

<iframe width="650" height="315" src="https://www.youtube.com/embed/9GYAJqdLIas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Useful links

* [Nginx - Installation](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)



### Useful commands

```
# Install nginx
sudo apt-get install nginx

# Check status and reload after changes in configuration
sudo systemctl status nginx
sudo systemctl reload nginx
sudo systemctl restart nginx

# Location of nginx configuration files
/etc/nginx/nginx.conf            # Location of global config file
/etc/nginx/sites-enabled/default # Location of default server
                                 # block config file.
```

**Tip** Useful terminal texteditors to view and edit configuration files are `vim` and `nano`.



## Step 4 - Add TLS (https)

**NOTE**. Since Lets Encrypt has a rate limit of 50 certificates per week and domain (lnu.se) we might reach the limits from time to time. I that happens please notify in Slack. The only thing to do then is to wait for the limit to be reset.

<iframe width="650" height="315" src="https://www.youtube.com/embed/utnjcnpA9-o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Useful links

* [Lets Encrypt](https://letsencrypt.org/)
* [CertBot](https://certbot.eff.org/)



### Useful commands

**Tip** Optional learn to use a terminal multiplexor lite `tmux` or `screen`. You will then be able to save your terminal session at the server and connect to it on next login.



## Step 5 - Enable HTTP v2 (optional)

This is an optional step, but it is also a small and easy step. We will probably get around just fine using good old http 1.1.

<iframe width="650" height="315" src="https://www.youtube.com/embed/OlKTgvaVilI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Step 6 - Process Manager, PM2

In this step we will make sure our applications keeps on running on our server using a process manager.

<iframe width="650" height="315" src="https://www.youtube.com/embed/xw5egjhhBGc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Useful commands

```
sudo npm i pm2 -g
PORT=5001 pm2 start npm --name hello-world:5001 -- start // Run "npm start" with port set to 5001
pm2 logs
pm2 monit
```



## Step 7 - Getting the code to the server

Now, how do we get the code to the production server? There are several ways:

...using secure copy, FileZilla or VSCode

<iframe width="650" height="315" src="https://www.youtube.com/embed/n-nONBpeVVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Useful links

* [SCP man](https://linux.die.net/man/1/scp)
* [FileZilla](https://filezilla-project.org/)
* [VSCode - Remote SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)



<!--

### Getting your SSH key and connect to your server

To log into your server you will need a SSH key and connect though SSH. Since the server you will connect to is a Ubuntu server there will be no graphical interface and all the configuration will be done through the terminal. If you running MacOS or Linux you should be able to use the terminal. If you are on Windows you should use the Git-bash program (or WSL/Cygwin) that should have support for SSH.

The first thing you do is to go to the [Cloud info page](https://coursepress.lnu.se/kurs/serverbaserad-webbprogrammering/cloud-info/) on the course page. You must be logged into CoursePress (use your student account) to se your private link. Download your SSH key pair to your local computer and remember your IP-address. Unzip the keypair-files. You probably have two, one .ppk and one .pem. It is the latest we should use when connecting to the server.

<iframe width="650" height="315" src="https://www.youtube.com/embed/Umv435zkYrI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Installing Node.js on your server

In this video we will install Node.js and npm on a Ubuntu 18.04.

<iframe width="650" height="315" src="https://www.youtube.com/embed/g4eIphENVbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Putting a reversed proxy in front of the application

In this video we will install and configure our reversed proxy, nginx.

<iframe width="650" height="315" src="https://www.youtube.com/embed/Wod40I7Ob50" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Using a process manager

In this video we will talk about and install the process manager PM2.

<iframe width="650" height="315" src="https://www.youtube.com/embed/Tce2NnH_nQU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Adding HTTPS to the server

In this video we will create and install self-signed certificates on our reversed proxy.

<iframe width="650" height="315" src="https://www.youtube.com/embed/PToV-slNqQI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Self-signed script](https://gist.github.com/thajo/900c9b3bd42c0773adb197199928f14c)



### Getting our code up to the server

In this video we will show ways of putting your code onto the Ubuntu server.

<iframe width="650" height="315" src="https://www.youtube.com/embed/u0bWzSvcrnY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The link to the [article discussed in the video](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps).

-->



## Resources

Review these resources.

About Linux.

* If you feel the need of learning more about Linux (commands, tools, bash scripting and so on) there is a [Linux learning object](https://github.com/CS-LNU-Learning-Objects/linux) available.

About a production server.

* In the book "Web development with Node and Express" chapter 21, 22.
* [Hands-on tips about how to configure Node.js and Express.js for production](https://github.com/1dv023/syllabus/blob/master/lectures/06/production_nodejs.md)
* Additional tips on [how to setup Node/Express server](http://expressjs.com/en/advanced/best-practice-performance.html).

Optional.

* Focusing on the [bigger picture of taking code to production](https://github.com/1dv023/syllabus/blob/master/lectures/06/Production.md).



<!--
Old source:
https://raw.githubusercontent.com/1dv023/syllabus/master/lectures/06/l06.md
-->
