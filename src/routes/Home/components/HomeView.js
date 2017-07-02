import React from 'react'
import './HomeView.scss'
import { Link } from 'react-router'

export const HomeView = () => (
  <div className="myFlexContainer">
    <div className="firstRow">
      <h4>Welcome to this assignment</h4>
    </div>
    <div className="secondRow">
      <div className="column">
        <p>
          <i>Using github issues API: <a href="https://developer.github.com/v3/issues/">https://developer.github.com/v3/issues</a></i>
        </p>
        <p><b>Create a small application that has these features:</b></p>
        <ul>
          <li>List of issues</li>
          <ul>
            <li>Issue details with comments (when clicking on the item in issue list)</li>
            <li>Add some metadata as read only to the view(Assignee and labels if any for example)</li>
            <li>Nothing is editable on issue</li>
          </ul>
          <li>Ability to add/edit comment on the issue.(basic CRUD)</li>
        </ul>
        <p><b>Notes:</b></p>
        <ul>
          <li>No need any fancy styles. plain and simple with least amount of effort. We are not looking into your css skills.</li>
          <li>Layout must be done using flex box.</li>
          <li>Github repo can hardcoded to the one you will use for this project or any other if you wish.</li>
          <li>Result of task must be a link to Github repo containing project source and readme</li>
          <li>Tech: React/Redux anything you want after that, you can use any seed that is on the interwebz :)</li>
          <li>At least one meaningful automated test present with framework of you choice</li>
        </ul>
        <h4 className="text-center">
          <Link to='/issues'>GO TO SOLUTION</Link>
        </h4>
      </div>
    </div>
  </div>
)

export default HomeView
