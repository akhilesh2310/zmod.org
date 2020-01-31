import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.scss']
})
export class LearnMoreComponent implements OnInit {
  public videoDataSource = [
    {
      'video_url': 'https://www.youtube.com/embed/0SZHvRSJwyc?rel=0',
      'description': 'Distracted Driver use-case',
      'subheading': 'Use Cases',
      'id': `0SZHvRSJwyc`,
      'instructions': `
      <h3>Script for Distracted Driver Use-Case	</h3>

      <p>Hello All, Welcome to ML Workbench Demo Tutorial sessions. In this tutorial, we will learn how to build Deep Network Machine Learning models using ML Workbench</p>
      
      <p>For this demo, we will use the open-source dataset provided by Kaggle. The use case is the distracted driver demo where we try to predict the action of a car driver belonging to 10 classes </p>
      
      <p>The first step is to log in to the modeler with your credentials. We land into the home page of ML Workbench which has different sections like Data, Models, Code, Tasks, and Assets</p>
      
      <p>We have already imported the data into the Data section. We can upload the data using ‘Upload” button. The dataset has 37000 images (for training). They all are distributed in a class fashion (images belonging to 10 classes)</p>
      
      <p>For creating a new Deep Network model, we first need to navigate to the Models section, click on “New PMML”. This creates a new file with a name. We also have an option to rename this file with a custom name</p>
      
      <p>Next, we click on the edit section where we can add a set of layers to create a model. In this tutorial, we use Transfer-Learning approach where we use the pre-trained weights of a particular model for a new dataset</p>
      
      <p>First, we drag the Data layer, select our dataset</p>
      
      <p>Next, we drag the MobileNet model with pre-trained weights. Since we are doing a transfer-learning, we delete the last few layers and add our own layers. Since we have 10 classes in our dataset, we need to edit the dense layer</p>
      
      <p>Next, we drag the code layer to add a post-processing script (which would create an alarm in cumulocity based on few predictions from the model). Select ‘distracted_driver.py’ file and select ‘Post-Processing’ in the drop-down.</p>
      
      <p>Construction the model architecture is completed now. The next step is to start the training process. For this, we need to supply a few parameters</p>
      
      <p>Click on the train will start the training or Model building process in the Assets section. Tensorboard helps us monitor the performance of our model here</p>
      
      <p>In the interest of time, we have already have a model built in the same way which we saw now. Let us use this pre-trained model for predictions</p>
      
      <p>Before we could use this model for predictions, we need to load the model into Modeler’s memory</p>
      
      <p>To do that, we should first load the model into Modelers memory by clicking ‘Load into memory’</p>
      
      <p>Then go to the data section, upload your test data, predict using ML Workbench</p>
      
      <p>We have an alarm which is triggered in Cumulocity and also an email for the same</p>
      
      <p>There is a new entry for predictions. We could preview and check the predictions.</p>
      
      <p>This also creates an alarm in Cumulocity and an email is triggered to registered email id’s</p>`
    },
    {
      'video_url': 'https://www.youtube.com/embed/6RUJ0Nk52u8?rel=0',
      'description': 'ML Workbench - AutoML',
      'subheading': 'Use Cases',
      'id': `6RUJ0Nk52u8`,
      'instructions': `<h3>Script for AutoML tutorial</h3>

      <p>Hello All, Welcome to ML Workbench Demo Tutorial sessions. In this tutorial, we will learn how to use ML Workbench to train a model with the highest accuracy on your dataset</p>
      
      <p>ML Workbench uses a technique called ‘AutoML’ to train a model with the highest accuracy</p>
      <p>The first step is to log in to the modeler with your credentials. We land into the home page of ML Workbench which has different sections like Data, Models, Code, Tasks, and Assets</p>
      
      <p>To train any model, the first step is to import your dataset by clicking on the upload button. We could preview the data by clicking on the preview button. Here in this tutorial, we have used ‘Admissions’ dataset which has 2 attributes called ‘gpa’ and ‘gre’ which is used to predict ‘target’ variable </p>
      
      <p>Hit on ‘Create AutoML’ button which opens this new interface. Here once could perform different pre-processing on the dataset such as imputation for missing values, label encoding or One hot encoding to convert categorical columns into numerical, standardize the data with different scaling techniques etc.</p>
      
      <p>We also have an option to select a set of features to be used for Model building</p>
      
      <p>The last step is to choose the target variable, chose on the technique and hit the ‘Build’ button</p>
      
      <p>Here we see a list of parameters which should be supplied for autoML</p>
      
      <p>Clicking the ‘Start’ button starts the model building process. One could monitor the progress in the ‘Tasks’ section of the Modeler</p>
      
      <p>Now the training is completed and a list of trained models could be seen. The top row is always the model with the highest accuracy. Saving this model saves the PMML into Models section</p>
      
      <p>Since we have the model with the highest accuracy, we can try out predictions. There are 2 options provided by ML Workbench for predictions. First, predict via ML Workbench and second via Zementis Server</p>
      
      <p>In today's tutorial, let us predict via the Modeler. To do that, we should first load the model into Modelers memory by clicking ‘Load into memory’</p>
      
      <p>Then go to the data section, upload your test data, predict using ML Workbench</p>
      
      <p>There is a new entry for predictions. We could preview and check the predictions</p>
      
      <p>That’s it for now. See you in the next tutorial session. Thank You!</p>
      `
    },
    {
      'video_url': 'https://www.youtube.com/embed/_YCGPhMETF4?rel=0',
      'description': 'Import data from Cumulocity',
      'subheading': 'Use Cases',
      'id': `_YCGPhMETF4`,
      'instructions': `<h3>Script for Importing Cumulocity Data</h3>

      <p>Hello All, Welcome to ML Workbench Demo Tutorial sessions. In this tutorial, we will learn how to import data from Cumulocity into ML Workbench </p>
      
      <p>The first step is to log in to the modeler with your credentials. We land into the home page of ML Workbench which has different sections like Data, Models, Code, Tasks, and Assets</p>
      
      <p>In the Data section, click on “Upload data from cumulocity”. We need to feed in the Tenant ID, Username and Password. Hit on Login</p>
      
      <p>It shows a list of devices connected to this instance of Cumulocity. Let us select one of them and “Save Data”. We need to provide the file name in which our data gets stored, date from which you need to pull the data, till what date you want your data to be pulled, aggregation details, and the type of data you need from that device</p>
      
      <p>Click on “Submit” will  download the data into the Data section</p>
      
      <p>We can preview this data.</p>
      `
    },
    {
      'video_url': 'https://www.youtube.com/embed/dm98Rjb8l6w?rel=0',
      'description': 'Jupyter Notebook',
      'subheading': 'Use Cases',
      'id': `dm98Rjb8l6w`,
      'instructions': `
      <h3>Jupyter Notebook Execution</h3>

<p>Hello All, Welcome to ML Workbench Demo Tutorial sessions. In this tutorial, we will learn how to use jupyter notebooks within the ML Workbench </p>

<p>The first step is to log in to the modeler with your credentials. We land into the home page of ML Workbench which has different sections like Data, Models, Code, Tasks, and Assets</p>

<p>Navigate to the Code section. Import your notebook by clicking on “Upload code” button</p>

<p>Click on the notebook and say “Edit” will open your notebook for editing</p>

<p>Here in this notebook, we will show you how you can store a new dataset created into Data section and a new PMML file (model) into the Models section</p>

<p>In this code cell, we import the required libraries</p>

<p>Next code cell adds a new column/feature into the existing Dataframe and exports the datafame into a CSV file. We then store this CSV file in the Data section</p>

<p>To store Data to data section, we use the path ../../Data/ followed by your data file name</p>

<p>Similarly, to store your model/pmml file generated within Jupyter notebook, we use the path ../../Models/ followed by your model name</p>

<p>Let us execute these cells which creates a new data file and pmml file</p>

<p>Then navigate to the Data section and hit on the refresh button. Now we could see our new datafile in the folder and new pmml file in the Models section</p>

<p>After your execution is completed, you could go to the “Assets” section and kill that instance of the jupyter notebook which will clear the port and memory for next execution</p>

<p>This is how you could use jupyter notebook to execute any code you want within the ML Workbench</p>

<p>That’s it for now. See you in the next tutorial session. Thank You!</p>
      `
    },
    {
      'video_url': 'https://www.youtube.com/embed/Hnu7lvcc0kc?rel=0',
      'description': 'Python Execution',
      'subheading': 'Use Cases',
      'id': `Hnu7lvcc0kc`,
      'instructions': `
      <h3>Python File Execution</h3>

<p> Hello All, Welcome to ML Workbench Demo Tutorial sessions. In this tutorial, we will learn how to use execute Python files within the ML Workbench </p>

<p> The first step is to log in to the modeler with your credentials. We land into the home page of ML Workbench which has different sections like Data, Models, Code, Tasks, and Assets</p>

<p> Navigate to the Code section. Import your .py file by clicking on “Upload code” button</p>

<p> Click on your python file and say “Edit” will open the file for editing</p>

<p> You could add/modify the content here. We can have a class definition or a function definition etc. After editing is complete, save your file</p>

<p> In order to execute this code, we need to hit the “Execute” button and the status of execution could be monitored in the Tasks section</p>

<p> Currently, the execution is “In Progress” and later it would land up in “Complete” status after it is complete and we could check the results here</p>
      `
    }
  ];
  public coverHeaderDataSource: any = {
    'image_url': 'assets/coverHeader.jpg',
    'heading': 'Learn ML Workbench',
    'description': 'Getting started and using our product is easy peasy!'
  };
  public selectedData: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    for (const video of this.videoDataSource) {
      if (video.id === id) {
        this.selectedData = video;
        this.coverHeaderDataSource.heading = this.selectedData.description;
        this.coverHeaderDataSource.description = '';
      }
    }
  }

}
