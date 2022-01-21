import React, { Component } from 'react';
class Menu extends Component {
  render() {
    return (
      <div>
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
      </div>
    );
  }
}
class SearchBar extends Component {
  render() {
    return (
      <div className="order-2 md:order-3 flex items-center  w-full md:w-64 pt-3 md:pt-0 mx-0" id="nav-content">
        <input type="search" name="serch" placeholder="Search" className="bg-white h-9 w-full px-5 pr-10 rounded-l-full border text-sm focus:outline-none" />
        <button type="submit" className=" float-right  mr-4 h-9 px-[10px] rounded-r-full border" >
          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
    );
  }
}
class Userbtn extends Component {
  render() {
    return (
      <div>

        <li><a className="inline-block no-underline hover:text-black" href="/">
          <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <circle fill="none" cx={12} cy={7} r={3} />
            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
          </svg>
        </a></li>
     <input className="hidden" type="checkbox" id="menu-toggle" />
      </div>
      
    );
  }
}
class CartBtn extends Component {
  render() {
    return (
      <div>
        <li><a className="pl-3 inline-block no-underline hover:text-black" href="/">
          <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
            <circle cx="10.5" cy="18.5" r="1.5" />
            <circle cx="17.5" cy="18.5" r="1.5" />
          </svg>
        </a></li>
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id="header" className="w-full z-30 top-0 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
            <Menu />

            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
              <nav>

                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">

                  <Userbtn />

                  <CartBtn />
                </ul>
              </nav>
            </div>
            <div className="brandName order-1 md:order-2">
              <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px]  w-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Deadline Farmers
              </a>
            </div>
            <SearchBar />
          </div>

        </nav>
      </div>
    );
  }
}
export default Navbar;
