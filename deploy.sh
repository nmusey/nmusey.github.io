#! /bin/zsh
# Gets the home project and all projects in projects.txt, builds them, and deploys the site to Github Pages.


GITHUB_UNAME=nmusey
HOME_PROJECT=portfolio


# build_project expects a project name as the first parameter.
function build_project() {
    git clone git clone git@github.com:$GITHUB_UNAME/$1.git;
    cd $1;
    npm install;
    npm run build;
    cd ..;
    mv $1/build/* .;
    rm -rf $1;
}


# Build the homepage
git clone git@github.com:$GITHUB_UNAME/$HOME_PROJECT.git;
cd $HOME_PROJECT;
npm install;
npm run build;
npx postcss *.css --use autoprefixer -d build/
cd ..;
move $HOME_PROJECT/build/* .;
rm -rf $HOME_PROJECT;


# Build all projects in the projects.txt file
mkdir temp;
cat projects.txt | while read PROJ; do 
    build_project($PROJ);
done;
mv temp/* .;
rm -rf temp


# Commit and push
git add -A;
git commit -m "Automated commit from build script";
git push;