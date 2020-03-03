""" Used for building all projects listed in projects.json. For directions see README.md """

import json
import os
import shutil
import os.path as pth




""" Takes a file containing projects as specified in README.md in the root folder and returns an array of project objects"""
def load_projects(filename):
    with open(filename) as project_list_file:
        return json.load(project_list_file)



"""Clones a project as specified in README.md into the correct folder"""
def clone_project(project_dict, username, build_path):
    project_name = project_dict['name']

    if 'url' in project_dict.keys():
        url = project_dict['url']
    else:
        url = f"git@github.com:{username}/{project_name}.git"
    
    os.makedirs(build_path, exist_ok=True)
    os.chdir(build_path)
    os.system(f"git clone {url}")



"""Pulls the given project as specified in README.md from its remote repository. Use this function for updating or clone_project for creation."""
def pull_project(project_dict, username, build_path):
    project_name = project_dict['name']
    
    os.chdir(pth.join(build_path, project_name))
    os.system(f"git pull origin master")

    os.chdir( pth.dirname( os.getcwd() ) )




"""Copies the contents of src but not the directory itself to dest"""
def copy_files(src, dest):

    for item in os.listdir(src):
        src_path = pth.join(src, item)
        dest_path = pth.join(dest, item)

        # Force overwrite items already in dest
        if pth.isdir(dest_path):
            shutil.rmtree(dest_path)
        elif pth.isfile(dest_path):
            os.remove(dest_path)

        if pth.isdir(src_path):
            shutil.copytree(src_path, dest_path)
        elif pth.isfile(src_path):
            shutil.copy2(src_path, dest)



""" Takes a project dictionary as given in the "projects" array of load_projects and builds it."""
def build_project( project_dict, username, build_path ):
    if pth.exists( pth.join(build_path, project_dict['name'])):
        pull_project(project_dict, username, build_path)
    else:
        clone_project(project_dict, username, build_path)
    
    # Should already be in build directory but just to be safe change again.
    os.chdir( pth.join(build_path, project_dict['name']) )

    # Now the project can be built
    os.system(project_dict['setup'])
    os.system(project_dict['build'])



def build_all_projects( projects, base_path ):
    index_project = projects['index']
    project_list = projects['projects']
    build_path = pth.join( base_path, 'builds')
    projects_path = pth.join( base_path, 'projects')

    # Build all projects
    for project in project_list:
        # Build
        print(f"Working on project {project['name']}")
        print("Building")
        build_project( project, projects['username'], build_path )
        
        proj_name = project['name']
        proj_path = pth.join( build_path, proj_name, 'build')

        print("Copying")
        if proj_name == index_project:
            copy_files(proj_path, base_path)
        else:
            copy_files(proj_path, projects_path)

        print("Done")
        print("")




"""
The script builds all projects in projects.json when called. See README.md for more details.
"""
if __name__ == '__main__':
    projects = load_projects( pth.join('..', 'projects.json') )

    current_directory = pth.abspath( os.getcwd() )

    # The path below is project-root/builds
    base_path =  pth.dirname( pth.abspath( pth.dirname( __file__ ) ) )
    build_all_projects( projects, base_path )

    # Reset to the original directory
    os.chdir(current_directory)