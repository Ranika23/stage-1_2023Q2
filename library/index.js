//burger-menu
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.getElementById("id-header").classList.toggle("open")
    });
    document.getElementById("nav-menu").addEventListener("click", event => {
        event._isClickMenu = true;
    });
    document.getElementById("burger").addEventListener("click", event => {
        event._isClickMenu = true;
    })
    document.body.addEventListener("click", event => {
        if (event._isClickMenu) return;
        document.getElementById("id-header").classList.remove("open");
    })
    document.getElementById("link1").addEventListener("click", event => {
        document.getElementById("id-header").classList.remove("open");
    })
    document.getElementById("link2").addEventListener("click", event => {
        document.getElementById("id-header").classList.remove("open");
    })
    document.getElementById("link3").addEventListener("click", event => {
        document.getElementById("id-header").classList.remove("open");
    })
    document.getElementById("link4").addEventListener("click", event => {
        document.getElementById("id-header").classList.remove("open");
    })
    document.getElementById("link5").addEventListener("click", event => {
        document.getElementById("id-header").classList.remove("open");
    })
    })
// menu-no-auth    
    document.getElementById("login").addEventListener("click", event => {
        document.getElementById("drop-menu-profile-no-auth").classList.toggle("open");
        document.getElementById("drop-menu-profile-no-auth").style.zIndex = "1";
    });
    document.getElementById("login").addEventListener("click", event => {
        event._isClickLogin = true;
    })
    document.body.addEventListener("click", event => {
        if (event._isClickLogin) return;
        document.getElementById("drop-menu-profile-no-auth").classList.remove("open");
    })
    document.getElementById("burger").addEventListener("click", event => {
        if (event._isClickLogin) return;
        document.getElementById("drop-menu-profile-no-auth").classList.remove("open");
    })
    document.getElementById("drop-link-log-in").addEventListener("click", event => {
        if (event._isClickLogin) return;
        document.getElementById("drop-menu-profile-no-auth").classList.remove("open");
    })
    document.getElementById("drop-link-register").addEventListener("click", event => {
        if (event._isClickLogin) return;
        document.getElementById("drop-menu-profile-no-auth").classList.remove("open");
    })

//drop menu profile
// no auth register
document.getElementById("drop-link-register").addEventListener("click", event => {
    document.getElementById("modal-register-wrapper").classList.remove("close");
    document.getElementById("modal-register-wrapper").classList.add("open");    
});
document.getElementById("drop-link-register").addEventListener("click", event => {
    event._isClickLogin = true;
})
document.getElementById("modal-register").addEventListener("click", event => {
    event._isClickLogin = true;
})
document.getElementById("get-card-button-sign-up").addEventListener("click", event => {
    document.getElementById("modal-register-wrapper").classList.remove("close");
    document.getElementById("modal-register-wrapper").classList.add("open");
});
document.getElementById("get-card-button-sign-up").addEventListener("click", event => {
    event._isClickLogin = true;
})
document.getElementById("modal-register-wrapper").addEventListener("click", event => {
    if (event._isClickLogin) return;

    document.getElementById("modal-register-wrapper").classList.add("close");
    document.getElementById("modal-register-wrapper").classList.remove("open");
    
})
document.getElementById("close-btn").addEventListener("click", event => {
    if (event._isClickLogin) return;
    document.getElementById("modal-register-wrapper").classList.add("close");
    document.getElementById("modal-register-wrapper").classList.remove("open");
    
})

// no auth login
const BUTTON_BUY = document.querySelectorAll('.button-buy');
BUTTON_BUY.forEach(b=>b.addEventListener('click', event => {
    document.getElementById("modal-login-wrapper").classList.remove("close");
    document.getElementById("modal-login-wrapper").classList.add("open");   
}));
BUTTON_BUY.forEach(b=>b.addEventListener('click', event => {
    event._isClickLogIn = true 
}));

document.getElementById("drop-link-log-in").addEventListener("click", event => {
    document.getElementById("modal-login-wrapper").classList.remove("close");
    document.getElementById("modal-login-wrapper").classList.add("open");    
});
document.getElementById("drop-link-log-in").addEventListener("click", event => {
    event._isClickLogIn = true;
})
document.getElementById("modal-login").addEventListener("click", event => {
    event._isClickLogIn = true;
})
document.getElementById("get-card-button-log-in").addEventListener("click", event => {
    document.getElementById("modal-login-wrapper").classList.remove("close");
    document.getElementById("modal-login-wrapper").classList.add("open");
});
document.getElementById("get-card-button-log-in").addEventListener("click", event => {
    event._isClickLogIn = true;
})
document.getElementById("modal-login-wrapper").addEventListener("click", event => {
    if (event._isClickLogIn) return;

    document.getElementById("modal-login-wrapper").classList.add("close");
    document.getElementById("modal-login-wrapper").classList.remove("open");
    
})
document.getElementById("close-btn-login").addEventListener("click", event => {
    if (event._isClickLogIn) return;
    document.getElementById("modal-login-wrapper").classList.add("close");
    document.getElementById("modal-login-wrapper").classList.remove("open");  
})





