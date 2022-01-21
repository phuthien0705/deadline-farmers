import React from 'react';
import signupLogo from './src/Book lover-bro.png';


function RegisterPage(props) {
    return (
        <div class="signup">
            <div class="signup__left">
                <h1 class="signup__title">Sign up</h1>
                <h2 class="signup__desc">Sign up with</h2>
                <div class="signup-social">
                    <a href="#" class="signup-social__item">
                        <i class="fab fa-google signup-social__icon"></i>
                        <span class="signup-social__desc">Sign up with Google</span>
                    </a>
                    <a href="#" class="signup-social__item">
                        <i class="fab fa-facebook signup-social__icon"></i>
                        <span class="signup-social__desc">Sign up with Facebook</span>
                    </a>
                </div>
                <form autocomplete="off" id="signup__form" class="signup__form">
                    <div class="signup__information">
                        <div class="signup__name">
                            <label for="name" class="signup__label signup__label--input">Name</label>
                            <div class="signup-input__box">
                                <input type="text" id="name" class="signup__input signup__input--name" required/>
                                <i class="fas fa-check signup-name__icon"></i>
                            </div>
                        </div>
                        <div class="signup__email">
                            <label for="email" class="signup__label signup__label--input">Email</label>
                            <input type="email" id="email" class="signup__input" required/>
                        </div>
                        <div class="signup__password">
                            <label for="password" class="signup__label signup__label--input">Password</label>
                            <input type="password" id="password" class="signup__input" required/>
                        </div>
                    </div>
                    <div class="signup__term">
                        <input type="checkbox" id="checkbox" class="signup__checkbox" required/>
                        <label for="checkbox" class="signup__label signup__label--checkbox">I've read and agree with Terms of Service and Privacy Policy</label>
                    </div>
                    <button  type="submit" form="signup__form"  value="Submit" class="signup__button">
                        <i class="fas fa-arrow-right signup-submit__icon"></i>
                    </button>
                </form>
                <div class="signup__redirect">
                    Already have an account? 
                    <a href="#">Sign in</a>
                </div>
            </div>
            <div class="signup__right">
                <img src={signupLogo} alt="" class="signup__image"/>
            </div>
        </div>
    );
}

export default RegisterPage;