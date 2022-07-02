import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>

            <h4>Difference between JavaScript and Node.js?</h4>
            <b>Ans:</b>
            <table>
                <thead>
                    <th >JAvascript</th>
                    <th>Node js</th>
                </thead>
                <tbody>
                    <tr className='p-3'>

                        <td className='p-3'>JavaScript’s first version was launched in 1995 and it was developed by Brendan Eich of Netscape (then called LiveScript). As discussed earlier, JavaScript is a high-level programming language that has all the functionalities normally a programming language has. JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages but also it is used for game development and mobile app development.</td>
                        <td className='p-3'>Node.js was first introduced in 2009 developed by Ryan Dahl and is a runtime environment for JavaScript built on Google’s v8 engine whose main purpose is to run JavaScript on the server and hence JavaScript can be executed outside of the browser. The nicest part about Node.js is that it never blocks I/O, is event-driven, and can be used to create highly scalable apps. In Node.js everything is a module and using these modules developers make use of Node.js in creating web APIs, Rest API servers, command-line applications, and real-time chat applications.</td>
                    </tr>
                </tbody>
            </table>
            <div>

                <h4 className='mt-3'>When should you use nodejs and when should you use mongodb?</h4>
                <b>Ans:</b> <p>There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</p>

            </div>

            <div>
                <h4> Differences between sql and nosql databases ?</h4>
                <b>Ans:</b>
                <table>
                    <thead>
                        <th >SQL</th>
                        <th>No SQL</th>
                    </thead>
                    <tbody>
                        <tr className='p-3'>
                            <td className='p-3'>1. These databases are not suited for hierarchical data storage</td>
                            <td className='p-3'>1.These databases are best suited for hierarchical data storage.</td>
                        </tr>
                        <tr className='p-3'>
                            <td className='p-3'>2. These databases have fixed or static or predefined schema</td>
                            <td className='p-3'>2.They have dynamic schema.</td>
                        </tr>
                        <tr className='p-3'>
                            <td className='p-3'>3. These databases are best suited for complex queries</td>
                            <td className='p-3'> 3. These databases are not so good for complex queries</td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <h4> What is the purpose of jwt and how does it work?</h4>
                    <b>Ans:</b>
                    <p>JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;