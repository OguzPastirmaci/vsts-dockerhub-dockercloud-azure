### 1. Set up Linux virtual machine in Azure as the Build Agent

**1.** Go to <https://portal.azure.com>

**2.** Click the **New** button in the top left corner of the Azure portal

![](<media/azure_new_resource.png>)

**3.** Select **Compute**, then **Ubuntu Server 14.04 LTS**, and click
**Create**

![](<media/new_ubuntu_vm.png>)

**4.** Enter a **host name**, **user name**, and **password**. Click **Create**

![](<media/create_vm_opts.png>)

**5.** Once the machine has been created select the **tile for the machine**,
click on **Endpoints**, and note the public **DNS name** and the **public port**
that was chosen for SSH access.

![](<media/ssh_details.png>)

**6.** Connect via SSH to the new Linux machine using the **public DNS name** and **public port** from step five.

	ssh <user>@<public_dns> -p <public_port>

![](<media/create_ssh.png>)

**7.** Run the following commands to install **Node.js**:

    curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -

    sudo apt-get install -y nodejs

**8.** Install the dependencies on the Build Agent VM. You can install them during the build, but pre-installing them saves time. Easiest way to install them is to download the packages.json file and running npm to install the dependencies:

    wget https://raw.githubusercontent.com/OguzPastirmaci/vsts-dockerhub-tutum-azure/master/package.json

    sudo npm install
	

**9.** Our build server is ready to install a build agent on it, but first we
need to create a new build agent pool. Go to your **account home page**:

	https://<account>.visualstudio.com

**10.** Click the **gear in the top right** of the page to go the administration
page

**11.** Go to the **Agent pools** tab and then click **New pool...**

![](<media/new_agent_pool.png>)

**12.** Enter **linux** for the name of the agent pool, and then click **OK**

![](<media/agent_pool_details.png>)

**13.** We are not ready to install the agent installer once globally on our
build machine. This doesn't install an agent, it simply pulls down the agent
installer. Go back to the ssh session, and **enter these commands** to install
the Visual Studio Online agent installer:

**NOTE:** Do not change $USER with your user, keep it as $USER.

	sudo npm install vsoagent-installer -g
	sudo chown -R $USER ~/.npm

**14.** Create an agent by running the following commands:

	cd ~/
	mkdir myagent
    cd myagent
	vsoagent-installer

This installs the agent to the directory **~/myagent**.

**15.** The first time we run the agent, it will be configured. Run the agent
with the following command:

	node agent/vsoagent

**16.** Enter the following information when prompted:

-   Alternate username

-   Alternate password

-   Server URL (Visual Studio Online URL)

-   Agent name (press enter for default)

-   Agent pool (enter in **linux** - the pool created earlier in this lab)

![](<media/start_agent.png>)

And now, you have a build agent configured for Visual Studio Team Services.
	