import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import jwt from "jwt-decode";

const Navbar = (props) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios({
      method: "GET",
      url: "http://68.183.224.29:5000/api/v1/auth/logout",
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    })
      .then((res) => {
        console.log("Logout success");
        localStorage.removeItem("token");
        localStorage.removeItem("listCart");
        Swal.fire({
          width: "400",
          height: "100",
          backdrop: "none",
          showCloseButton: true,
          icon: "success",
          title: "Logout successfully",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
        history.replace("/");
      })
      .catch((err) => {
        console.log("Logout failed");
        console.log(err);
      });
  };
  const handleCheckLogin = () => {
    if (localStorage.getItem("token")) history.push("/cart");
    else
      Swal.fire({
        width: "400",
        height: "100",
        backdrop: "none",
        showCloseButton: true,
        icon: "warning",
        title: 'Looks like you are not logged in :"(',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
  };
  let token = JSON.parse(localStorage.getItem("token"));
  let decodeToken;
  if (token) token = token.accessToken;
  if (token) decodeToken = jwt(token);
  else decodeToken = { role: false };
  return (
    <div>
      <nav id="header" className="w-full z-30 top-0 py-1" class="text-6xl">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          
          <div
            className="hidden mt-0 md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          >
           

                  <a
                    className="no-underline hover:text-gray-600  font-bold text-gray-800 text-2xl pl-5"
                    href="/"
                  >
                  Home
                  </a>
                  {/* Home */}
            
          </div>
          <div className="order-1 md:order-2">
            <a
              className="flex items-center tracking-wide no-underline hover:text-gray-600 font-bold text-gray-800 text-xl lg:text-3xl "
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[30px] sm:h-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Deadline Farmers
            </a>
          </div>
          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            {localStorage.getItem("token") ? (
              <>
                <div
                  className="no-underline hover:text-gray-600 flex flex-col items-center"
                  href="/login"
                  onClick={handleClick}
                >
                  {/* User */}
                  <svg
                    className="fill-current hover:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <circle fill="none" cx={12} cy={7} r={3} />
                    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                  </svg>
                  <p className="text-xs italic hidden sm:inline">Welcome</p>
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {decodeToken.role && (
                    <MenuItem
                      onClick={() => {
                        history.push("/manage-product");
                      }}
                    >
                      Manage Product
                    </MenuItem>
                  )}
                  <MenuItem
                    onClick={() => {
                      history.push("/purchased");
                    }}
                  >
                    Purchased
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      handleLogout();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <a
                  className="inline-block no-underline hover:text-gray-600"
                  href="/login"
                >
                  {/* User */}
                  <svg
                    className="fill-current hover:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <circle fill="none" cx={12} cy={7} r={3} />
                    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                  </svg>
                </a>
                <a href="/login" class="text-xs italic hidden sm:inline">
                  Login/Register
                </a>
              </div>
            )}
            <div
              className="flex flex-col items-center"
              onClick={handleCheckLogin}
            >
              <p className="pl-3 inline-block no-underline hover:text-gray-600 relative pr-3">
                {/* cart */}
                <svg
                  className="fill-current hover:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                  <circle cx="10.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
              </p>
              <p className="text-xs italic hidden sm:inline">Cart</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
