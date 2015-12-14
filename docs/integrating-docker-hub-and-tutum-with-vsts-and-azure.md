**1.** [Sign up](https://www.tutum.co/) for a new Tutum account. Choose **Create an account with Docker Hub** option.


![](<media/create-tutum-account.png>)

**2.** Link your Microsoft Azure account to Tutum by following the instructions [here](https://support.tutum.co/support/solutions/articles/5000560928-link-your-microsoft-azure-account).


**3.** Create a new service by following the instructions [here](https://support.tutum.co/support/solutions/articles/5000525024-your-first-service). Make sure to choose the image you have created earlier in the image selection step instead of **tutum/hello-world**.


**4.** Create a trigger by following the instructions [here](https://support.tutum.co/support/solutions/articles/5000513815-triggers) in your service in Tutum to be used in Docker Hub. We will use this trigger in Docker Hub as a Webhook, so everytime an image is successfully pushed to Docker Hub by the **Shell Script** task in our build definition in Visual Studio Team Services, Docker Hub will trigger Tutum to pull the image from Docker Hub and redeploy the service in Tutum to Microsoft Azure.






