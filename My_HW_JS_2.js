
//**Напишите валидационный скрипт используя функции 
/* 
1. Скрипт должен на вход принимать строку.
2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
3. Минимум 5 символов в строке  *
4. Максимум 64 символа в строке  *
5. В строке должны быть буквы *
6. Должна быть хотя бы одна буква в верхнем регистре *
7. Должна быть хотя бы одна цифра*
8. Должна быть хотя бы одна @
9. Строка не должна быть пустой*/  
function checkLine_4() {
    let line = prompt("Please, enter text", "");
    if (line.length === 0 || !line.trim()) {
      alert("Error. The string is empty or consists only of spaces");
    } else if (line.length < 5) {
      alert("Error. Minimum 5 characters per line");
    } else if (line.lenght > 64) {
      alert("Error. Max 64 symbol");
    } else if (!/[A-ZА-ЯЁ]/i.test(line)) {
      alert("Error. The line must contain the letters");
    } else if (!/[A-ZА-ЯЁ]/.test(line)) {
      alert("Error. There must be at least one letter in upper case");
    } else if (!/[0-9]/.test(line)) {
      alert("Error. There must be at least one number");
    } else if (line.indexOf("@") == -1) {
      alert("There must be at least one @");
    } else {
      alert("Thank you. Have a wonderful day!");
    }
  }
  checkLine_4();