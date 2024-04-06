import React, { useState } from 'react';
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import { useEffect } from 'react';
import './App.css';
import EmojiPicker from 'emoji-picker-react';
// import Card from './components/card';
import { CgAdidas } from "react-icons/cg";
import axios from 'axios';
// import { GiCrossedBones } from "react-icons/gi";
import { CgTwitter } from 'react-icons/cg';
import { CgFacebook } from 'react-icons/cg';
import { CgMail } from 'react-icons/cg';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaSearchengin } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Loader from './components/loader';
import Chatroom from './components/chatroom';
// import Afterlogintop_component from './components/afterlogintop_component';
// import io from 'socket.io-client'
// const socket=io.connect("http://localhost:3001");

// import ordercard from './components/ordercard';
function Home() {
  const [showchatroom,setshowchatroom]=useState(true);
  const [isactive, setisactive] = useState(false);
  const [categoryselect1, setcategoryselect1] = useState(false);
  const [categoryselect2, setcategoryselect2] = useState(false);
  const [categoryselect3, setcategoryselect3] = useState(false);
  const [categoryselect4, setcategoryselect4] = useState(false);
  const [categoryselect5, setcategoryselect5] = useState(false);
  const [showorderlist, setshowoderlist] = useState(false);
  const [price, setprice] = useState(5000);
  const [showServices, setshowServices] = useState(false);
  const [isacitve, setisacitve] = useState(true);
  // const data = "No Product selected"
  const bookNames = [
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Catcher in the Rye",
    "The Hobbit",
    "The Lord of the Rings",
    "Harry Potter and the Sorcerer's Stone",
    "The Chronicles of Narnia",
    "The Da Vinci Code"
  ];

  // Array of corresponding image links
  const bookImages = [
    "https://foreignpolicy.com/wp-content/uploads/2009/04/gettyimages-51875780.jpg?resize=1000,500&quality=90",
    "https://media.newyorker.com/photos/638f719baa0ea2fe7e7eb435/master/w_1000,c_limit/an%20immense%20world.jpeg",
    "https://media.newyorker.com/photos/635317f3645c3761e43aeaba/master/w_1000,c_limit/The%20Book%20of%20Goose,%20by%20Yiyun%20Li%20(Farrar,%20Straus%20&%20Giroux).jpeg",
    "https://media.newyorker.com/photos/6355d03abe7b6b7e00155b93/master/w_1000,c_limit/the-books-of-jacob.jpg",
    "https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/07/The-Old-Man-and-the-Sea-book-cover-1952-first-edition-cover-2.jpg",
    "https://www.bookgeeks.in/wp-content/uploads/2023/05/Vahana-Vehicles-of-the-God-by-Stuti-Gupta.jpg",
    "https://www.bookgeeks.in/wp-content/uploads/2023/06/Rama-of-the-Axe-by-Ranjith-Radhakrishnan.jpg",
    "https://www.bookgeeks.in/wp-content/uploads/2023/09/Reflections-A-Collection-of-5-Minute-Essays-by-Uma-Rajagopal.jpg",
    "https://www.bookgeeks.in/wp-content/uploads/2023/06/The-Play-of-Justice-by-Dr-Kaushik-Chaudhary.png",
    "http://images.amazon.com/images/P/3257203659.01.MZZZZZZZ.jpg",

  ];

  // making a login page popup window
  const [showloginpage, setshowloginpage] = useState(false);
  const [showsignuppage, setshowsignuppage] = useState(false);


  const [items, setItems] = useState([]);
  function addItem(book, author, orderimage) {

    // Using the spread operator to create a new array with the existing items and the new item
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = (index) => {
    // Using filter to create a new array without the item at the specified index
    setItems(items.filter((_, i) => i !== index));
  };

  function showlogin() {
    setshowloginpage(true);
  }
  function closelogin() {
    if (showsignuppage === true) {
      return;
    }
    setshowloginpage(false);
  }
  function showSerivesmenu(event) {
    if (showServices === true) {
      setshowServices(false);
    }

    else {
      setshowServices(true);
    }
  }

  function showsignup() {
    if (showsignuppage === true) {
      setshowsignuppage(false);
      closelogin();

    }

    else {
      setshowsignuppage(true);
    }
  }
  const Loginwindow = () => {
    useEffect(() => {
      document.body.style.overflowY = "hidden";

      return () => {
        document.body.style.overflowY = "scroll";
      }
    }, [])
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async () => {
      try {
        await axios.post('http://localhost:5000/register', { username, password });
        console.log('User registered successfully');
      } catch (error) {
        console.error(error.response.data.error);
      }
    };

    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5000/login', { username, password });
        console.log('Login successful');
        closelogin();
        console.log('Token:', response.data.token);
      } catch (error) {
        console.error(error.response.data.error);
      }
    };

    return (
      <>
        <div className="loginpage-wrapper z-3 bg-slate-200"></div>
        <div className="loginpage-container  font-arial z-[1000] border-black border-[2px] w-[550px] h-[500px]">
          <div className="loginpage p-[10px]">
            <div className="logintitle flex justify-center text-blue-400 text-[40px]">Welcome To Selit</div>
            <h2 className='flex text-[30px] justify-center'>Login Using </h2>
            <div className="loginoptions-app flex justify-center">
              <button ><CgMail className='w-[50px] h-[50px]' /></button>
              <button ><CgFacebook className='w-[50px] h-[45px]' /></button>
              <button ><CgTwitter className='w-[50px] h-[50px]' /></button>
            </div>
            <h1 className='flex justify-center text-[30px] text-red-400'>OR</h1>
            <div className='flex flex-col align-center justify-center w-[600px]'>
              <form action="POST">
                <input type="text" placeholder='Username' name="username" className='m-[5px] mx-[70px] rounded-[10px] px-[10px] w-[350px] text-[30px] border-[2px] border-black ' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} name="password" className='m-[5px]  mx-[70px] rounded-[10px]  w-[350px]  px-[10px] text-[30px] border-[2px] border-black' />
                <span className={`password text-[35px] ${showsignuppage ? "show" : "hidden"} `}>  <input type="password" placeholder='Confirm Password' className={`m-[5px]  mx-[70px] rounded-[10px]  w-[345px]  px-[10px] text-[30px] border-[2px] border-black ${showsignuppage ? "show" : "hidden"}`} /></span>
              </form>
            </div>
          </div>
          <div className="buttons-registration flex justify-center">
            <button className='btn rounded-[20px] text-[30px] bg-slate-500' type='submit' onClick={handleLogin} >Login</button>
            <button className='bg-slate-500 text-white w-[170px] h-[50px] m-[30px]  text-[30px] rounded-[20px]' onClick={handleRegister} >SignUp</button>
          </div>
        </div>
      </>

    )
  }

  const [orderbookDescription, setorderbookDescription] = useState([]);
  const [orderbookAuthorname, setorderbookAuthorname] = useState([]);
  const [orderBookimage, setorderBookimage] = useState("");
  // card 
  const Card = (props) => {
    // State to store the list of items
    const handleorderreacttoast = (event) => {
      const parentElement = event.target.parentElement.parentElement.parentElement.parentElement;
      // Get the class of the parent element
      const parentElementClass = parentElement.className;
      // console.log((parentElementClass));
      let indexing = parseInt(parentElementClass.substring(9, parentElementClass.length));
      // console.log(indexing)
      //   const bookouter = document.getElementsByClassName(parentElementClass);
      const book = document.getElementsByClassName('description-name')[indexing].textContent;
      //  console.log(book)
      const author = document.getElementsByClassName('Author-name')[indexing].textContent;
      const orderimage = document.getElementsByClassName('book-card-image')[indexing].textContent;
      setorderbookDescription();
      setorderbookAuthorname(author);
      setorderBookimage(orderimage);
      addItem(book, author, orderimage);
      toast.success("Product Selected")
    }
    // const [orderplacedlist, setorderplacedlist] = useState("No order placed till Now");
    return (
      <>
        <div className="outer  flex w-[1000px] mt-[30px]">
          <div className="card h-[200px] w-[850px] rounded-[20px] shadow-xl shadow-black flex ml-[100px] hover:border-green-500 hover:border-[4px] ">
            <div className="left">
              <img className='book-card-image mt-[10px] mx-[20px]  border-4 border-black-300 rounded-[20px] w-[200px] h-[150px]' src={props.bookimage} alt="Book" />
            </div>
            <div className="right w-[1000px] h-[200px] flex flex-col align-center justify-center px-[40px]">
              <div className="description-name text-[25px]" id={`Description`}>{props.Description}</div>
              <div className="Author-name" id="Authorname">Premchand dyal sharma</div>
              <div className="Price flex">
                <div className="current-price text-red-400 text-[30px] mx-[10px]" id="Bookprice">₹399</div>
                <div className="mrp-price  text-[23px] mx-[10px]">MRP : ₹699</div>
                <div className="discount  text-[23px] mx-[10px]">(45% off)</div>
              </div>
              <button className="selectproductbutton  text-white text-[27px] bg-green-500 border-green-500 border-4  mx-[20px] w-[150px] rounded-[10px] " onClick={handleorderreacttoast}>Add Item</button>
              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme="colored" />
            </div>
          </div>

        </div>
      </>
    )
  }
  



  function handleorderlist(event) {
    setshowoderlist(!showorderlist);
  }
  function handlefilter() {
    setshowchatroom(!showchatroom);
    setisactive(!isactive);
  }
  const amount = "500";
  const currency = "INR";
  const receiptId = "qwsaq1";
  const paymenthandler = async (e) => {
    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },

    });
    const order = await response.json();
    console.log(order);
  }
  function handlecategory(e) {
    if (e.target.id === 1) {
      setcategoryselect1(!categoryselect1);
    }
    if (e.target.id === 2) {
      setcategoryselect2(!categoryselect2);
    }
    if (e.target.id === 3) {
      setcategoryselect3(!categoryselect3);
    }
    if (e.target.id === 4) {
      setcategoryselect4(!categoryselect4);
    }
    if (e.target.id === 5) {
      setcategoryselect5(!categoryselect5);
    }
  }
  return (
    <>
      <div className="navbar sticky top-[0] text-black font-mono font-style-italic  h-[100px] w-[100vw] bg-slate-200 mx-[5px] flex ">
        <div className="title text-[55px] tracking-widest font-extrabold text-[45px] px-[20px] py-[15px]  font-serif">Selit</div>
        <div className="navigators flex ml-[40px] justify-end w-[80%] ">
          <Link className={`navigate font-mono  text-[30px]   mt-[30px]  hover:bg-slate-300 rounded-[20px] h-[60px] w-[120px] px-[20px] flex ${isacitve? 'text-red-400':'text-gray-400'}` } to='/'>Home </Link>
          <button className="navigate font-mono  text-[30px]  mx-[10px] flex items-center mt-[25px] hover:bg-slate-300  rounded-[20px] h-[60px] w-[150px] px-[10px]" onClick={handleorderlist}>Cart<FaShoppingCart className='mt-[7px] mx-[4px]' />{items.length}</button>
          <div className={`orderlist fixed  top-[14%] z-100 bg-[#F2F7F7] right-[30%] w-[450px] h-[400px]  border-[3px] border-blue-400 overflow-y-scroll ${showorderlist ? "show" : "hidden"}`} id='orderlist'>
            <ul >
              {/* Mapping over the items array to render each item */}
              {items.map((item, index) => (
                <li className='flex w-[400px] ' key={index}>
                  {/* {item} */}
                  <div className="left">
                    <img className='mt-[10px] ml-[10px]  border-4 border-black-300  w-[150px] h-[130px]' src={orderBookimage} alt="Book" />
                  </div>
                  <div className="right w-[330px] h-[130px] flex flex-col align-center justify-center px-[20px]">
                    <div className="description-name text-[15px]">{orderbookDescription}</div>
                    <div className="Author-name">{orderbookAuthorname}</div>
                    <div className="Price flex">
                      <div className="current-price text-red-400 text-[20px] mx-[10px]">₹399</div>
                      <div className="mrp-price  text-[15px] ">MRP :₹699</div>
                    </div>
                  </div>
                  {/* Button to remove the item when clicked */}
                  <button className="cancelorder flex flex-col align-center mt-[30px] mr-[20px] w-[20px]" onClick={() => removeItem(index)}>X </button>
                </li>
              ))}
            </ul>
            <button className="checkout  text-white text-[30px] flex justify-center bg-green-500 border-green-500 border-4  mx-[30%] my-[10px] w-[150px] rounded-[10px] " onClick={paymenthandler}>Checkout</button>
          </div>
          <button className={`navigate font-mono  text-[30px]  hover:bg-slate-300  mt-[25px] rounded-[20px] h-[60px] w-[150px] mx-[10px] `} onClick={showSerivesmenu}>Services</button>
          <div className={`Servicesmenu fixed top-[14%] right-[27%] bg-slate-50 w-[200px] h-[200px] text-[25px] ${showServices ? "show" : "hidden"} flex flex-col `}>
            <Link to='/Sellbookpage'><div className='bg-slate-500 rounded-[10px]  text-white m-[10px] px-[20px]'>Sell Book</div></Link>
            <button><div className='bg-slate-500 rounded-[10px]  text-white m-[10px]'>Book Status</div></button>
            <Link to='/orderstatus'><div className='bg-slate-500 rounded-[10px] px-[20px]  text-white m-[10px]'>Orders</div></Link>
          </div>
          <Link className="navigate font-mono  text-[30px]   hover:bg-slate-300  mt-[35px] rounded-[20px] h-[60px] w-[150px] mx-[10px]" to='/aboutus'>About us</Link>
          <button className="navigate font-mono  rounded-[20px] text-[30px] mt-[20px] flex items-center bg-slate-400 text-white px-[15px] flex h-[65px] w-[150px]" onClick={showlogin}><h2 >Login</h2> <CgAdidas className='my-[10px]' /></button>
          {showloginpage && <Loginwindow />}
        </div >
      </div >
      <main className='bg-slate-50'>
        <div className="searchbar flex ml-[100px] my-[20px] ">
          {<FaSearchengin className='w-[50px] h-[50px]' />}
          <input type="text" className=' border-black border-2   shadow-inner shadow-black mr-[30px] justify-center rounded-2xl w-[600px] h-[50px] px-[20px] text-[25px]' placeholder={`Search the Books,Comics of your choice`} />
          <button onClick={handlefilter}> <IoFilterSharp className='w-[50px] h-[50px]' /></button>
          <button className="searchbutton  text-white text-[30px] bg-red-500 border-red-500 border-4  mx-[20px] w-[130px] rounded-[10px] h-[50px] ">Search</button>
        </div>
        <div className="main bg-slate-50 flex">
          <div className='cards-columns'>
            {bookNames.map((bookname, index) => (
              <div className={`bookindex${index}`}> <Card key={index} Description={bookname} bookimage={bookImages[index]} /></div>
            ))
            }
          </div>
         <div  className={`${showchatroom? 'block' :'hidden'}`} ><Chatroom /></div> 
          <div className={`filter-menu  bg-[#F2F7F7] border-[4px] border-blue-300 h-[500px] w-[350px] rounded-[20px] ${isactive ? "block" : "hidden"}`}>
            <div className="price-filter mt-[10px]">
              <h4 className='rounded-[40px] border-blue-500 border-4  w-[200px] px-[15px] mt-[5px] ml-[5px] text-[25px]'>Price</h4>
              <div className="price-range w-[250px] flex"><input type="range" min="50" max="5000" step="100" value={price} className='w-[200px] mx-[20px]' onChange={(e) => setprice(e.target.value)} /> <h3 className='text-[20px]'>₹{price}</h3></div>
            </div>
            <div className="category ">
              <h4 className='rounded-[40px] border-blue-500 border-4  w-[200px] px-[5px] mt-[10px] ml-[10px] text-[25px]'>Category</h4>
              <div className="category-names ">
                <button id="1" className={`flex  hover:bg-blue-200 rounded-[30px] px-[5px] ${categoryselect1 ? "select" : "h"}`} onClick={handlecategory}>Literature <RxCross1 className='h-[15px] w-[15px] ml-[10px] mt-[5px]' src="https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png" alt="" /></button>
                <button id="2" className={`flex  hover:bg-blue-200 rounded-[30px] px-[5px] ${categoryselect2 ? "select" : "h"}`} onClick={handlecategory}>Poetry <RxCross1 className="h-[20px] w-[15px]  ml-[10px] mt-[5px]" src="https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png" alt="" /></button>
                <button id="3" className={`flex  hover:bg-blue-200 rounded-[30px] px-[5px] ${categoryselect3 ? "select" : "h"}`} onClick={handlecategory}>Historical <RxCross1 className="h-[15px] w-[15px]  ml-[10px] mt-[5px]" src="https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png" alt="" /></button>
                <button id="4" className={`flex  hover:bg-blue-200 rounded-[30px] px-[5px] ${categoryselect4 ? "select" : "h"}`} onClick={handlecategory}>Drama <RxCross1 className="h-[15px] w-[15px]  ml-[10px] mt-[5px]" src="https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png" alt="" /></button>
                <button id="5" className={`flex  hover:bg-blue-200 rounded-[30px] px-[5px] ${categoryselect5 ? "select" : "h"}`} onClick={handlecategory}>Comedy <RxCross1 className="h-[15px] w-[15px]  ml-[10px] mt-[5px] " src="https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png" alt="" /></button>
              </div>
            </div>
            <div className="years-old">
              <h4 className='rounded-[40px] border-blue-500 border-4  w-[200px] px-[10px] ml-[10px] text-[25px]'>Years-old</h4>
              <div className="yearsold ">
                <button className="flex hover:bg-blue-200 rounded-[30px] px-[10px]">Less than 1 Months <RxCross1 className="h-[15px] w-[15px] mt-[5px]  ml-[20px]" src="https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png" alt="" /></button>
                <button className="flex hover:bg-blue-200 rounded-[30px] px-[10px]">Less than 3 Months <RxCross1 className="h-[15px] w-[15px] mt-[5px]  ml-[20px] " src="https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png" alt="" /></button>
                <button className="flex hover:bg-blue-200 rounded-[30px] px-[10px]">Less than 6 Months <RxCross1 className='h-[15px] w-[15px] mt-[5px] ml-[20px]' src="https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png" alt="" /></button>
                <button className="flex hover:bg-blue-200 rounded-[30px] px-[10px]">Less than 12 Months<RxCross1 className="h-[15px] w-[15px] mt-[5px]  ml-[20px]" src="https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png" alt="" /></button>
                <button className="flex hover:bg-blue-200 rounded-[30px] px-[10px]">Less than 24 Months<RxCross1 className="h-[15px] w-[15px] mt-[5px]  ml-[20px]" src="https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png" alt="" /></button>
              </div>
              <button className="clear-filters  text-white text-[25px] bg-red-500 border-red-500 border-4 mt-[10px] mx-[50px] w-[200px] px-[10px] rounded-[10px]">
                Clear Filters
              </button>
            </div>
          </div>

        </div>
          
        <div className='pt-[40px]'>
          <h1 className='text-[35px] font-mono px-[20px] flex items-center'>More Books <FaArrowAltCircleRight className='mx-[10px]' /></h1>
          <Carousel CarouselBooktitle="The Middle Stories" CarouselBookAuthor="Scott Turow" CarouselImage={"https://www.bookgeeks.in/wp-content/uploads/2023/05/Vahana-Vehicles-of-the-God-by-Stuti-Gupta.jpg"} />
          <Carousel CarouselBooktitle="PLEADING GUILTY" CarouselBookAuthor="Julia Oliver" CarouselImage={"https://www.bookgeeks.in/wp-content/uploads/2023/06/Rama-of-the-Axe-by-Ranjith-Radhakrishnan.jpg"} />
          <Carousel CarouselBooktitle="Our Dumb Century" CarouselBookAuthor="R. J. Kaiser" CarouselImage={"https://www.bookgeeks.in/wp-content/uploads/2023/09/Reflections-A-Collection-of-5-Minute-Essays-by-Uma-Rajagopal.jpg"} />
        </div>
      </main>
      {/* <EmojiPicker className='m-[auto] z-[-1]' /> */}
      <Footer />
      {/* <div className='wrapperclass'>
        Hold A Couple Of Seconds ....
      <Loader/>
      </div> */}
    </>
  );
}

export default Home;

 const func=()=>{
  
 }

