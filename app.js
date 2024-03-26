const parentElement=document.querySelector(".parentElement");
        const robotImage=document.querySelector("#robotImage");
        const setName=document.querySelector("#setName");
        const btnMakeRobot=document.querySelector("#btnMakeRobot");
        class robotCard{
            constructor(parentElement,name,picture){
                this.parentElement=parentElement;
                this.name=name;
                this.picture=picture;
            
            }

            creatRobotCard(){
              let card=document.createElement('div');
              card.classList.add('card', 'm-5', 'shadow-lg');
              card.style.width = '10rem';
              card.style.height='15rem';
              card.style.backgroundColor='rgb(61, 106, 255)';
              card.style.border='0.2rem solid';


              let image=document.createElement('img');

              image.src = robotImage.files[0].name;
              image.classList.add('card-img-top', 'py-2');
              image.alt="...";

              let cardBody=document.createElement('div');
              cardBody.classList.add('cardBody');

              let robotName=document.createElement('h5');
              robotName.classList.add('card-title','robotName','text-center');
              robotName.innerHTML= this.name;



              cardBody.appendChild(robotName);
              card.appendChild(image);
              card.appendChild(cardBody);
              this.parentElement.appendChild(card);

            }
        }

        btnMakeRobot.addEventListener("click",()=>{

            if(robotImage.value=="" && setName.value==""){
                robotImage.classList.add("is-invalid");
                setName.classList.add("is-invalid");
            }
            else if(robotImage.value=="" && setName.value!="" ){
                robotImage.classList.add("is-invalid");
                setName.classList.add("is-valid");
            }
            else if(setName.value==""&& robotImage.value!="" ){
                robotImage.classList.add("is-valid");
                setName.classList.add("is-invalid");
            }
            else{
                const newRobotCard= new robotCard(parentElement,setName.value.trim(),robotImage);
                newRobotCard.creatRobotCard();
                setName.value="";
                robotImage.value="";
                robotImage.classList.add("is-valid");
                setName.classList.add("is-valid");
            }
        })