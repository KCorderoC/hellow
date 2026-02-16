const saludar = require("./index");

test("Debe devolver Hola Mundo", () => {
  expect(saludar()).toBe("Hola Mundo");
});
//KCC prueba