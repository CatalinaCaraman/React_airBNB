# Project Name
A simple React application showcasing cards with various activities.

## Overview

This project is a React application that features a set of cards displaying different activities, each with its own details such as ratings, location, and cost. It includes components like `Card`, `App`, and `Navbar` to create a structured and modular codebase.
#Description
In order not to do hard code, I used props, so I create for instances of cards in App.jsx and add informations that should be displayed in some variables. I got 6 elements in each card (two photos and some text). In Card.jsx
I describe how exactly informations shold be shown and add classNames in order to be able to add some designs. Props are usefull when we don't want to hardcode every element in a page that can be cloned.
In the Hero.jsx we display a photo grid and a text, in order for this to be shown we render every component in App.jsx
Components
Card Component
The Card component is responsible for rendering individual activity cards. It uses props to dynamically display information such as images, ratings, location, title, and cost.

App Component
The main entry point of the application. It includes instances of the Card component, rendering different activities. Additionally, it incorporates the Navbar and Hero components.

Navbar Component
The Navbar component displays a simple navigation bar with a logo.

Hero Component
The Hero component showcases a photo grid and accompanying text.

Styling
Styling is implemented in App.css for general application styling and Card.css for styles specific to the Card component.
