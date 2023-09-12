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




//disabled button's form modul card-buy
function activButton() {
               
    let cardNumber = document.getElementById("card_number").value;
    let expirationCode1 = document.getElementById("expiration_code").value;
    let expirationCode2 = document.getElementById("expiration_code2").value;
    let cvc = document.getElementById("cvc").value;
    let cardHolder = document.getElementById("cardholder").value;
    let postalCode = document.getElementById("postal_code").value;
    let cityTown = document.getElementById("city_town").value;          
    if (cardNumber && expirationCode1 && expirationCode2 && cvc && cardHolder && postalCode && cityTown) {
        document.getElementById("button-modal-buy").classList.add("activ")
    } else {
        document.getElementById("button-modal-buy").classList.remove("activ")
    }
    }
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
            activButton()

            //counter         
                document.getElementById("modal-buy-card-form").addEventListener("submit", event => {
                
                localStorage.setItem("books", JSON.stringify(1));
                let checkLoginLocalBooks = JSON.parse(localStorage.getItem("books"))
                document.getElementById("count-profile-books").innerHTML = checkLoginLocalBooks;
                document.getElementById("count-books").innerHTML = checkLoginLocalBooks;
                document.getElementById("count-books-auth").innerHTML = checkLoginLocalBooks;
    
                
                document.getElementById("modal-buy-card-wrapper").classList.add("close");
                document.getElementById("modal-buy-card-wrapper").classList.remove("open");
                 
                b.setAttribute('disabled', '');
                b.innerHTML = "Own";
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
            activButton()

            //counter 
                document.getElementById("modal-buy-card-form").addEventListener("submit", event => {
                localStorage.setItem("books", JSON.stringify(1));
                let checkLoginLocalBooks = JSON.parse(localStorage.getItem("books"))
                document.getElementById("count-profile-books").innerHTML = checkLoginLocalBooks;
                document.getElementById("count-books").innerHTML = checkLoginLocalBooks;
                document.getElementById("count-books-auth").innerHTML = checkLoginLocalBooks;
                    
                document.getElementById("modal-buy-card-wrapper").classList.add("close");
                document.getElementById("modal-buy-card-wrapper").classList.remove("open");
                     
                b.setAttribute('disabled', '');
                b.innerHTML = "Own";
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
    document.getElementById("spring-favorites").classList.add("close");
    document.getElementById("spring-favorites").classList.remove("open");
    document.getElementById("summer-favorites").classList.add("close");
    document.getElementById("summer-favorites").classList.remove("open");
    document.getElementById("autumn-favorites").classList.add("close");
    document.getElementById("autumn-favorites").classList.remove("open");
    document.getElementById("winter-favorites").classList.add("open");
    document.getElementById("winter-favorites").classList.remove("close");



    
})
document.getElementById("input-radio2").addEventListener("click", event => {
    document.getElementById("input-radio2").checked = true;
    document.getElementById("label2").style.cursor = "default";
    document.getElementById("label1").style.cursor = "pointer";
    document.getElementById("label3").style.cursor = "pointer";
    document.getElementById("label4").style.cursor = "pointer";
    document.getElementById("winter-favorites").classList.add("close");
    document.getElementById("winter-favorites").classList.remove("open");
    document.getElementById("summer-favorites").classList.add("close");
    document.getElementById("summer-favorites").classList.remove("open");
    document.getElementById("autumn-favorites").classList.add("close");
    document.getElementById("autumn-favorites").classList.remove("open");
    document.getElementById("spring-favorites").classList.add("open");
    document.getElementById("spring-favorites").classList.remove("close");
})
document.getElementById("input-radio3").addEventListener("click", event => {
    document.getElementById("input-radio3").checked = true;
    document.getElementById("label3").style.cursor = "default";
    document.getElementById("label2").style.cursor = "pointer";
    document.getElementById("label1").style.cursor = "pointer";
    document.getElementById("label4").style.cursor = "pointer";
    document.getElementById("winter-favorites").classList.add("close");
    document.getElementById("winter-favorites").classList.remove("open");
    document.getElementById("spring-favorites").classList.add("close");
    document.getElementById("spring-favorites").classList.remove("open");
    document.getElementById("autumn-favorites").classList.add("close");
    document.getElementById("autumn-favorites").classList.remove("open");
    document.getElementById("summer-favorites").classList.add("open");
    document.getElementById("summer-favorites").classList.remove("close");
})
document.getElementById("input-radio4").addEventListener("click", event => {
    document.getElementById("input-radio4").checked = true;
    document.getElementById("label4").style.cursor = "default";
    document.getElementById("label2").style.cursor = "pointer";
    document.getElementById("label3").style.cursor = "pointer";
    document.getElementById("label1").style.cursor = "pointer";
    document.getElementById("spring-favorites").classList.add("close");
    document.getElementById("spring-favorites").classList.remove("open");
    document.getElementById("winter-favorites").classList.add("close");
    document.getElementById("winter-favorites").classList.remove("open");
    document.getElementById("summer-favorites").classList.add("close");
    document.getElementById("summer-favorites").classList.remove("open");
    document.getElementById("autumn-favorites").classList.add("open");
    document.getElementById("autumn-favorites").classList.remove("close");
})



console.log(`
    1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part3.md;
    \n
    2. Deploy: https://rolling-scopes-school.github.io/ranika23-JSFEPRESCHOOL2023Q2/library/ ;
    \n
    3. Done 10.09.2023 / deadline 11.09.2023;
    \n
    4. Score : 200/200;
    \n
    Этап 1: Пользователь не зарегистрирован. Ограниченная карусель в блоке About: 
    \n
    - (15/15) Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания; 
    \n
    - (2/2) На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева;
    \n
    - (2/2) Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная;
    \n
    - (2/2) Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии;
    \n
    - (2/2) На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5;
    \n
    - (2/2) Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели;
    \n
    Слайдер в блоке Favorites:
    \n
    - (15/15) "Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления.;
    \n
    - (2/2) На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие;
    \n
    - (2/2) Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца.;
    \n
    - (2/2) Во время анимаций высота блока Favorites не должна меняться.
    \n
    - (2/2) Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites; 
    \n
    До авторизации:
    \n
    - (2/2) В блоке Favorites все кнопки должны иметь имя Buy, а не Own; 
    \n
    Этап 2: Пользователь на этапе регистрации. Меню авторизации при нажатии на иконку пользователя:
    \n
    - (2/2) Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой;
    \n
    - (2/2) На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации; 
    \n
    - (2/2) То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации.;
    \n
    - (2/2) Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации;
    \n
    Модальное окно REGISTER:
    \n
    - (15/15) Дизайн модального окна соответствует макету;
    \n
    - (2/2) При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password;
    \n
    - (2/2) При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER;
    \n 
    - (2/2) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения);
    \n
    - (2/2) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается;
    \n
    - (2/2) В данном случае, ограничения по полям - все поля должны быть не пустыми;
    \n 
    - (2/2) Пароль должен быть не короче 8 символов;
    \n
    - (2/2) В поле E-mail должна быть валидация типа email;
    \n
    Окончание регистрации:
    \n
    - (2/2) Данные сохраняются в хранилище localStorage, в том числе и пароль, хотя в реальной жизни так делать нельзя;
    \n
    - (2/2) Иконка пользователя меняется на заглавные буквы имени;
    \n
    - (2/2) Отображение страницы приходит в состояние после авторизации (этап 4);
    \n
    - (2/2) Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа;
    \n
    При наличии регистрации, но будучи не авторизованным:
    \n
    - (2/2) Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд;
    \n
    - (2/2) Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются;
    \n
    Этап 3: Пользователь на этапе входа в учётную запись после регистрации. Модальное окно LOGIN:
    \n
    - (15/15) Дизайн модального окна соответствует макету;
    \n
    - (2/2) При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password;
    \n
    - (2/2) При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN;
    \n
    - (2/2) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения);
    \n
    - (2/2) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается;
    \n
    - (2/2) Для авторизации все поля должны быть не пустыми;
    \n
    - (2/2) Пароль должен быть не короче 8 символов;
    \n
    Блок Favorites:
    \n
    - (2/2) Если пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN;
    \n
    Этап 4: Пользователь после входа в учётную запись. Меню профиля при нажатии на иконку с инициалами пользователя;
    \n
    - (2/2) При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title);
    \n
    - (2/2) Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой;
    \n
    - (2/2) На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации;
    \n
    - (2/2) То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна;
    \n
    - (2/2) Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля;
    \n
    - (2/2) Вместо надписи Profile отображается девятизначный Card Number. Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер;
    \n
    - (2/2) Нажатие на кнопку My Profile открывает модальное окно MY PROFILE;
    \n
    -(2/2) Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1;
    \n
    Модальное окно MY PROFILE:
    \n
    - (15/15) Дизайн модального окна соответствует макету;
    \n
    - (2/2) Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию;
    \n
    - (2/2) Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16;
    \n
    - (2/2) Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена;
    \n
    - (2/2) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения);
    \n
    - (2/2) При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается;
    \n
    Блок Favorites:
    \n
    - (2/2) При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD;
    \n
    - (2/2) При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле;
    \n
    - (2/2) Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен;
    \n
    Модальное окно BUY A LIBRARY CARD:
    \n
    - (2/2) Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще;
    \n
    - (15/15) Дизайн модального окна соответствует макету;
    \n
    - (2/2) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается;
    \n
    - (2/2) Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми;
    \n
    - (2/2) Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет;
    \n
    - (2/2) Expiration code содержит 2 поля с ограничением в 2 цифры;
    \n
    - (2/2) CVC должен содержать 3 цифры;
    \n
    Блок Digital Library Cards:
    \n
    - (2/2) При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account;
`);