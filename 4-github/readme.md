
### 1) Create a GitHub Repository:

### 2) Clone the Repository:
    $ git clone <repository_URL> 

### 3)Create a New Branch:  
      $git checkout -b feature_branch
### This command creates and switches to a new branch named feature_branch. You can name your branch whatever you like.
 

### 4)Make Changes:Make some changes to your project files. For example, you can create a new file or modify an existing one. 

### 5) Stage and Commit Changes:  
	
	$ git add .
  $git commit -m "Add feature X"


  
### 6) Push Changes to GitHub:
    $git push origin feature_branch
  

### 7) Merge Changes: Merge the changes from the feature_branch into master:
    $ git checkout master
    $git merge feature_branch



### 8) Pull Changes:If someone else has made changes to the master branch on the remote repository, you can pull those changes into your local repository:
    $git pull origin master

### This command fetches changes from the master branch on the remote repository and merges them into your current branch.
