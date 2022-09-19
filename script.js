const form = document.querySelector('#userForm')
const noun = document.querySelector('#name')
const password = document.querySelector('#password')

const btn = document.querySelector('#submit')
const loginLink = document.querySelector('.loginLink')

const container = document.querySelector('.container') 
const loginForm = document.querySelector('.loginForm')
const loginBtn = document.querySelector('#loginBtn')
const logName = document.querySelector('.logName')
const logPassword = document.querySelector('.logPassword') 



loginBtn.addEventListener('click', () => {
   if (logName.value === localStorage['name'] && logPassword.value === localStorage['password']) {
      alert('Sayfamiza hosh geldiniz :)')
   } else {
      alert('The name or password you entered is incorrect !')
   }
}) 

btn.addEventListener('click', (event) => {   
   event.preventDefault()
   if ((password.value.length < 5) && noun.value.length === 0 ) {
      alert('Ad ve Parol qismini doldurun zehmet olmasa !')
   } else if ((password.value.length < 5)) {
      alert('Parolu 5 simvoldan daha chox daxil edin !')
   } else if (noun.value.length === 0) {
      alert('Ad hissesini bosh qoymayin !')
   }  
   else {
      container.style.display = 'flex'
      form.style.display = 'none'

      const data = new FormData(form)
      const values = [...data.entries()]
 
      localStorage.setItem(values[0][0], values[0][1])
      localStorage.setItem(values[2][0], values[2][1])

      newWindow()
   }
})

function newWindow() {
   loginLink.addEventListener('click', () => {
      loginForm.style.display = 'block'
      container.style.display = 'none'
   })
}