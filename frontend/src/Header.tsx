import React from 'react';

function Header(props: any) {
  return (
    <header className="row header navbar-dark bg-black text-white">
      <div className="col-6 d-flex justify-content-center align-items-center">
        <h1>{props.title}</h1>
      </div>
      <div className="col subtitle">
        <p>
          Welcome to our project where we reconnect with Barbara & David
          Fournier and their bowling crew from the Bowling League Database. Our
          goal? To create a website showcasing essential bowler information
          using the Repository Pattern in ASP.NET. We'll develop an ASP.NET API
          for seamless integration with a React app, displaying key details like
          Bowler Name, Team Name, Address, City, State, Zip, and Phone Number.
          Join us as we craft components for headings and tabular data
          presentation, uniting React and ASP.NET to deliver a polished user
          experience. View the table below!
        </p>
      </div>
    </header>
  );
}

export default Header;
