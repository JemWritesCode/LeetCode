In JavaScript, **function declarations are hoisted**, which means they are moved to the top of their scope at runtime. However, in your code, `Height` is declared as a **function expression assigned to a variable** (`var Height = function(...) { ... }`).

Function expressions are **not hoisted** like function declarations.