# GestionPassword
A simple password management tools.

Uses
------- 
Download the code to your Desktop.
Open the page Password.html to your favorite Browser.
Play with this quick form.

You can use diferent regex :

1. "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}"
   * 1 Uppercase
   * 1 lowercase
   * 1 digit
   * 1 special caracter
   * at least 8 caracters
   
2. "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
   * 1 Uppercase
   * 1 lowercase
   * 1 digit
   * without special caracter
   * at least 8 caracter

3. "^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"
   * 1 lowercase
   * 1 digit
   * without special caracter
   * at least 8 caracter

   
Technologies   
-------
* HTML 5
* CSS
* Javascript


License
-------
![alt cc](https://licensebuttons.net/l/by/3.0/88x31.png)
This work is licensed under a [Creative Commons Attribution 4.0 International License] (http://creativecommons.org/licenses/by/4.0/)
