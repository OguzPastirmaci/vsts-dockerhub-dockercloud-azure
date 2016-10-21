### Fully automated CI/CD of a Dockerized Node.js app to Microsoft Azure with VSTS, Docker Hub and Docker Cloud

![](<docs/media/ci-workflow.png>)

This example walks through the entire end to end workflow of a fully automated deployment of a clustered Dockerized Node.js app to Microsoft Azure using GitHub, Visual Studio Team Services, Docker Hub, and Tutum.

It also walks through the process of implementing application monitoring, container monitoring, and container host monitoring.

1. [Deploy an Ubuntu VM and check you have the prerequisites installed](https://github.com/Microsoft/vsts-agent/blob/master/docs/start/envubuntu.md)
2. [Deploy the VSTS agent on the Ubuntu VM](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-linux)
3. [Create a Continuous Integration Build in Visual Studio Team Services](./docs/creating-ci-build-in-vsts.md)
4. [Integrate Docker Hub and Docker Cloud](./docs/integrating-docker-hub-and-docker-cloud-with-vsts-and-azure.md)
5. [Enable application monitoring with Application Insights](./docs/enabling-app-monitoring-with-application-insights.md)
6. [Enable Docker container & container host monitoring with Operations Management Suite](https://github.com/DxNext/2016-Oct-L2/blob/master/Linux/Module4-LogsAndSecurity/setting-up-log-analytics.md)



