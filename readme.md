# Welcome to FLY 360!

> **Note**
> GOALS AND VISIONS ARE STILL A WORK IN PROGRESS.



## Switch to another branch


> **Warning**
> DO NOT CHANGE ANYTHING ON MAIN AND YOUR TEAMMATES BRANCH


## Rename a file

> **Note**
> Be vigilant whenever renaming a file. You may encounter problem that may cause error on your development. 

## Delete a file

> **Note**
> Be mindful not to delete any files in this project.



## Commands to be used


|                |Commands                          |                 
|----------------|-------------------------------|
|Cloning the repository|`git clone <repository_url>`            |
|Changing Directory          |`"cd <directory_location>`            |
|Installing Dependencies       |`npm install or npm i`|
|Starting a project     |`npm run dev >> http:localhost:5173 `|



## Chart for Branching in the Repository:

  

```mermaid

graph LR

A[main branch] -- create new branch --> B(New Branch Name)

B -- push code --> D[code review]

D --> E[FAILED]

E --> B

D --> G[PASSED]

G --> H[Main Branch / Deployed]