// modal register
document.getElementById("modal-register-form").addEventListener("submit", event => {
    //generation random digital
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let RandomNumberCard = String(getRandomNumber(99999999, 9999999999).toString(16));
    if(RandomNumberCard.length < 9) {
        while(true) {
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        RandomNumberCard = String(getRandomNumber(99999999, 9999999999).toString(16));
        if(RandomNumberCard.length === 9) {break}
        }
    }

    //save input.value in localStorage
    let First = document.getElementById("register-first-name").value;
    let Last = document.getElementById("register-last-name").value
    let FirstLast = document.getElementById("register-first-name").value + " " + document.getElementById("register-last-name").value;
    let EmailValue = document.getElementById("register-email").value;
    let PasswordValue = document.getElementById("register-password").value;
    let InnerName = document.getElementById("login-reg").innerHTML = First[0] + Last[0]; 
    
    let user = {
       email: EmailValue,
       password: PasswordValue,
       cardnumber: RandomNumberCard,
       firstlast: FirstLast,
       inner: InnerName,
    }; 
    localStorage.setItem("user", JSON.stringify(user)); 
    
    

    //настройки для авторизованной страницы
    document.getElementById("input-text-form-name-auth").placeholder = FirstLast;
    document.getElementById("modal-profile-bg-name").innerHTML = FirstLast;
    document.getElementById("modal-profile-bg-avatar").innerHTML = InnerName;
    document.getElementById("input-text-form-numbercard-auth").placeholder = RandomNumberCard;
    document.getElementById("drop-profile-auth").innerHTML = RandomNumberCard;
    document.getElementById("drop-profile-auth").style.fontSize = "13px";
    document.getElementById("copy-number").innerHTML = RandomNumberCard;
    document.getElementById("main-librarycard-auth").style.display = "block";
    document.getElementById("main-librarycard-auth").style.display = "flex";
    document.getElementById("library-card").style.display = "none";
    
    
        //counter Visits
  
        localStorage.setItem("visits", JSON.stringify(1));
        let checkLoginLocalVisits = JSON.parse(localStorage.getItem("visits"))
        document.getElementById("profile-visits").innerHTML = checkLoginLocalVisits;
        document.getElementById("count-visits").innerHTML = checkLoginLocalVisits;
        document.getElementById("profile-visit-auth").innerHTML = checkLoginLocalVisits;
            
    
    //modal my profile
    document.getElementById("drop-link-my-profile").addEventListener("click", event => {          
        document.getElementById("modal-profile-wrapper").classList.remove("close");
        document.getElementById("modal-profile-wrapper").classList.add("open"); 
        event._isClickProfile = true;   
    });
    document.getElementById("modal-login").addEventListener("click", event => {
        event._isClickProfile = true;
    })
    document.getElementById("modal-profile-wrapper").addEventListener("click", event => {
        if (event._isClickProfile) return;
        document.getElementById("modal-profile-wrapper").classList.add("close");
        document.getElementById("modal-profile-wrapper").classList.remove("open");   
    })
    document.getElementById("close-btn-profile").addEventListener("click", event => {
        if (event._isClickProfile) return;
        document.getElementById("modal-profile-wrapper").classList.add("close");
        document.getElementById("modal-profile-wrapper").classList.remove("open");  
    })
    document.getElementById("get-card-button-profile").addEventListener("click", event => {          
        document.getElementById("modal-profile-wrapper").classList.remove("close");
        document.getElementById("modal-profile-wrapper").classList.add("open"); 
        event._isClickProfileButton = true;   
    });
    document.getElementById("modal-profile").addEventListener("click", event => {
        event._isClickProfileButton = true;
    })
    document.getElementById("modal-profile-wrapper").addEventListener("click", event => {
        if (event._isClickProfileButton) return;
        document.getElementById("modal-profile-wrapper").classList.add("close");
        document.getElementById("modal-profile-wrapper").classList.remove("open");   
    })
    document.getElementById("close-btn-profile").addEventListener("click", event => {
        if (event._isClickProfileButton) return;
        document.getElementById("modal-profile-wrapper").classList.add("close");
        document.getElementById("modal-profile-wrapper").classList.remove("open");  
    })

    // copy number
    document.getElementById("copy-number").style.color = "#BB945F";
    document.getElementById("icon-copy").addEventListener("click", event => {
        let textCopy = document.getElementById("copy-number");
        navigator.clipboard.writeText(textCopy.innerHTML);               
    })



    
    // counter books
    
    BUTTON_BUY.forEach(b=>b.addEventListener('click', event => { 
        let parrentItem = b.parentNode.querySelector("div > .title-description > span").innerHTML + ", " + b.parentNode.querySelector("div > .title-description > p").innerHTML;
        let liItem = document.createElement("li");
        liItem.innerHTML = parrentItem;
        document.querySelector(".modal-profile-right-rended-books > ul").append(liItem)

        if (localStorage.getItem("books") === null) {
            //modal buy
            document.getElementById("modal-login-wrapper").classList.remove("open");
            document.getElementById("modal-login-wrapper").classList.add("close"); 
            document.getElementById("modal-buy-card-wrapper").classList.remove("close");
            document.getElementById("modal-buy-card-wrapper").classList.add("open"); 
            
            BUTTON_BUY.forEach(b=>b.addEventListener('click', event => {event._isClickBuy= true;}))
            document.getElementById("modal-buy-card").addEventListener("click", event => {
                event._isClickBuy = true;
            })
            document.getElementById("modal-buy-card-wrapper").addEventListener("click", event => {
                if (event._isClickBuy) return;
                localStorage.removeItem("books");
                document.getElementById("modal-buy-card-wrapper").classList.add("close");
                document.getElementById("modal-buy-card-wrapper").classList.remove("open");   
            })
            document.getElementById("close-btn-buycard").addEventListener("click", event => {
                if (event._isClickBuy) return;
                localStorage.removeItem("books");
                document.getElementById("modal-buy-card-wrapper").classList.add("close");
                document.getElementById("modal-buy-card-wrapper").classList.remove("open");  
            })
            document.getElementById("close-btn-buycard").addEventListener("click", event => {
                if (event._isClickProfileButton) return;
                localStorage.removeItem("books");
                document.getElementById("modal-buy-card-wrapper").classList.add("close");
                document.getElementById("modal-buy-card-wrapper").classList.remove("open");  
            })
            

            //counter 
            localStorage.setItem("books", JSON.stringify(0));
            let checkLoginLocalBooks = JSON.parse(localStorage.getItem("books"))
            document.getElementById("count-profile-books").innerHTML = checkLoginLocalBooks;
            document.getElementById("count-visits").innerHTML = checkLoginLocalBooks;
            document.getElementById("profile-visit-auth").innerHTML = checkLoginLocalBooks;

            document.getElementById("modal-buy-card-form").addEventListener("submit", event => {
                b.setAttribute('disabled', '');
                b.innerHTML = "Own";
                let checkLoginLocalBook = JSON.parse(localStorage.getItem("books")) + 1;
                localStorage.setItem("books", JSON.stringify(checkLoginLocalBook));
                let checkLoginLocalBooks = JSON.parse(localStorage.getItem("books"));
                document.getElementById("count-profile-books").innerHTML = checkLoginLocalBooks;
                document.getElementById("count-books-auth").innerHTML = checkLoginLocalBooks;
                document.getElementById("count-books").innerHTML = checkLoginLocalBooks;

                document.getElementById("modal-buy-card-wrapper").classList.add("close");
                document.getElementById("modal-buy-card-wrapper").classList.remove("open");
                

                let checkLoginLocalVisit = JSON.parse(localStorage.getItem("visits"))
                document.getElementById("count-visits").innerHTML = checkLoginLocalVisit;
                document.getElementById("profile-visits").innerHTML = checkLoginLocalVisit;
                document.getElementById("profile-visit-auth").innerHTML = checkLoginLocalVisit;       
            })
       
        }   
        if (localStorage.getItem("books") !== null) {
         
            //counter 
            let checkLoginLocalBook = JSON.parse(localStorage.getItem("books")) + 1;
            localStorage.setItem("books", JSON.stringify(checkLoginLocalBook));
            let checkLoginLocalBooks = JSON.parse(localStorage.getItem("books"));
            
            document.getElementById("count-profile-books").innerHTML = checkLoginLocalBooks;
            document.getElementById("count-books-auth").innerHTML = checkLoginLocalBooks;
            document.getElementById("count-books").innerHTML = checkLoginLocalBooks;

            document.getElementById("modal-login-wrapper").classList.remove("open");
            document.getElementById("modal-login-wrapper").classList.add("close"); 
       
            b.setAttribute('disabled', '');
            b.innerHTML = "Own";
        } 
     
      }));
    



    
    document.getElementById("profile-visits").innerHTML = checkLoginLocalVisits;
    document.getElementById("count-visits").innerHTML = checkLoginLocalVisits;
    document.getElementById("profile-visit-auth").innerHTML = checkLoginLocalVisits;
        

    //reset to default input.value
    document.getElementById("register-last-name").value = "";
    document.getElementById("register-first-name").value = "";
    document.getElementById("register-email").value = "";
    document.getElementById("register-password").value = "";
    document.getElementById("modal-register-wrapper").classList.add("close");
    document.getElementById("modal-register-wrapper").classList.remove("open");
    
    
     //setting login-icon
     document.getElementById("login-reg").style.display = "block";
     document.getElementById("login-reg").style.display = "flex";
     document.getElementById("login").style.display = "none";
     document.getElementById("login-reg").innerHTML = First[0] + Last[0];
     document.getElementById("login-reg").setAttribute("title", First + " " + Last);
     document.getElementById("drop-profile-auth").innerHTML = RandomNumberCard;  
     document.getElementById("drop-profile-auth").style.fontSize = "13px";




       // menu-with-auth    
     document.getElementById("login-reg").addEventListener("click", event => {
     document.getElementById("drop-menu-profile-with-auth").classList.toggle("open");
     document.getElementById("drop-menu-profile-with-auth").style.zIndex = "1";
     event._isClickLoginReg = true;
     });

     document.body.addEventListener("click", event => {
     if (event._isClickLoginReg) return;
     document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
     })
     document.getElementById("burger").addEventListener("click", event => {
     if (event._isClickLoginReg) return;
     document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
     })
     document.getElementById("drop-link-my-profile").addEventListener("click", event => {
     if (event._isClickLoginReg) return;
     document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
     })
     document.getElementById("drop-link-log-out").addEventListener("click", event => {
     if (event._isClickLogin) return;
     document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
     })



     



     // return after log out
     document.getElementById("drop-link-log-out").addEventListener("click", event => {
        location.reload()  
     })


})



