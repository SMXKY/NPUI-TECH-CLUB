//harmbuger menu

const harmbuger = document.querySelector('.js-hambager') ;
const navMenu = document.querySelector('.js-nav-menu') ;
const addBtn = document.querySelector('.js-add-btn') ;

harmbuger.addEventListener('click', ()=> {
    harmbuger.classList.toggle('active') ;
    navMenu.classList.toggle('active') ;
    addBtn.classList.toggle('active') ;
}) ;

//carousel

const carouselSlide = document.querySelector('.js-carousel-slide') ;

function imageScroll(){
    let counter = 1 ;
    carouselSlide.innerHTML = `<img src="images-and-icons/${counter}.jpg" alt="">` ;
    counter ++ ;
    setInterval(() => {
        if(counter > 9){
            counter = 1 ;
        }

        carouselSlide.innerHTML = `<img src="images-and-icons/${counter}.jpg" alt="">` ;
        counter ++ ;
    }, 8000) ;
}

imageScroll() ;

//see applicants

const applicantsPendeing= [
    {
        name: 'Jose Junior',
        matricule: '23-ET-039',
        level: '100',
        status: 'Applied'
    },

    {
        name: 'Dylan Ngum',
        matricule: '22-ET-004',
        level: '200',
        status: 'Applied'
    },

    {
        name: 'Maxwell Cho',
        matricule: '21-ET-119',
        level: '300',
        status: 'Applied'
    }
] ;

const applicantsAccepted= [
    {
        name: 'James Nielen',
        matricule: '22-ET-089',
        level: '200',
        status: 'Accepted'
    },

    {
        name: 'Bafon Precious Ngum',
        matricule: '22-ET-074',
        level: '200',
        status: 'Accepted'
    },

    {
        name: 'Tasha Clofford',
        matricule: '22-ET-019',
        level: '200',
        status: 'Accepted'
    }
] ;

function renderList(array, on, off, status){
    const contentBody = document.querySelector('.js-content-body') ;

    contentBody.innerHTML = `` ;

    array.forEach((applicant) => {
        contentBody.innerHTML += `
            <p>${applicant.name}</p>
            <p>${applicant.matricule}</p>
            <p>${applicant.level}</p>
            <p class="${status}">${applicant.status}</p>
        `;
    }) ;

    document.querySelector(`.${on}`).classList.add('on-opacity') ;
    document.querySelector(`.${off}`).classList.remove('on-opacity') ;
}

renderList(applicantsPendeing, 'on-button1', 'on-button2', 'blue') ;

document.querySelector('.js-applicants-button').addEventListener('click', () => {
    renderList(applicantsPendeing, 'on-button1', 'on-button2', 'blue') ;
}) ;

document.querySelector('.js-accepted-button').addEventListener('click', () => {
    renderList(applicantsAccepted, 'on-button2', 'on-button1', 'green') ;
}) ;

//form rendering

document.querySelectorAll('.join-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector('.js-overlay').classList.add('open-form') ;
        renderForm() ;
        document.querySelector('.js-close-overlay').addEventListener('click', () => {
            document.querySelector('.js-overlay').innerHTML = '' ;
            document.querySelector('.js-overlay').classList.remove('open-form') ;
        }) ;
    }) ;
}) ;

function renderForm(){
    document.querySelector('.js-overlay').innerHTML = `
    <div class="form-container">
        <button class="close-overlay js-close-overlay"><img src="images-and-icons/close-icon.png" alt=""></button>

        <form action="" class="the-form">
            <label for="" class="form-header">Registration Form</label>

            <div class="input-template">
                <i class="fa fa-user"></i>
                <input type="text" placeholder="Name" required>
            </div>

            <div class="input-template">
                <i class="fa fa-hashtag"></i>
                <input type="text" placeholder="Matricule" required>
            </div>

            <div class="input-template">
                <i class="fa fa-laptop"></i>
                <input type="text" placeholder="What are you good at?" required>
            </div>

            <div class="input-template">
                <i class="fa fa-envelope"></i>
                <input type="text" placeholder="Email" required>
            </div>

            <div class="input-template">
                <i class="fa fa-hashtag"></i>
                <input type="text" placeholder="Level" required>
            </div>

            <textarea name="" id=""  placeholder="Send us links to your work." class="text-form" required></textarea>

            <button type="submit" class="submit-form">Submit</button>
            
        </form>
    </div>
    ` ;
}


