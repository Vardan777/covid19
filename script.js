let patasxan;

function fun1(text){
    let voch = document.getElementById("voch");
    patasxan = text;

    if(patasxan == "Պետական"){
        voch.style.display = "block";
        document.getElementById("answ1").style.display = "none";
        document.getElementById("answ2").style.display = "none";
        document.getElementById("answ3").style.display = "none";

    } 
    else if(patasxan == "Մասնավոր"){
        document.querySelector(".harc").innerHTML = 'Մարտի 13-30 հանդիսացել եք վարձու աշխատող';
        document.getElementById("answ1").innerHTML = "այո";
        document.getElementById("answ2").innerHTML = "ոչ";
        document.getElementById("answ3").style.display = "none";

        let answ1 = document.getElementById('answ1');     
        let answ2 = document.getElementById('answ2'); 

        answ1.onclick = function() {
            document.querySelector(".harc").innerHTML = "Աշխատում եք հյուրանոցային և հյուրատնային, հանրային սննդի, զբոսաշրջային, վարսավիրանոցների և գեղեցկության սրահների և մանրածախ առևտրի ծառայությունների ոլորտում՝ բացառությամբ այն մանրածախ առևտրի ծառայությունների որտեղ վաճառվում է սննդամթերք, ալկոհոլային խմիչքներ, ծխախոտ և դեղորայք";

            answ1.onclick = function() {
                document.getElementById("answ1").style.display = "none";
                document.getElementById("answ2").style.display = "none";
                document.getElementById("yntrvacEq").style.display = "block";
            }

        };
        answ2.onclick = function(){
            document.getElementById("answ1").style.display = "none";
            document.getElementById("answ2").style.display = "none";
            ///////////////////
            voch.style.display = "block";   
            ///////////////////
        }
    } 


    else if(patasxan == "Մարտի 30-ի դրությամբ գրանցված աշխատող չեմ կամ չեմ աշխատում"){
        document.querySelector(".harc").innerHTML = 'Ո՞ր խմբին եք պատկանում';
        document.getElementById("answ4").style.display = "block";
        /// Vardan
        document.getElementById("answ1").innerHTML = "Ազատվել եք աշխատանքից մարտի 13-30 ժամանակահատվածում";
         let answ1 = document.getElementById('answ1');
        answ1.onclick = function() {

            document.getElementById("answ1").innerHTML = "Հանդիսացել եք բանկերի, վարկային կազմակերպությունների, գրավատների, ապահովագրական ընկերությունների, արտարժույթի փոխանակման կետերի, արժեթղթերի առք ու վաճառքով զբաղվող կազմակերպությունների, ներդրումային կազմակերպությունների, ներդրումային ֆոնդերի, վիճակախաղերի և շահումով խաղերի կազմակերպիչների և նմանատիպ գործունեություն կազմակերպողների վարձու աշխատող:";
            document.getElementById("answ2").innerHTML = "Երկու ծնողները միաժամանակ մարտի 13-25 ժամանակահատվածում կորցրել են աշխատանք կամ  մեկը կորցրել է, մյուսը չի ունեցել աշխատանք կամ ծնողներից մեկը մահացել է կամ անհայտ կորած է, իսկ մյուսը կորցրել է աշխատանքը կամ միայնակ մայրը ու երեխայի հետ ապրող ծնողը, ով կորցրել է աշխատանքը, եթե ամուսնալուծված են:";
            document.getElementById("answ3").style.display = "none";
            document.getElementById("answ4").style.display = "none";

            let answ1 = document.getElementById('answ1');

            answ1.onclick = function() {

                document.querySelector(".harc").innerHTML = "Հանդիսացել եք բանկերի, վարկային կազմակերպությունների, գրավատների, ապահովագրական ընկերությունների, արտարժույթի փոխանակման կետերի, արժեթղթերի առք ու վաճառքով զբաղվող կազմակերպությունների, ներդրումային կազմակերպությունների, ներդրումային ֆոնդերի, վիճակախաղերի և շահումով խաղերի կազմակերպիչների և նմանատիպ գործունեություն կազմակերպողների վարձու աշխատող:";
                document.getElementById("answ1").innerHTML = "այո";
                document.getElementById("answ2").innerHTML = "ոչ";
                document.getElementById("answ3").style.display = "none";
                document.getElementById("answ4").style.display = "none";

                answ1.onclick = function() {
                    document.getElementById("answ1").style.display = "none";
                    document.getElementById("answ2").style.display = "none";
                    voch.style.display = "block"; 

                }
                answ2.onclick = function() {
                            document.querySelector(".harc").innerHTML = "Ունեցել եք անընդմեջ կամ առավելագույնը 3 օր ընդմիջումով աշխատանք հունվարի 1-ից մարտի 13 ժամանակահատվածում";
                            document.getElementById("answ1").innerHTML = "այո";
                            document.getElementById("answ2").innerHTML = "ոչ";

                    answ1.onclick = function() {
                            document.querySelector(".harc").innerHTML = "Նախորդ 2 ամիսների միջին ամսական աշխատավարձը գերազանցում է 500 հզ. Դրամը";
                            document.getElementById("answ1").innerHTML = "այո";
                            document.getElementById("answ2").innerHTML = "ոչ";
                          
                    answ1.onclick = function() {
                            document.getElementById("answ1").style.display = "none";
                            document.getElementById("answ2").style.display = "none";
                            voch.style.display = "block"; 

                }
                    answ2.onclick = function() {
                            document.querySelector(".harc").innerHTML = "Մարտի 30-ի դրությամբ հանդիսացել եք ԱՁ";
                            document.getElementById("answ1").innerHTML = "այո";
                            document.getElementById("answ2").innerHTML = "ոչ";

                             answ1.onclick = function() {
                            document.getElementById("answ1").style.display = "none";
                            document.getElementById("answ2").style.display = "none";
                            voch.style.display = "block"; 

                }
                    answ2.onclick = function() {
                            document.querySelector(".harc").innerHTML = "Մարտի 30-ի դրությամբ աշխատանքային հարաբերությունների մեջ եղել եք այլ գործատուի հետ կամ նույն գործատուի հետ՝ այլ պայմանագրով";
                            document.getElementById("answ1").innerHTML = "այո";
                            document.getElementById("answ2").innerHTML = "ոչ";
                    answ1.onclick = function() {
                            document.getElementById("answ1").style.display = "none";
                            document.getElementById("answ2").style.display = "none";
                            voch.style.display = "block"; 

                }
                    answ2.onclick = function() {
                            document.querySelector(".harc").innerHTML = "Մարտի 30-ի դրությամբ աշխատանքային հարաբերությունների մեջ եղել եք այլ գործատուի հետ կամ նույն գործատուի հետ՝ այլ պայմանագրով";
                            document.getElementById("answ1").style.display = "none";
                            document.getElementById("answ2").style.display = "none";
                            document.getElementById("yntrvacEq").style.display = "block";


                }

                }

                }

                }

                    answ2.onclick = function() {
                    document.getElementById("answ1").style.display = "none";
                    document.getElementById("answ2").style.display = "none";
                    voch.style.display = "block"; 

                }

                }
            }
        }
        answ4.onclick = function(){
            document.querySelector(".harc").innerHTML = "Չեմ պատկանում վերոնշյալ խմբերից որևէ մեկին";
            document.getElementById("answ1").style.display = "none";
            document.getElementById("answ2").style.display = "none";
            document.getElementById("answ3").style.display = "none";
            document.getElementById("answ4").style.display = "none";
            voch.style.display = "block"; 
        }    

        /// 2rd
        document.getElementById("answ2").innerHTML = "Հղի կին եք և ձեր ամուսինն ազատվել է աշխատանքից մարտի  13-30 ժամանակահատվածում կամ միայնակ հղի կին եք";
        let answ2 = document.getElementById('answ2');
        answ2.onclick = function(){
            document.querySelector(".harc").innerHTML = 'Ունեք մինչև 14 տարեկան երեխա/երեխաներ';
            document.getElementById("answ1").innerHTML = "այո";
            document.getElementById("answ2").innerHTML = "ոչ";
            document.getElementById("answ3").style.display = "none";
            document.getElementById("answ4").style.display = "none";
            answ2.onclick = function() {
                            document.getElementById("answ1").style.display = "none";
                            document.getElementById("answ2").style.display = "none";
                            voch.style.display = "block"; 

                }
                answ1.onclick = function() {
            document.querySelector(".harc").innerHTML = 'Նախորդ 2 ամսում ստացած աշխատավարձը գերազանցել է 500000 դրամ:';
            document.getElementById("answ1").innerHTML = "այո";
            document.getElementById("answ2").innerHTML = "ոչ";
  answ2.onclick = function() {
                            document.getElementById("answ1").style.display = "none";
                            document.getElementById("answ2").style.display = "none";
                            voch.style.display = "block"; 

                }
                  answ1.onclick = function() {
                            document.getElementById("answ1").style.display = "none";
                            document.getElementById("answ2").style.display = "none";
                            document.getElementById("yntrvacEq").style.display = "block";

                }
                   


                }

        }
        /// 3rd
        document.getElementById("answ3").innerHTML = "Ունեք մինչև 18 տարեկան երեխա/երեխաներ";
        let answ3 = document.getElementById('answ3');

        answ3.onclick = function(){
            document.getElementById("answ1").style.display = "block";
            document.getElementById("answ2").style.display = "block";
            document.getElementById("answ3").style.display = "none";
            document.getElementById("answ4").style.display = "none";
            
            document.querySelector(".harc").innerHTML = 'Մարտի 12-ի դրությամբ աշխատանք ունեցել եք';
            
            document.getElementById("answ1").innerHTML = "այո";
            document.getElementById("answ2").innerHTML = "ոչ";

            console.log(answ1);
            console.log(answ2);

            answ1.onclick = function(){
                answ1.style.display = "none";
                answ2.style.display = "none";
                voch.style.display = "block";
            }

            answ2.onclick = function(){
                document.querySelector(".harc").innerHTML = 'Ընտանիքը հաշվառված չէ անապահովության գնահատման համակարգում կամ անապահովության միավորը ցածր է 28.01-ից:';
            
                answ1.onclick = function(){
                    answ1.style.display = "none";
                    answ2.style.display = "none";
                    voch.style.display = "block";
                }
                answ2.onclick = function(){
                    document.querySelector(".harc").innerHTML = 'Երեխայի ծնողներից մեկը հանդիսանում է ԱՁ';
                    
                    answ2.onclick = function(){
                        document.querySelector(".harc").innerHTML = 'Առնվազն ծնողներից մեկը և երեխան/երեխաները մշտապես բնակվել են ՀՀ-ում';
                    
                        answ1.onclick = function(){
                            answ1.style.display = "none";
                            answ2.style.display = "none";
                            document.getElementById("yntrvacEq").style.display = "block";
                        }
                        answ2.onclick = function(){
                            answ1.style.display = "none";
                            answ2.style.display = "none";
                            voch.style.display = "block";
                        }
                    }
                }
            }
        }
    }
}




//By Vardan Geghamyan 
//By Daniil Kudryashov 