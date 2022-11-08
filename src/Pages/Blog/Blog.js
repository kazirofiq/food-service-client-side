import React from 'react';

const Blog = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse w-9/12 mx-auto my-4 bg-slate-300 collapse-open border border-base-300 bg-base-100 rounded-box"> 
            <div className="collapse-title text-xl text-center font-medium">
            What is cors ?
            </div>
            <div className="collapse-content p-4"> 
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse w-9/12 mx-auto my-4 bg-slate-300 collapse-open border border-base-300 bg-base-100 rounded-box"> 
            <div className="collapse-title text-xl text-center font-medium">
            Why are you using firebase ?
            </div>
            <div className="collapse-content p-4"> 
            <p>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it!
            Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
            </p>
            </div>
            </div>
            <div tabIndex={0} className="collapse w-9/12 mx-auto my-4 bg-slate-300 collapse-open border border-base-300 bg-base-100 rounded-box"> 
            <div className="collapse-title text-xl text-center font-medium">
            How does the private route work ?
            </div>
            <div className="collapse-content p-4"> 
            <p>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse w-9/12 mx-auto my-4 bg-slate-300 collapse-open border border-base-300 bg-base-100 rounded-box"> 
            <div className="collapse-title text-xl text-center font-medium">
            What is Node? How does Node work ?
            </div>
            <div className="collapse-content p-4"> 
            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
            </div>
            </div>
        </div>
    );
};

export default Blog;