// modal login
document.getElementById("modal-login-form").addEventListener("submit", event => {
    let checkLoginLocalVisit = JSON.parse(localStorage.getItem("visits"))
        document.getElementById("count-visits").innerHTML = checkLoginLocalVisit;
        document.getElementById("profile-visits").innerHTML = checkLoginLocalVisit;
        document.getElementById("profile-visit-auth").innerHTML = checkLoginLocalVisit;

    let checkLoginLocalBooks = JSON.parse(localStorage.getItem("books"));
        document.getElementById("count-profile-books").innerHTML = checkLoginLocalBooks;
        document.getElementById("count-books-auth").innerHTML = checkLoginLocalBooks;
        document.getElementById("count-books").innerHTML = checkLoginLocalBooks;   
    //digital library cards



    let countCheck = 0
    let modalLoginEmail = document.getElementById("modal-login-email").value;
    let modalLoginPassword = document.getElementById("modal-login-password").value;
    let checkLoginLocalStorage = JSON.parse(localStorage.getItem("user"))
    for(let k in checkLoginLocalStorage) {
        if(modalLoginEmail === checkLoginLocalStorage[k]){ 
            countCheck += 1
        };   
            ; 
        if (modalLoginPassword === checkLoginLocalStorage[k] && k != "cardnumber" && k != "email"){
            countCheck += 1
            };
        if (k == "inner") {
            document.getElementById("login-reg").innerHTML = checkLoginLocalStorage[k];
            document.getElementById("modal-profile-bg-avatar").innerHTML = checkLoginLocalStorage[k];
        };
        if (k == "firstlast") {
            document.getElementById("login-reg").setAttribute("title", checkLoginLocalStorage[k]);
            document.getElementById("input-text-form-name-auth").placeholder = checkLoginLocalStorage[k];
            document.getElementById("modal-profile-bg-name").innerHTML = checkLoginLocalStorage[k];
        }
        if (k == "cardnumber") {
            document.getElementById("input-text-form-numbercard-auth").placeholder = checkLoginLocalStorage[k];
            document.getElementById("drop-profile-auth").innerHTML = checkLoginLocalStorage[k];
            document.getElementById("drop-profile-auth").style.fontSize = "13px";
            document.getElementById("copy-number").innerHTML = checkLoginLocalStorage[k];
        };
    }
    if(countCheck === 2) {
        document.getElementById("main-librarycard-auth").style.display = "block";
        document.getElementById("main-librarycard-auth").style.display = "flex";
        document.getElementById("library-card").style.display = "none";

        //counter visits
        let checkLoginLocalVisits = JSON.parse(localStorage.getItem("visits")) + 1;
        localStorage.setItem("visits", JSON.stringify(checkLoginLocalVisits));
        let checkLoginLocalVisit = JSON.parse(localStorage.getItem("visits"))
        document.getElementById("count-visits").innerHTML = checkLoginLocalVisit;
        document.getElementById("profile-visits").innerHTML = checkLoginLocalVisit;
        document.getElementById("profile-visit-auth").innerHTML = checkLoginLocalVisit;
        

    // counter bookes

    // counter bookes
    
    BUTTON_BUY.forEach(b=>b.addEventListener('click', event => { 
        let parrentItem = b.parentNode.querySelector("div > .title-description > span").innerHTML + ", " + b.parentNode.querySelector("div > .title-description > p").innerHTML;
        let liItem = document.createElement("li");
        liItem.innerHTML = parrentItem;
        document.querySelector(".modal-profile-right-rended-books > ul").append(liItem)
        
        if (localStorage.getItem("books") === null) {
            //modal buy
            document.getElementById("modal-login-wrapper").classList.remove("open");
            document.getElementById("modal-login-wrapper").classList.add("close"); 
            document.getElementById("modal-buy-card-wrapper").classList.remove("close");
            document.getElementById("modal-buy-card-wrapper").classList.add("open"); 
            
            BUTTON_BUY.forEach(b=>b.addEventListener('click', event => {event._isClickBuy= true;}))
            document.getElementById("modal-buy-card").addEventListener("click", event => {
                event._isClickBuy = true;
            })
            document.getElementById("modal-buy-card-wrapper").addEventListener("click", event => {
                if (event._isClickBuy) return;
                localStorage.removeItem("books");
                document.getElementById("modal-buy-card-wrapper").classList.add("close");
                document.getElementById("modal-buy-card-wrapper").classList.remove("open");   
            })
            document.getElementById("close-btn-buycard").addEventListener("click", event => {
                if (event._isClickBuy) return;
                localStorage.removeItem("books");
                document.getElementById("modal-buy-card-wrapper").classList.add("close");
                document.getElementById("modal-buy-card-wrapper").classList.remove("open");  
            })
            document.getElementById("close-btn-buycard").addEventListener("click", event => {
                if (event._isClickProfileButton) return;
                localStorage.removeItem("books");
                document.getElementById("modal-buy-card-wrapper").classList.add("close");
                document.getElementById("modal-buy-card-wrapper").classList.remove("open");  
            })
            

            //counter 
            localStorage.setItem("books", JSON.stringify(0));
            let checkLoginLocalBooks = JSON.parse(localStorage.getItem("books"))
            document.getElementById("count-profile-books").innerHTML = checkLoginLocalBooks;
            document.getElementById("count-visits").innerHTML = checkLoginLocalBooks;
            document.getElementById("profile-visit-auth").innerHTML = checkLoginLocalBooks;

            document.getElementById("modal-buy-card-form").addEventListener("submit", event => {
                b.setAttribute('disabled', '');
                b.innerHTML = "Own";
                let checkLoginLocalBook = JSON.parse(localStorage.getItem("books")) + 1;
                localStorage.setItem("books", JSON.stringify(checkLoginLocalBook));
                let checkLoginLocalBooks = JSON.parse(localStorage.getItem("books"));
                document.getElementById("count-profile-books").innerHTML = checkLoginLocalBooks;
                document.getElementById("count-books-auth").innerHTML = checkLoginLocalBooks;
                document.getElementById("count-books").innerHTML = checkLoginLocalBooks;

                document.getElementById("modal-buy-card-wrapper").classList.add("close");
                document.getElementById("modal-buy-card-wrapper").classList.remove("open");
                

                let checkLoginLocalVisit = JSON.parse(localStorage.getItem("visits"))
                document.getElementById("count-visits").innerHTML = checkLoginLocalVisit;
                document.getElementById("profile-visits").innerHTML = checkLoginLocalVisit;
                document.getElementById("profile-visit-auth").innerHTML = checkLoginLocalVisit;       
            })
       
        }   
        if (localStorage.getItem("books") !== null) {
         
            //counter 
            let checkLoginLocalBook = JSON.parse(localStorage.getItem("books")) + 1;
            localStorage.setItem("books", JSON.stringify(checkLoginLocalBook));
            let checkLoginLocalBooks = JSON.parse(localStorage.getItem("books"));
            
            document.getElementById("count-profile-books").innerHTML = checkLoginLocalBooks;
            document.getElementById("count-books-auth").innerHTML = checkLoginLocalBooks;
            document.getElementById("count-books").innerHTML = checkLoginLocalBooks;

            document.getElementById("modal-login-wrapper").classList.remove("open");
            document.getElementById("modal-login-wrapper").classList.add("close"); 
       
            b.setAttribute('disabled', '');
            b.innerHTML = "Own";
        } 
     
      }));



        document.getElementById("modal-login-email").value = "";
        document.getElementById("modal-login-password").value = "";
        document.getElementById("modal-login-wrapper").classList.add("close");
        document.getElementById("modal-login-wrapper").classList.remove("open");
        
        //setting login-icon
        document.getElementById("login-reg").style.display = "block";
        document.getElementById("login-reg").style.display = "flex";
        document.getElementById("login").style.display = "none";


         // menu-with-auth    
        document.getElementById("login-reg").addEventListener("click", event => {
            document.getElementById("drop-menu-profile-with-auth").classList.toggle("open");
            document.getElementById("drop-menu-profile-with-auth").style.zIndex = "1";
            event._isClickLoginRe = true;
        });
        
        document.body.addEventListener("click", event => {
            if (event._isClickLoginRe) return;
            document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
        })
        document.getElementById("burger").addEventListener("click", event => {
            if (event._isClickLoginRe) return;
            document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
        })
        document.getElementById("drop-link-my-profile").addEventListener("click", event => {
            if (event._isClickLoginRe) return;
            document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
        })
        document.getElementById("drop-link-log-out").addEventListener("click", event => {
            if (event._isClickLoginRe) return;
            document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
        })
       

        // return after log out
        document.getElementById("drop-link-log-out").addEventListener("click", event => {
            location.reload()  
         })
        
        






         //modal my profile
         document.getElementById("drop-link-my-profile").addEventListener("click", event => {          
            document.getElementById("modal-profile-wrapper").classList.remove("close");
            document.getElementById("modal-profile-wrapper").classList.add("open"); 
            event._isClickProfile = true;   
        });
        document.getElementById("modal-profile").addEventListener("click", event => {
            event._isClickProfile = true;
        })
        document.getElementById("modal-profile-wrapper").addEventListener("click", event => {
            if (event._isClickProfile) return;
            document.getElementById("modal-profile-wrapper").classList.add("close");
            document.getElementById("modal-profile-wrapper").classList.remove("open");   
        })
        document.getElementById("close-btn-profile").addEventListener("click", event => {
            if (event._isClickProfile) return;
            document.getElementById("modal-profile-wrapper").classList.add("close");
            document.getElementById("modal-profile-wrapper").classList.remove("open");  
        })

        document.getElementById("get-card-button-profile").addEventListener("click", event => {          
            document.getElementById("modal-profile-wrapper").classList.remove("close");
            document.getElementById("modal-profile-wrapper").classList.add("open"); 
            event._isClickProfileButton = true;   
        });
        document.getElementById("modal-profile").addEventListener("click", event => {
            event._isClickProfileButton = true;
        })
        document.getElementById("modal-profile-wrapper").addEventListener("click", event => {
            if (event._isClickProfileButton) return;
            document.getElementById("modal-profile-wrapper").classList.add("close");
            document.getElementById("modal-profile-wrapper").classList.remove("open");   
        })
        document.getElementById("close-btn-profile").addEventListener("click", event => {
            if (event._isClickProfileButton) return;
            document.getElementById("modal-profile-wrapper").classList.add("close");
            document.getElementById("modal-profile-wrapper").classList.remove("open");  
        })


        // copy number
        document.getElementById("icon-copy").addEventListener("click", event => {
            document.getElementById("copy-number").style.color = "#BB945F";
            let textCopy = document.getElementById("copy-number");
            navigator.clipboard.writeText(textCopy.innerHTML);               
        })
                
    }
})




