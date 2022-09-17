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

-   [x] useSelector, useDispatch - react-redux
-   [x] useHistory - react-router-dom

#### Inside Component

-   [x] Input (number) required (validation)
-   [x] Button to go to next page
-   [x] store
-   [x] dispatch (type: 'SET_UNDERSTANDING')

#### Router

-   [x] /understanding

## How well are you being supported? (Step 3/5) - Support.jsx

#### Imports

-   [x] useSelector, useDispatch - react-redux
-   [x] useHistory - react-router-dom

#### Inside Component

-   [x] Input (number) required (validation)
-   [x] Button to go to next page
-   [x] store
-   [x] dispatch (type: 'SET_SUPPORT')

#### Router

-   [x] /support

## Any comments you want to leave? (Step 4/5) - Comments.jsx

#### Imports

-   [x] useSelector, useDispatch - react-redux
-   [x] useHistory - react-router-dom

#### Inside Component

-   [x] Input (text) not required (validation)
-   [x] Button to go to next page
-   [x] store
-   [x] dispatch (type: 'SET_COMMENT')

#### Router

-   [x] /comments

## Review Feedback (Step 5/5) - Review.jsx

#### Imports

-   [x] useSelector, useDispatch - react-redux
-   [x] useHistory - react-router-dom
-   [x] Axios - POST

#### Inside Component

-   [x] Button to POST submission and clear Redux store and go to next page
-   [x] store - use store to append stored items to the DOM

#### Router

-   [x] /review

## Submission Page - Completed.jsx

-   [x] Button - return user to first page and to submit new feedback

## index.js

#### Imports

-   [x] React, ReactDOM, App, createStore, combineReducers, applyMiddleware, Provider, logger
-   [x] Setup state/action functions
-   [x] Redux store (createStore, combineReducers, applyMiddleware)

## App.jsx

-   [x] Import HashRouter, Components
-   [x] Routers

# Server Side

## Axios requests

-   [x] POST

## Server.js

-   [x] router.post

## feedback.router.js

-   [x] setup feedback.router.js

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

## Header.jsx

-   [] import Link and useLocation
