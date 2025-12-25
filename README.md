Step 1 : Depedendies installation 
npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form
also install Tailwind



Step 2 :
Create .env and .env sample file in root and inside it create environment varaibles 

.env info : 
Contains secret environment variables (API keys, URLs, Project IDs)
Used only by you on your local machine
Do NOT upload to GitHut
App or Framework reads variables from this file

.env.sample info :
Same structure as .env but without secret values
Shared with team or uploaded to GitHub
Helps others know which variables they must create
Used as a reference/backup



Step 3 : Appwrite Setup Guide

1️⃣ Create Appwrite Project

Create an account in Appwrite.
Create a new project.
Go to Project Settings → copy Project ID & API Endpoint.
Paste both values into your .env file:
PROJECT_ID
VITE_APPWRITE_URL (or your environment variable name)

2️⃣ Enable Required Services

Go to Settings → Services
Select services you need (or select all for full access).

3️⃣ Configure Authentication

Go to Auth → Settings
Enable all authentication methods (Email, Anonymous, OAuth etc.)

4️⃣ Create Database

Go to Database → Create a new database
Copy Database ID and add it to .env.

5️⃣ Create Collection / Table

Inside the database → Create a collection (table)
Provide a name & custom project ID.
Copy Collection ID to .env.
Permissions (Very Important)
Go to Collection Settings → Permissions
Select:
All Users
Enable All permissions (read, create, update, delete)
Click Update to save.

6️⃣ Add Collection Attributes (Columns)

Create these columns inside your Appwrite Collection:

title
Type: string
Size: 255
Required: ✔

content
Type: string or text
Size: Any / large content
Required: ✔

featuredImage
Type: string
Size: 255
Required: ✔

status
Type: string
Size: 100
Required: ✔

userId
Type: string
Size: 255
Required: ✔

7️⃣ Create Index

Go to Indexes
Create a new index:
Index Name: statusIndex
Type: key
Column: status
Order: ASC
Save index.

8️⃣ Create Storage Bucket

Go to Storage → Create Bucket
Copy Bucket ID → add to .env.
Update Storage Permissions
Go to Bucket Settings → Permissions
Select:
All Users
Allow All permissions
Click Update.



Step 4 : create conf folder in src inside create conf.js and their you need to import all environment to prevent from crashing of application and to direct use it without writing again and again

NOTE : Step 5 & 6 is said to be service which provides connection via .env

Connections Starts from here

Video 19
Step 5 :Authentication (Appwrite docs : https://appwrite.io/docs/tutorials/react/step-1)

Create folder in src named as appwrite and inside create file auth.js there u need to write a code for creating account for login.logout etc..
Note : This authentication code is same for every project..or if another application used instead of appwrite then also we just need to change a little bit but flow and vairable naming will be same 


Video 20
Step 6 :Database & Storage Connection (Appwrite docs : https://appwrite.io/docs/tutorials/react/step-1)

Inside folder of appwrite create file config.js there u need to write a code for connecting database and buckets..
Note : This code is also same for every project..or if another application used instead of appwrite then also we just need to change a little bit but flow and vairable naming will be same 

Connection ends here 

NOTE : Remember to check wheter the project id prints in console or not 
  //console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID); in App.jsx to check wheter we getting our project id in console or not 



Video 21 
Step 7 : Use of Redux Toolkit for session handling 
create a folder "store" in src and inside it create store.js file 
also create file named as "authSlice" inside store folder 

store.js info :
This file creates the central Redux store using configureStore() from Redux Toolkit.
The store is where all slices (like auth, posts, etc.) will be combined and managed.

authSlice file info : 
This file manages user authentication state using Redux Toolkit.
It stores whether a user is logged in or logged out, and also holds the user’s data.

It provides two actions:
login → sets the user as logged in and saves their information
logout → clears login status and removes user data

This allows the entire app to update UI based on login status (e.g., show user profile or login button).

Now create a folder named components in src and inside it create two sub folder one is Header and another Footer inside Header folder create Header.jsx file and same for Footer 
then create a index.js file inside components folder..
index file is created for importing and exporting purpose 

Now work on main and App jsx files..
In main.jsx : Pass the provider to wrap the App tag also pass the store there 
In App.jsx : 
This component checks if the user is logged in when the app first loads.
It calls Appwrite to fetch the current user:
If a user exists → dispatches login to save the user in Redux
If no user → dispatches logout to clear state

While checking the login status, a loading state prevents UI from showing a blank or incorrect screen.

After loading is complete:  
It displays the Header, Footer, and main content using React Router’s <Outlet /> to render selected pages.

NOTE : Run the file here to check the output page // Video 21 complete here




Video 22
Step 8 : 
Here we will create seperate different components ex: for buttons,logo,container etc for reusability purpose

Create folder container in components folder and inside it create Container.jsx file
pass the props as children to make it reusable for wrapping purpose

Then design a code for footer section (I taken from chai and code code as it is) 

Create Logo.jsx file in components folder for logo purpose with default width props

Now create LogoutBtn.jsx file in Header folder for logout button purpose
Work on LogoutBtn.jsx to create a btn which will logout the user on click, by dispatching logout action from authSlice and also call appwrite function to logout the user from appwrite side

Now Work on Header.jsx to design header section with Logo component and LogoutBtn component inside i..see the code for more info

Now Work on Creating Custom Button and Input components for reuse purpose..see the code for more info
End 



Video 23
Step 9 : 
1.Creating Select component for reuse purpose (similar to Input.jsx component)
Work on Select.jsx file to create a reusable select dropdown component with label support and ref forwarding support..see the code for more info
2.then Create PostCard component for displaying post preview in a card format with link to detailed post view..see the code for more info
3.Now Create Login.jsx page inside pages folder for login purpose with form handling using react-hook-form and appwrite authentication..see the code for more info
4.Create Signup.jsx page inside pages folder for signup purpose with form handling using react-hook-form and appwrite authentication..see the code for more info
5.Finally create AuthLayout.jsx file inside layouts folder for wrapping login and signup pages with common layout and also for protection purpose..see the code for more info
End



Video 24 
Step 10 :
Create RTE.jsx (Rich Text Editor) component for post content editing using TinyMCE editor
Create post-form folder and inside it create PostForm.jsx for creating and editing posts with form handling using react-hook-form and TinyMCE editor
Update index.js in components folder to export newly created components
End



Video 25
Step 11 :
Create pages folder in src and inside it create all pages such as Home.jsx, Login.jsx, Signup.jsx, CreatePost.jsx, EditPost.jsx, PostDetail.jsx
create router to connect all pages in main.jsx using react-router-dom
End



Video 26
Step 12 :
Debugging and Testing the Application
Adding platform in Appwrite Console for Localhost Testing : Go to Appwrite Console → Project Settings → Platforms → Add Platform → Select Web → select language as React and write localhost on hostname and then create platform
Due to this CORS error will be resolved
Now it is ready for testing and debugging 
End



Video 27
Step 13 :
Final Touches and Deployment Preparation
Review the entire codebase for any improvements or optimizations.
Ensure all environment variables are correctly set up for production.

VITE_APPWRITE_URL="https://fra.cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="69379ded0018b10231b0"
VITE_APPWRITE_DATABASE_ID="69379f8b00151543130a"
VITE_APPWRITE_COLLECTION_ID="65075d139d5831162839"
VITE_APPWRITE_BUCKET_ID="6937a5d1003af3b322eb"

Saving the .env file with production values for future usage 

adding the .env file to .gitignore to prevent it from uploading to github
End

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
