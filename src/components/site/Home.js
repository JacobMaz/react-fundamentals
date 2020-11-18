import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Welcome to React Fundamentals</h1>
                <p>This app is... lakjsdflkasjddjfkas laskjdf alkjasdlf asldkjfasdkljf aslkjadsf laksjdf aslsdkjfasldkjf asdlkfjasdlfjas dlkasdjf  lkasjd sadljdfs</p>
                <hr />
                <h1>Important Notes</h1>
                <ul>
                    <li>Being component based, you can move on to the next module.</li>
                    <li>The styling is intentially bland in som e spots. Just a sandbox.</li>
                    <li>At this phase, this site is not yet responsive.</li>
                    <li>Refactor the text on this page and make this your own portfolio project.</li>
                    <li>This app simply scratches the surface on what is possible with React.</li>
                    <li>We have tried to collect the very best resource for this app, and we have cited those <Link to="/resources">here</Link></li>
                    <li>The set up for this app might be the most confusing part. Hang in there..</li>
                    <li><Link to="/resources">React Resources</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;