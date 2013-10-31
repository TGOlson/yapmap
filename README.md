# FORMS AND USERS


1. [Learning Objectives](#learning-objectives)
1. [Summary](#summary)
1. [Releases](#releases)
1. [Helpful Resources](#helpful-resources)

## Learning Objectives

1. Explore forms, params, sessions and encryption through implementation of a simple user login form. 

## Summary 
User login is fundamental to many web applications.  You will implement the following user stories: 
*   A user should be able to sign up and login to a site. 
* A user should see errors if they are unsuccessful in logging in or signing up. 
* Different pages should be made available to logged in users.  
* A user should expect that their passwords will be encrypted. 

**Submit a Pull Request after each release so we can review your code.  DO NOT MERGE any Pull Request.**

## Releases
Work through each release completely before moving on.  When you finish a release, make sure you UNDERSTAND the code. 

### Release 1
* Look over the sign_up and sign_in forms on the index page. And verify that you understand the routes they are mapped to and nested params. 
* Create a new user on sign_up - use sessions to store their id.
* Implement the  `current_user` helper method.
* Verify a user on sign_in. 

### Release 2. 
* Allow signed_in users to see all users when they are on the home page.
* If a user is signed_in, then display a sign_out button on the home page that will allow them to sign_out. Use a partial. 

### Release 3.
* Add validation to your user model for name and email. 
* If the user does not enter a proper name and email, use the Active Model Errors to show them an error message on the sign_in or sign_up form.
* Use Sinatra flash to show these errors along with your own error message.

### Release 4.
* Add Encryption to your user passwords using BCrypt.  (You will have to modify your migration and your model) 

### Release 5.  
* Add CSS 
* Add Testing

## Helpful Resources
* [Nested Params](http://surrealdetective.github.io/blog/2013/07/01/the-nested-ruby-params-hash-for-complex-html-forms-and-sinatra/)
* [Render Partials in Sinatra](http://www.sinatrarb.com/faq.html#partials)
* [Sinatra Flash](https://github.com/SFEley/sinatra-flash)
* [Active Record Validations and Error Messages](http://edgeguides.rubyonrails.org/active_record_validations.html)
* [BCrypt](http://bcrypt-ruby.rubyforge.org/)