// check reader's card in Library Card
if(localStorage.getItem("user") !== null) {
    document.getElementById("form-button").disabled = false; 

    // click form's button 
    document.getElementById("gold-form").addEventListener("submit", event => {
        let checkLocalStorage = JSON.parse(localStorage.getItem("user"))
        let inputTextFormName = document.getElementById("input-text-form-name").value;
        let inputTextFormNumbercard = document.getElementById("input-text-form-numbercard").value;
        let count = 0;
        let checkLocalVisits = JSON.parse(localStorage.getItem("visits"))
        document.getElementById("profile-visits").innerHTML = checkLocalVisits;
        let checkLocalBooks = JSON.parse(localStorage.getItem("books"))
        document.getElementById("count-books").innerHTML = checkLocalBooks;
        


        for(let key in checkLocalStorage) {
            if(inputTextFormName === checkLocalStorage[key] && key != "email" && key != "inner" && key != "password"){ 
                count += 1}
            if(inputTextFormNumbercard === checkLocalStorage[key] && key != "email" && key != "inner" && key != "password"){
                count += 1}
            if(count == 2) {    
                document.getElementById("form-button").style.opacity = "0";
                document.getElementById("main-librarycard-login-in-account-profile").style.opacity = "1";
                document.getElementById("main-librarycard-login-in-account-profile").style.zIndex = "1";
                
                // timeout
                function buttonTimeout() {
                    document.getElementById("form-button").style.opacity = "1";
                    document.getElementById("main-librarycard-login-in-account-profile").style.opacity = "0";
                    document.getElementById("main-librarycard-login-in-account-profile").style.zIndex = "0";
                    document.getElementById("input-text-form-name").value = ""; 
                    document.getElementById("input-text-form-numbercard").value = "";  
                }
                setTimeout(buttonTimeout, 10000);  

            }
        }
    })
}     

    
// slider for section About
const CARRET_LEFT = document.getElementById("carret-left")
const CARRET_RIGHT = document.getElementById("carret-right")
const ABOUT_IMAGES = document.getElementById("about-images")
let i = 0
const POSITION = {
    0:"0",
    1:"-102.1%",
    2:"-204.3%",
    3:"-306.5%",
    4:"-408.7%"
}
const CHEACKED = () => {
    for (i = 0; i < 5; i++){
    if (document.querySelector("#about-slide-tablet").children[i].checked == true) {
        break
    }
} 
}
CHEACKED()
if (i < 4 && i > 0) {
    CHEACKED()  
CARRET_RIGHT.classList.add("carret-hover");
CARRET_LEFT.classList.add("carret-hover");
CARRET_LEFT.classList.remove("carret-not-hover");
CARRET_RIGHT.classList.remove("carret-not-hover");
}
if (i === 4) {
    CHEACKED() 
    CARRET_RIGHT.classList.remove("carret-hover");
    CARRET_RIGHT.classList.add("carret-not-hover");
    CARRET_LEFT.classList.add("carret-hover");
    CARRET_LEFT.classList.remove("carret-not-hover");   
}
if (i === 0) {
    CHEACKED()  
    CARRET_LEFT.classList.remove("carret-hover");
    CARRET_LEFT.classList.add("carret-not-hover");
    CARRET_RIGHT.classList.add("carret-hover");
    CARRET_RIGHT.classList.remove("carret-not-hover");
}    
CARRET_RIGHT.addEventListener("mouseover", event => {
CHEACKED()
if (i < 4 && i > 0) {
    CHEACKED()  
CARRET_RIGHT.classList.add("carret-hover");
CARRET_LEFT.classList.add("carret-hover");
CARRET_LEFT.classList.remove("carret-not-hover");
CARRET_RIGHT.classList.remove("carret-not-hover");
CARRET_RIGHT.removeEventListener("mouseover")
}
if (i === 4) {
    CHEACKED() 
    CARRET_RIGHT.classList.remove("carret-hover");
    CARRET_RIGHT.classList.add("carret-not-hover");
    CARRET_LEFT.classList.add("carret-hover");
    CARRET_LEFT.classList.remove("carret-not-hover");
    CARRET_RIGHT.removeEventListener("mouseover")
}
CHEACKED()
if (i === 0) {
    CHEACKED()  
    CARRET_LEFT.classList.remove("carret-hover");
    CARRET_LEFT.classList.add("carret-not-hover");
    CARRET_RIGHT.classList.add("carret-hover");
    CARRET_RIGHT.classList.remove("carret-not-hover");
    CARRET_RIGHT.removeEventListener("mouseover")
}
})

