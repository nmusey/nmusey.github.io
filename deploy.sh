GITHUB_UNAME=nmusey
HOME_PROJECT=portfolio


function build_project(PROJ_NAME) {
    git clone git clone git@github.com:$GITHUB_UNAME/$PROJ_NAME.git;
    cd PROJ_NAME;
    npm install;
    npm run build;
    cd ..;
    cp -R 
}


# Build the homepage
git clone git@github.com:$GITHUB_UNAME/$HOME_PROJECT.git;
cd $HOME_PROJECT;
npm install;
npm run build;
cd ..;
cp -R $HOME_PROJECT/build;
rm -rf $HOME_PROJECT;


INCLUDED_PROJECTS=[]



git add -A;
git commit -m "Automated commit from build script";
git push;