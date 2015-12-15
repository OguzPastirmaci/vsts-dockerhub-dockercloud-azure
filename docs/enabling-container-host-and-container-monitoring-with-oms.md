## What is Microsoft Operations Management Suite (OMS)?

Operations Management Suite (OMS) is a simplified IT Management Solution that provides Log Analytics, Automation, Backup and Site Recovery.  It also seamlessly integrates with your existing management solutions to provide a single pane of glass view. To learn more about OMS visit [microsoft.com/oms](http://microsoft.com/oms).

For our sample app, we will monitor the Azure VMs running as Docker hosts (called Nodes in Tutum) and the containers running on top of these Docker hosts (Nodes).

**1.** Sign up for Operations Management Suite trial [here](http://www.microsoft.com/en-us/server-cloud/operations-management-suite/trial.aspx).

**2.** By default, Tutum does not allow you to directly access Nodes. So we need to enable SSH access first. Follow the instructions [here](https://support.tutum.co/support/solutions/articles/5000553071-sshing-into-a-tutum-node) to enable SSH access to your nodes.

**3.** SSH to the node and run the following commands to install the Operations Management Suite (OMS) Agent for Linux. For detailed information about OMS Agent for Linux, visit the GitHub repository [here](https://github.com/Microsoft/OMS-Agent-for-Linux).

    wget https://github.com/MSFTOSSMgmt/OMS-Agent-for-Linux/releases/download/1.0.0-47/omsagent-1.0.0-47.universal.x64.sh

    chmod +x ./omsagent-1.0.0-47.universal.x64.sh

    md5sum ./omsagent-1.0.0-47.universal.x64.sh

    ./omsagent-1.0.0-47.universal.x64.sh --install -w <YOUR OMS WORKSPACE ID> -s <YOUR OMS WORKSPACE PRIMARY KEY>

You can get the **Workspace ID** and **Primary Key** in **Settings > Connected Sources** in the OMS portal.


![](<docs/media/id_and_key.png>)

**4.** The container solution pack for OMS is in private preview. You need fill out [this survey](https://www.surveymonkey.com/r/VKK976K) to join the private preview.

**5.** After your private preview application is approved, run the following commands to enable the container solutions pack for Operations Management Suite. Visit [this link](https://github.com/Microsoft/OMS-Agent-for-Linux/blob/master/docs/Docker-Instructions.md) to learn more about he container solution pack for Operations Management Suite.
    
    sudo service omsagent restart

    DOCKER_OPTS="--log-driver=fluentd --log-opt fluentd-address=localhost:25225"

    service docker restart

**6.** You should now see the Container tile in your OMS homepage.


![](<docs/media/docker-overview-tile.png>) 


You can learn more about how to access detailed information about your containers in OMS [here](https://github.com/Microsoft/OMS-Agent-for-Linux/blob/master/docs/Docker-Instructions.md).


