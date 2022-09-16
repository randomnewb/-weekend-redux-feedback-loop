# Step Components

## How are you feeling today? (Step 1/5) - Feeling.jsx

#### Imports

-   [x] useSelector, useDispatch - react-redux
-   [x] useHistory - react-router-dom

#### Inside Component

-   [x] Input (number) - required (validation)
-   [x] Button to go to next page
-   [x] store
-   [x] dispatch (type: 'SET_FEELING')

#### Router

-   [x] /feeling

## How well are you understanding the content? (Step 2/5) - Understanding.jsx

#### Imports

-   [] useSelector, useDispatch - react-redux
-   [] useHistory - react-router-dom

#### Inside Component

-   [] Input (number) required (validation)
-   [] Button to go to next page
-   [] store
-   [] dispatch (type: 'SET_UNDERSTANDING')

#### Router

-   [] /understanding

## How well are you being supported? (Step 3/5) - Support.jsx

#### Imports

-   [] useSelector, useDispatch - react-redux
-   [] useHistory - react-router-dom

#### Inside Component

-   [] Input (number) required (validation)
-   [] Button to go to next page
-   [] store
-   [] dispatch (type: 'SET_SUPPORT')

#### Router

-   [] /support

## Any comments you want to leave? (Step 4/5) - Comments.jsx

#### Imports

-   [] useSelector, useDispatch - react-redux
-   [] useHistory - react-router-dom

#### Inside Component

-   [] Input (text) not required (validation)
-   [] Button to go to next page
-   [] store
-   [] dispatch (type: 'SET_COMMENT')

#### Router

-   [] /comments

## Review Feedback (Step 5/5) - Review.jsx

#### Imports

-   [] useSelector, useDispatch - react-redux
-   [] useHistory - react-router-dom
-   [] Axios - POST

#### Inside Component

-   [] Button to POST submission and go to next page
-   [] store - use store to append stored items to the DOM

#### Router

-   [] /review

## Submission Page - Completed.jsx

-   [] Button (dispatch (type: 'CLEAR_ALL')) and submit new feedback

## index.js

#### Imports

-   [] React, ReactDOM, App, createStore, combineReducers, applyMiddleware, Provider, logger
-   [] Setup state/action functions
-   [] Redux store (createStore, combineReducers, applyMiddleware)

## App.jsx

-   [x] Import HashRouter, Components
-   [] Routers

## Header.jsx

-   [] import Link and useLocation

# Server Side

## Axios requests

## Server.js

## feedback.router.js

# Stretch Goals

## Admin.jsx

-   [] import React, useState, useEffect, axios
-   [] setter/getter useState
-   [] useEffect to fetch submissions
-   [] axios - GET
-   [] map through submissions

## SubmissionItems.jsx

-   [] render the submission items
-   [] add a delete button with DELETE request
-   [] try to add an edit button with PUT request

## Styling with Material UI
