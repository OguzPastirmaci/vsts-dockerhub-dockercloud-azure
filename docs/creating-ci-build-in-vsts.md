NOTE: VSTS UI is changed. The screenshots below are based on the previous UI. I will update the content soon with the new UI screenshots.


### Create a Continuous Integration Build in Visual Studio Team Services.


**1.** Go to your **account’s homepage**: https://<account\>.visualstudio.com

**2.** Click **Browse** and then select your team project and click
**Navigate**.

![](<media/navigate_to_project.png>)

**3.** Once on the project’s home page, click on the **Build** hub at the top of
the page.

![](<media/build_tab.png>)

**4.** Click the **green “plus” sign**, select **Empty**, and then click **OK**.

**5.** In GitHub, **[create an access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)**. Use the **repo, user, admin:repo_hook** scopes so that Visual Studio Team Services can discover private and public repositories that you have access to, create a web hook in GitHub (which is what queues the build in Visual Studio Team Services), and fetch the contents of the repository during the build.


**7.** On the repository tab, fill out your GitHub repository information, and provide the access token you just created.

![](<media/github-repository.png>)

**8.** Click on the **Build** tab, click **Add build step...**, and then add the following tasks

1. npm
1. Gulp
1. Shell Script

![](<media/add-tasks.PNG>)



**9.** Your build tasks should look like this:

![](<media/build-tasks.PNG>)


**9.** Select the **Shell Script** task and fill in the input values
with the following:

Script Path:	build-push-docker-image.sh
Arguments:		$(username) $(password) $(email) $(username)/$(repository) $(tag)


![](<media/shell-script-task.PNG>)

**9.**  [Create a Docker Hub account & repository](https://docs.docker.com/mac/step_five/). Make a note of the username, password, e-mail address, and repository name, you will use them in the next step.

**10.** Go back to your build definition in Visual Studio Team Services and click on the **Variables** tab and enter the following values:

![](<media/build-variables.PNG>)

**11.** In the **Triggers** tab, check **Continuous Integration**

![](<media/continuous-integration.PNG>)

**12.** Click **Save**, give the build definition a name, and then click **Ok**