CARRET_LEFT.addEventListener("mouseover", event => {
    CHEACKED()
    if (i < 4 && i > 0) {
        CHEACKED()  
    CARRET_RIGHT.classList.add("carret-hover");
    CARRET_LEFT.classList.add("carret-hover");
    CARRET_LEFT.classList.remove("carret-not-hover");
    CARRET_RIGHT.classList.remove("carret-not-hover");  
    CARRET_RIGHT.removeEventListener("mouseover")
    }
    if (i === 4) {
        CHEACKED() 
        CARRET_RIGHT.classList.remove("carret-hover");
        CARRET_RIGHT.classList.add("carret-not-hover");
        CARRET_LEFT.classList.add("carret-hover");
        CARRET_LEFT.classList.remove("carret-not-hover");
        CARRET_RIGHT.removeEventListener("mouseover")
    }
    CHEACKED()
    if (i === 0) {
        CHEACKED()  
        CARRET_LEFT.classList.remove("carret-hover");
        CARRET_LEFT.classList.add("carret-not-hover");
        CARRET_RIGHT.classList.add("carret-hover");
        CARRET_RIGHT.classList.remove("carret-not-hover");
        CARRET_RIGHT.removeEventListener("mouseover")
    }
    })

CARRET_LEFT.addEventListener("click", event => {
    CHEACKED()
    if (i > 0) {
        CARRET_RIGHT.classList.add("carret-hover");
        CARRET_LEFT.classList.add("carret-hover");
        CARRET_LEFT.classList.remove("carret-not-hover");
        CARRET_RIGHT.classList.remove("carret-not-hover");
        i -= 1
        ABOUT_IMAGES.style.left = POSITION[i]
        document.querySelector("#about-slide-tablet").children[i].checked = true;           
    }
    CHEACKED()
    if (i === 0) {
        CARRET_LEFT.classList.remove("carret-hover");
        CARRET_LEFT.classList.add("carret-not-hover");
    }    
})

