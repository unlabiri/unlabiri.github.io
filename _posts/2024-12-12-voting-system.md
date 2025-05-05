---
layout: post
title: "Voting System"
date: 2024-12-12
---

This is the full write-up for the voting system project. It includes details about the design, tech stack, and API integrations.

## PacVote — Full-Stack Voting Application

### Overview

PacVote is a full-stack web application designed to simulate a secure and user-friendly digital voting system. Built with a modern technology stack combining a React front end and an ASP.NET Core back end, the project emphasizes real-world considerations like user authentication, vote submission integrity, and result transparency. The system interacts with a relational SQL database to manage users, ballots, and votes in a structured, reliable manner.

This project was developed through a team-based collaboration, where each member focused on specific technical areas. My individual contributions centered on implementing the database connectivity logic, enabling secure communication through Cross-Origin Resource Sharing (CORS), and managing the flow of data between the front end and back end. These responsibilities reflect a strong understanding of how the layers of a web application interact, and how to ensure they function together efficiently and securely.


### Demonstration
<div style="text-align: center;">
  <video width="560" height="315" controls>
    <source src="{{ '/assets/361.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>



### Technical Breakdown

The application supports a step-by-step voting process. Users begin by logging in or registering an account. Once authenticated, they are guided through an interactive ballot interface where they can make selections across different races. After completing their selections, users review their votes before submitting. The system then securely processes the data and stores it in the database.

#### Front-End Integration

The front end was developed using React and communicates with the back end through RESTful API calls. I was responsible for setting up the data exchange between the interface and the server. This included implementing the logic to send login information, retrieve ballot data, and submit the final vote.

This process required client-side validation, handling asynchronous network requests, and presenting clear messages to the user in response to success or error states. I also ensured that the front end reflected accurate data returned by the server, maintaining application state and consistency throughout the user experience.

#### Back-End Connectivity

On the server side, I worked on developing API endpoints that process data, validate user input, and generate structured responses in JSON format. My work involved integrating this logic with the underlying database operations, especially for actions like vote submission and result retrieval.

I contributed to the controller logic that handles requests and responses, making sure that the back-end services aligned with the data needs of the front-end components. This included translating user selections into database-compatible formats and verifying that only valid and complete information reached the database.

#### CORS Configuration

Because the front end and back end run on different domains during development, I configured CORS policies to allow secure communication between them. CORS is essential in modern full-stack apps where services are separated, and misconfiguration can cause failed requests or security vulnerabilities.

I specified which domains, HTTP methods, and headers should be allowed, tailoring the policy to be as secure and specific as possible. This ensured the React front end could talk to the ASP.NET back end without exposing the application to cross-origin attacks.

### Challenges and Problem Solving

One of the biggest challenges in the project was maintaining reliable communication between the front end and back end, especially during user authentication and voting phases. I worked through issues related to request timing, inconsistent data formats, and unexpected API failures. By introducing consistent data handling patterns and robust error checking, I helped improve the reliability and user experience of the system.

Another learning opportunity came from managing data transformations between the front end, back end, and database. For example, vote selections made in the React interface needed to be converted into a format suitable for insertion into the SQL database. This required a strong understanding of how each system layer represents and processes data.

### Conclusion

My work on PacVote demonstrates a well-rounded skill set in full-stack development. I played a key role in connecting the user interface, back-end logic, and database functionality. I also handled CORS configuration, created and integrated API endpoints, and ensured the application remained secure and consistent across services.

This project gave me the opportunity to develop practical skills that are critical for building scalable and maintainable web applications. It also deepened my understanding of how front-end and back-end systems communicate, how to manage user interactions and data flow, and how to troubleshoot integration issues in a multi-layered architecture.
