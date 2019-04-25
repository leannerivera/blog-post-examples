# Mithril.js Tutorial
https://gilbert.ghost.io/mithril-js-tutorial-1/

### All of the following is from the above website:

Mithril.js is a small (~8kb) and fast frontend JavaScript framework. It's a simpler, yet more capable version of React, replacing the need for libraries like jQuery. Mithril's small size and API makes it ideal for embedded JavaScript widgets, or user interfaces that have high performance requirements.

My personal favorite part about Mithril is that it's just JavaScript. If you know how JavaScript-the-language works, you can fully apply that knowledge when using Mithril, including any of JavaScript's functional programming features and techniques :)

## Tutorial Overview
In this tutorial we are going to walk through building a real-world case study, slightly modified to focus on building the core pieces of a Mithril component. Specifically we will cover:

### What a Mithril component is made of
How to do client-side routing
The concept of view-model and view state, and their differences
Two-way data binding
Showing a modified view based on a conditional
Creating new model data
Pointing out how everything is plain JavaScript!
Here's the full demo of what we'll be building.

Anxious? You can view the code gist here, and the full source code here.
This tutorial only covers the front-end; there will be no server-side code snippets.

## Project User Stories
The sample app we will be building is intended to be used by an organizer who is manually signing up other volunteers for an event.

1. As a volunteer, I want to sign up for an event.
1. As a volunteer, I want to sign up multiple people at once.
1. As an organizer, I need at least one attendee email address to send event details to.
1. As an organizer, I want to charge $10 per attendee.
1. As an organizer, I want to provide coupons to offer a percent discount on total price.
1. As an organizer, I want to see all entered volunteer entries.
