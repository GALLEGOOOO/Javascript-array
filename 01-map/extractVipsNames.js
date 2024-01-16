/**
 * Given VIPS array, define function 'extractVipsNames' to return an array of strings only with vips names
 *
 * expected: [ 'Foo', 'Bar', 'Fizz', 'Buzz', 'FizzBuzz' ]
 */

const VIPS = [
  {
    name: "Foo",
    age: 80,
  },
  {
    name: "Bar",
    age: 2,
  },
  {
    name: "Fizz",
    age: 5,
  },
  {
    name: "Buzz",
    age: 16,
  },
  {
    name: "FizzBuzz",
    age: 100,
  },
];

const extractVipsNames = function (vips) {
  // Definició de la funció 'extractVipsNames' que rep una llista d'objectes VIPS i retorna una llista amb noms de VIPS
  const vipsNames = vips.map((vip) => {
    // Utilitza el mètode 'map()' per recórrer cada objecte VIP i retorna només la propietat 'name'

    return vip.name;
  });
  return vipsNames; // Retorna una nova llista amb els noms dels VIPS
};

export default extractVipsNames; // Exporta la funció 'extractVipsNames' com a funció predeterminada del mòdul

//que rep una llista d'objectes VIPS i utilitza el mètode map() per crear una nova llista que conté només els noms dels VIPS.
