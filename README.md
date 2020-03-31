# hoohacks20
Source code for our project at HooHacks 2020

## Workflow

Follow these steps when making changes to the source code:

1. `git pull`
2. `git branch [[feature]]`
3. `git checkout [[feature]]`
4. Make changes
5. `git add *`  
`git commit -m "[[message detailing changes]]"`
6. ... repeat for each major change
7. `git push`
8. Open a pull request to merge changes into master branch

## Directory Structure
* Public - Where anything being published to the cloud goes  
  * js - script directory
  * index.html - Public-facing html page.  For now this will be a single-page site so everything should go in here.
* database.rules.json - Database rules in json structure
* firebase.json - Hosting rules, url rules, other stuff to help firebase find our files.

## Installation Guide
Install the firebase command-line interface using this command:  
`sudo npm install -g firebase-tools`

## Making changes
The site is a single page, represented by the index.html file in the public directory.  Changes to the client-facing stuff go there.  Once changes are made, run `firebase deploy` and the changes will be published to https://hoohacks20-dde4c.firebaseapp.com/

## Testing changes
Firebase has a built-in webserver for testing.  Run `firebase serve` and changes to the files will populate on the local webserver.
