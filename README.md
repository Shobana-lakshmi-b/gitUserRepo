How to Run the Project
=======================
Download the project, run 'ng build' command in the project folder which will install all its dependencies.
Then run 'ng serve'  which hosts the application in localhost:4200.

Components
===================
HomeComponent -> Responsible for getting the username and redirects  to user repo page.

LoaderComponent -> Used by UserDetailsComponent and ListReposComponent to show loader whenever API calls are made.

UserDetailsComponent -> Responsible for showing user bio information + acts as placeholder for ListReposComponent.

ListReposComponent-> Responsible for showing list of repos. Along with it handles pagination.

Time Taken:
====================================================================================

At first glance, it seems to be easy but it gets little tricky when we have to handle the  API related cases.

As of now, all the repos are loaded initially. But when we have API which loads repositories by  ’no of records’, then we can limit this according to the page size. i.e load repos on demand by pagination.

Similarly the API ‘https://api.github.com/users/${userName}/repos’ returns only one language used In the repo plus languages_url to fetch all languages. But in our design requirement we need to show all the languages, so in this case, we need to send individual API calls .

But in real time, this can be avoided if we receive all languages used along with https://api.github.com/users/${userName}/repos.

Regarding test cases,
I have no prior experience in writing unit test cases. But managed to write some very basic testcase for HomeComponent and resolved dependenciees.
So it definitely took 3+ hours for me to interpret,implement,test,fix and deploy


