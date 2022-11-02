import React, { useState } from "react";
import { json, useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const singleInfo = useLoaderData();
  const { name, email, color } = singleInfo;
  const [user, setUser] = useState(singleInfo);
  const handleUserAdd = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/users/${singleInfo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated succesfully");
        }
      });
  };
  const handleName = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleUserAdd}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text uppercase">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  onChange={handleName}
                  required
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text uppercase">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  required
                  onChange={handleName}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text uppercase">FAVORITE COLOR</span>
                </label>
                <input
                  type="text"
                  name="color"
                  l
                  defaultValue={color}
                  required
                  onChange={handleName}
                  placeholder="Color"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Info</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
