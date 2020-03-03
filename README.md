# Portfolio Site deployment

Contains all of the build files for nickmusey.com as well as some scripts to deploy it.


## Adding Projects
The projects are stored in projects.json. To add one, just add a new JSON object to projects. It needs a name, setup, and build key.

### Global information
One project must be specified as `index`, this will be the homepage when accessing the site for the repository. `username` should be the GitHub username. SSH is used for cloning so that needs to be set up.

### Projects
In `projects`, each project in the array should have the following structure. `name` should match the git repository name, `setup` should be a command which can be run from within the directory to set up the build (eg `npm install`), and `build` should be a command which can be run from within the directory to build the project (eg `npm run build`). Running the `setup` then `build` scripts should result in a `build` folder within the repository.