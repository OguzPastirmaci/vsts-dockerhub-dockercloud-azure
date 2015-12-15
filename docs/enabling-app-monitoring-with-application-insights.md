### What is Application Insights?

Application Insights is an extensible analytics service that monitors your live application. It helps you detect and diagnose performance issues, and understand what users actually do with your app. It's designed for developers, to help you continuously improve the performance and usability of your app.

If you don't have an Azure subscription and would like to try Application Insights on your web page, [visit](http://aka.ms/ainow) Try Application Insights.

For more information visit [https://azure.microsoft.com/en-us/documentation/articles/app-insights-overview/](https://azure.microsoft.com/en-us/documentation/articles/app-insights-overview/)

### Setting up Application Insights for the sample Node.js application


**1.**  Follow the instructions [here](https://azure.microsoft.com/en-us/documentation/articles/app-insights-javascript/#selector1) to create an Application Insights resource. Azure Portal will create the necessary script for you.

**2.** The `index.jade` file has the code block under the `script.` part. You only need to enter your instrumentation key.



 	 var appInsights=window.appInsights||function(config){
            function r(config){t[config]=function(){var i=arguments;t.queue.push(function(){t[config].apply(t,i)})}}var t={config:config},u=document,e=window,o="script",s=u.createElement(o),i,f;for(s.src=config.url||"//az416426.vo.msecnd.net/scripts/a/ai.0.js",u.getElementsByTagName(o)[0].parentNode.appendChild(s),t.cookie=u.cookie,t.queue=[],i=["Event","Exception","Metric","PageView","Trace"];i.length;)r("track"+i.pop());return r("setAuthenticatedUserContext"),r("clearAuthenticatedUserContext"),config.disableExceptionTracking||(i="onerror",r("_"+i),f=e[i],e[i]=function(config,r,u,e,o){var s=f&&f(config,r,u,e,o);return s!==!0&&t["_"+i](config,r,u,e,o),s}),t
        }({
            instrumentationKey:"Enter your Application Insights Instrumentation Key here"
        });
        
        window.appInsights=appInsights;
        appInsights.trackPageView(); 