CARRET_RIGHT.addEventListener("click", event => {
    CHEACKED()
    CARRET_LEFT.classList.add("carret-hover");
    CARRET_LEFT.classList.remove("carret-not-hover");
    CARRET_RIGHT.classList.remove("carret-not-hover");
    if (i < 4) { 
        i += 1
        ABOUT_IMAGES.style.left = POSITION[i]  
        document.querySelector("#about-slide-tablet").children[i].checked = true;  
    } 
    if (i >= 4) {
        CARRET_RIGHT.classList.remove("carret-hover");
        CARRET_RIGHT.classList.add("carret-not-hover");
    }
    CARRET_RIGHT.removeEventListener("click", event => {}) 
})
 


//slider for section Favorites
document.getElementById("input-radio1").addEventListener("click", event => {
    document.getElementById("input-radio1").checked = true;
    document.getElementById("label1").style.cursor = "default";
    document.getElementById("label2").style.cursor = "pointer";
    document.getElementById("label3").style.cursor = "pointer";
    document.getElementById("label4").style.cursor = "pointer";
    document.getElementById("winter-favorites").classList.add("open");
    document.getElementById("winter-favorites").classList.remove("close");
    document.getElementById("spring-favorites").classList.add("close");
    document.getElementById("spring-favorites").classList.remove("open");
    document.getElementById("summer-favorites").classList.add("close");
    document.getElementById("summer-favorites").classList.remove("open");
    document.getElementById("autumn-favorites").classList.add("close");
    document.getElementById("autumn-favorites").classList.remove("open");
})
document.getElementById("input-radio2").addEventListener("click", event => {
    document.getElementById("input-radio2").checked = true;
    document.getElementById("label2").style.cursor = "default";
    document.getElementById("label1").style.cursor = "pointer";
    document.getElementById("label3").style.cursor = "pointer";
    document.getElementById("label4").style.cursor = "pointer";
    document.getElementById("spring-favorites").classList.add("open");
    document.getElementById("spring-favorites").classList.remove("close");
    document.getElementById("winter-favorites").classList.add("close");
    document.getElementById("winter-favorites").classList.remove("open");
    document.getElementById("summer-favorites").classList.add("close");
    document.getElementById("summer-favorites").classList.remove("open");
    document.getElementById("autumn-favorites").classList.add("close");
    document.getElementById("autumn-favorites").classList.remove("open");
})
document.getElementById("input-radio3").addEventListener("click", event => {
    document.getElementById("input-radio3").checked = true;
    document.getElementById("label3").style.cursor = "default";
    document.getElementById("label2").style.cursor = "pointer";
    document.getElementById("label1").style.cursor = "pointer";
    document.getElementById("label4").style.cursor = "pointer";
    document.getElementById("summer-favorites").classList.add("open");
    document.getElementById("summer-favorites").classList.remove("close");
    document.getElementById("winter-favorites").classList.add("close");
    document.getElementById("winter-favorites").classList.remove("open");
    document.getElementById("spring-favorites").classList.add("close");
    document.getElementById("spring-favorites").classList.remove("open");
    document.getElementById("autumn-favorites").classList.add("close");
    document.getElementById("autumn-favorites").classList.remove("open");
})
document.getElementById("input-radio4").addEventListener("click", event => {
    document.getElementById("input-radio4").checked = true;
    document.getElementById("label4").style.cursor = "default";
    document.getElementById("label2").style.cursor = "pointer";
    document.getElementById("label3").style.cursor = "pointer";
    document.getElementById("label1").style.cursor = "pointer";
    document.getElementById("autumn-favorites").classList.add("open");
    document.getElementById("autumn-favorites").classList.remove("close");
    document.getElementById("winter-favorites").classList.add("close");
    document.getElementById("winter-favorites").classList.remove("open");
    document.getElementById("winter-favorites").classList.add("close");
    document.getElementById("winter-favorites").classList.remove("open");
    document.getElementById("summer-favorites").classList.add("close");
    document.getElementById("summer-favorites").classList.remove("open");
})



