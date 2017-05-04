# Atlassian 

Instead of building an application using a MVC framework or a UI library, I instead created a command line application. While the UI is very simple, it is very simple to use, which is something that I wanted more than an interactive website. It's all in black and white. 
This application will only run with the example data provided in the exercise instructions.   

## Prerequisites

Since this application runs on node, you must have it installed on your machine before running the code in this repo. 
To install it on your machine go to https://nodejs.org/en/download .

## Getting Started 

The first step is to clone my repo onto your local machine. To do that, simply copy and paste the following line of code below into your command line: 

```
git clone https://github.com/AthenaCode/Atlassian.git
```   

Next you will have to install the dependency that is listed in the package.json. Do so, copy and paste the code below into your command line: 

```
npm install 
```

Finally, type in the code below to get started: 

```
npm start
```
Every time you want to find an estimate or see certain pieces of data you will have to run the code above. 


### What are You Looking For? 

This will be the first thing that you will see once the application is run in your command line. The following responses will allow you to see certain pieces of information from the example data: 

To see all of the data, type in: 

```
allData
```

To see all of the data from the issue type bug, type in: 

```
bugData
```

To see all of the data from the issue type story, type in: 

```
storyData
``` 

To get the total estimate for all issues, type in: 

```
all
```

To get the total estimate for the issue bug type in: 

```
bug
```

To get the total estimate for the issue story, type in: 

```
story
```

All other queries will return an error message.


## Built With 

* node
* readline-sync

### Author 

Rachel DePriest

## Acknowledgments

* Hat tip to anyone whose code was used

