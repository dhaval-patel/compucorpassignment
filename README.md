# CompuCorp Assignment

### Prerequisites
    1. nodeJs

### Steps to setup dev environment

##### Install gulp 
    sudo npm install -g gulp 
##### Install bower 
    sudo npm install -g bower 
##### Install project modules 
    npm install 
##### Install project libraries 
    bower install

### Start development server
    gulp serve

### Generate distribution package
    gulp dist
    
### Run unit test cases
    gulp test
    
    
### Folder Structure
    - src
        - app               :   Contains application angular code
        - assets            :   Static assets 
        - sass              :   SASS files
        - index.html        :   Index Page
    - test                  :   Unit test cases
    - bower.json            
    - gulpfile.js           :   Gulp tasks
    - package.json      
    - karma.conf.js         :   Unit test cases configuration
    - README.md             :   Repository readme file