console.log(`
    1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part2.md;
    \n
    2. Deploy: https://rolling-scopes-school.github.io/ranika23-JSFEPRESCHOOL2023Q2/library/;
    \n
    3. Done 12.08.2023 / deadline 14.08.2023;
    \n
    4. Score : 50/50;
    \n
    Вёрстка соответствует макету. Ширина экрана 768px: 
    \n
    - (2/2) блок <header>; 
    \n
    - (2/2) секция Welcome;
    \n
    - (4/4) секция About: добавлены новые элементы в виде стрелок и сделан переход на 5 точек вместо 3х, расстояние от картинки до точек сделано по макету (балл не снижается);
    \n
    - (2/2) секция Favorites;
    \n
    - (2/2) в соответствии с условием ТЗ кнопка, находившаяся в состоянии 'own' на Desktop, осталась в том же состоянии и на Tablet;
    \n
    - (4/4) секция CoffeShop;
    \n
    - (4/4) секция Contact;
    \n
    - (4/4) секция LibraryCard;
    \n
    - (2/2) блок <footer>;
    \n
    Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется:
    \n
    - (4/4) нет полосы прокрутки при ширине страницы от 1440рх до 640рх; 
    \n
    - (4/4) элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх; 
    \n
    - (4/4) элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх;
    \n
    На ширине экрана 768рх реализовано адаптивное меню: 
    \n
    - (2/2) Версия Tablet, отступ иконки юзера и открытого меню от правого края соответствует макету. Сам крест отцентрирован по центральной позиции бургер-иконки. При переходе из одного состояния в другое ничего не прыгает. Само меню прижато к правому краю целиком. Цвет выпавшего меню совпадает с цветом полоски навигации; 
    \n
    - (4/4) при нажатии на бургер-иконку плавно появляется адаптивное меню;
    \n
    - (2/2) при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран;
    \n
    - (2/2) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, само адаптивное меню при этом плавно скрывается;
    
    - (2/2) размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверено на PixelPerfect; 
`);