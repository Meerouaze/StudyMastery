 const budgetInput = document.getElementById('Budgetinput');
    const estimateBtn = document.getElementById('Estimate-btn');
    const cards = document.querySelectorAll('.offr-card');
    
    estimateBtn.addEventListener('click', function() {
        const budget = parseFloat(budgetInput.value);
        
        cards.forEach(card => {
            card.style.transform = '';
            card.style.boxShadow = '';
            card.style.borderColor = '';
            card.style.background = '';
        });
        if (budget < 5){
            alert("please put an acceptable amount")
        }
        if ( budget>=5 &&   budget < 10) {
            cards[0].style.transform = 'scale(1.1)';
            cards[0].style.boxShadow = '0 0 40px rgba(230, 169, 4, 0.8)';
            cards[0].style.borderColor = '#e6a904';
        } else if (budget < 20) {
            cards[1].style.transform = 'scale(1.1)';
            cards[1].style.boxShadow = '0 0 40px rgba(230, 169, 4, 0.8)';
            cards[1].style.borderColor = '#e6a904';
        } else {
            cards[2].style.transform = 'scale(1.1)';
            cards[2].style.boxShadow = '0 0 40px rgba(230, 169, 4, 0.8)';
            cards[2].style.borderColor = '#e6a904';
        }
    });


    const signInForm = document.getElementById('signin');
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (username.length < 8) {
            alert('Username must be at least 8 characters');
            event.preventDefault();
            return;
        }
        if (email === '') {
            alert('Please fill in the email field');
            event.preventDefault();
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters');
            event.preventDefault();
            return;
        }
        if (phone.length !== 10) {
            alert('Phone number must be exactly 10 digits');
            event.preventDefault();
            return;
        }
        const counterNumber = document.querySelector('.counter-number');
        let currentCount = parseInt(counterNumber.textContent);
        counterNumber.textContent = currentCount + 1;  

        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('phone').value = '';
        
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Registered successfully!';
        successMessage.style.cssText = 'color: #4CAF50; font-size: 18px; text-align: center; margin-top: 15px; font-weight: bold;';
        signInForm.appendChild(successMessage);
        

        setTimeout(function() {
            successMessage.remove();
        }, 5000);
        return;
    });



