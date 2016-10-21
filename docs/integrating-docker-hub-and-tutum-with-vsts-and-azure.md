**1.** [Sign up](https://cloud.docker.com/) for a new Docker Cloud account. If you already have a Docker Hub account, you can use it to [log in](https://cloud.docker.com/login).

**2.** Link your Microsoft Azure account to Docker Cloud by following the instructions [here](https://docs.docker.com/docker-cloud/infrastructure/link-azure/).

**3.** Deploy a node in Azure by following the steps in the guide [here](https://docs.docker.com/docker-cloud/getting-started/your_first_node/).

**4.** Create a new service by following the instructions [here](https://docs.docker.com/docker-cloud/getting-started/your_first_service/). Make sure to choose the image you have created earlier in the image selection step instead of **dockercloud/hello-world**.

**5.** Create a trigger by following the instructions [here](https://docs.docker.com/docker-cloud/apps/triggers/) in your service in Docker Cloud to be used in Docker Hub. We will use this trigger in Docker Hub as a Webhook, so everytime an image is successfully pushed to Docker Hub by the **Shell Script** task in our build definition in Visual Studio Team Services, VSTS will trigger Docker Cloud to pull the image from Docker Hub and redeploy the service in Docker Cloud to Microsoft Azure.






