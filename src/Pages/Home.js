import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="container p-5 mt-4"
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#edf2f4",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        {/* Welcome to Bank management sytem!! */}
      </h1>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <div className="card text-black bg-white mt-3 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="">
                  <h3 className="float-left">Customer</h3>
                  <Link to="/customer/login" className="me-3">
                    <button
                      className="btn btn-outline-success float-right"
                      height="100px"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/customer/register">
                    <button
                      className="btn btn-outline-success float-right"
                      height="100px"
                    >
                      Signup
                    </button>
                  </Link>
                </div>
                <div className="card-body pd-5">
                  <img
                    src="images/users-icon.png"
                    alt="customer not found"
                    height="300px"
                    className="rounded mx-auto d-block mt-4"
                  />
                </div>
              </div>
            </td>
            <td>
              <div className="card text-black bg-white mt-3 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="">
                  <h3 className="float-left">Admin</h3>
                  <Link to="/admin/login">
                    <button
                      className="btn btn-outline-success float-right"
                      height="100px"
                    >
                      Login
                    </button>
                  </Link>
                </div>
                <div className="card-body pd-5">
                  <img
                    src="images/icon-admin.png"
                    alt="employee not found"
                    height="300px"
                    className="rounded mx-auto d-block mt-4"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
