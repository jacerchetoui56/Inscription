// Start query selection 
const thanks = document.querySelector(".thanks")
const container = document.querySelector(".container")
const nextbtn  = document.querySelectorAll(".nextbtn")
const stepone  = document.querySelector(".stepone")
const steptwo  = document.querySelector(".steptwo")
const stepthree  = document.querySelector(".stepthree")
const line1  = document.querySelector(".onetotwo")
const line2  = document.querySelector(".twotothree")
const form1 = document.querySelector(".form1")
const form2 = document.querySelector(".form2")
const form3 = document.querySelector(".form3")

//end query selectors

//start data

// --form1
const firstname = document.querySelector("#firstName")
const lastname = document.querySelector("#lastName")
const phoneNum = document.querySelector("#phoneNum")
const email = document.querySelector("#email")
const cinNum = document.querySelector("#cinNum")
// --form2 
const fatherName = document.querySelector("#fatherName")
const fatherPhoneNum = document.querySelector("#fatherPhoneNum")
const motherName = document.querySelector("#motherName")
const motherPhoneNum = document.querySelector("#motherPhoneNum")
const country = document.querySelector("#parentsCountry")
// --form3 
const section = document.querySelector("#section")
const bacYear = document.querySelector("#bacYear")
const insNum = document.querySelector("#insNum")
const college = document.querySelector("#college")

//end data

let step1 = false ,step2 = false,step3 = false;


for(let i=0;i<nextbtn.length;i++){
    nextbtn[i].addEventListener('click',(e)=>{
    e.preventDefault()
        if(step1) {
            if(step2) step3 = true
            else step2 = true
        }
        else step1 = true
    
        verif()
    })
    
}


function verif(){
    if(step1 && step2==false) 
    {
    stepone.classList.remove('on')
    steptwo.classList.toggle('on')
    line1.style.display = 'block'
    line1.style.backgroundColor = '#009ab99c'
    form1.style.display = 'none'
    form2.style.display = 'block'
    steptwo.style.backgroundColor = '#009ab9'
    let conf = confirm(`Are you sure of these Informations\n
    first name : ${firstname.value}\n
    second name : ${lastname.value}\n
    phone number : ${phoneNum.value}\n
    CIN number : ${cinNum.value}\n
    `);
    }
    if(step2 && step3==false) {
    steptwo.style.borderStyle = 'solid'
    steptwo.classList.remove('on')
    stepthree.classList.toggle('on')
    line2.style.display = 'block'
    line2.style.backgroundColor = '#009ab99c'
    form2.style.display = 'none'
    form3.style.display = 'block'
    stepthree.style.backgroundColor = '#009ab9' 
    let conf = confirm(`Are you sure of these Informations\n
    father's fullname : ${fatherName.value}\n
    father's phone number : ${fatherPhoneNum.value}\n
    Mother's fullname : ${lastname.value}\n
    Mother's phone number: ${motherPhoneNum.value}\n
    parents country: ${country.value}\n
    `);
    }
    if(step3){
        let conf = confirm(`Are you sure of these Informations\n
    Section : ${section.value}\n
    Baccalaureat Year : ${bacYear.value}\n
    College : ${college.value}\n
    Inscripion number : ${insNum.value}\n
    `);
        container.style.display = 'none'
        thanks.style.display = 'flex'
    }
}

