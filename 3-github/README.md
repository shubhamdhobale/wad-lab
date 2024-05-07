
### 1) Create a new repository on GitHub.com. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.

### 2) Open terminal

### 3) set your username and email address for Git. Replace your_username and your_email@example.com with your GitHub username and email
    
    $ git config --global user.name "your_username"
    $ git config --global user.email "your_email@example.com"


### 4)Go to GitHub and log in. Click on the "+" icon in the top right corner and select "New repository." Give your repository a name and optionally add a description. You can choose to initialize it with a README file if you want.

### 5) On the repository page on GitHub, click the green "Code" button and copy the repository URL. Then, in your terminal, navigate to the directory where you want to store your project and clone the repository:
	
	$ git clone <repository_URL>

  
### 6) Navigate into the directory created by the clone command. Add your code files or create new ones in this directory.
   

### 7) Once you've made changes or added files, stage them for commit:
    $ git add .

### 8) 
    $git commit -m "Your commit message here"


### 9)Finally, push your changes to GitHub:
    $ git push origin master
    
    