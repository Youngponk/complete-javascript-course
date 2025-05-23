## Qué es el motor de JavaScript

El motor de Js se divide en dos grandes partes

1. Call Stack (pila de llamadas): Donde nuestro código es ejecutado

2. Heap (pila, montón): Donde se almacenan los objetos

## Compilation vs Interpretation

1. Compilation: Todo el código es transformado de forma automatica a código de maquina para que sea ejecutado.

![compilation process](<compilation img.png>)

2. Interpretador: El código sigue siendo convertido a código de maquina pero se ejecuta linea por linea.

![alt text](interpretation.png)

3. Just-in-time (JIT): Combinación entre los dos anteriores donde se convierte el código fuente en código de maquina pero no se genera un archivo que se ejecuta, si no que, se ejecuta al instante después de convertir a maquina.

![alt text](JIT.png)

Esta combinación permite mejorar el rendimiento de los programa interpretaados porque compila y ejecuta. Iterando varias veces comprendiendo el contenido del código y optimizar el código.

## JavaScript Runtime

Contenido que incluye todas las cosas que necesitamos para que funcione en el navegador

HEAP, CALL STACK, WEB APIS (DOM, TIMERS, FETCH API, ...), CALLBACK QUEUE (click, timer, data, ...)

## Contexto de ejecución

La forma en que se ejecuta el código es top-level code, esto quiere decir que el código que se encuentre fuera de las funciones (primer nivel) son llamadas Globales

Luego vienen las funciones las cuales tienen un propio contexto y callback (llamada).

## ¿Qué esta dentro de un contexto de ejecución?

1. Variables de ambiente

-     Let, const y var declaration
-     Functions
-     Arguments objects

2. Scoope chain

Espacio o ambiente en donde una variable es declarada.

Ex: Global Scope, Function score y Block scope

Scope de una variable: Region de nuestro codigo donde se puede acceder a la variable.

### Global scope

Está fuera de cualquier función o bloque.

Las variables declaradas pueden ser usadas en cualquier parte.

### Function scope

Las variables solo pueden ser accesibles dentro de la función, no afuera.

También llamadas Local scope

### Block scope (ES6)

Se considera bloque todo aquello que está dentro de llaves.

Las variables solo son accesibles solo dentro del bloque

La regla anterior solo aplica en las variables declaradas con let y const.

Las funciones tienen block scope (solo en strict mode)

3. This keyword

## Qué es el Call Stack

Lugar donde se apilan los diferentes contextos uno arriba del otro, seguimiento en qué estamos en la ejecución

![alt text](callstack.png)

## Hoisting

Hace que ciertos tipos de variables sean accesibles o usables en el código antes de que sean declarados.

## Lifecycle de la memoria

La memoría en JS se almacena de forma automatica detrás de todo

Cada valor que creamos en js pasa a través de un lifecycle

1. Allocate memory (Asignación de memoria)

let temp = 23.7;

Cada vez que se asigna un valor a una variable el motor automáticamente reserva ese pedazo de memoria.

2. Use memory (Uso de memoria)

temp = temp + 5;
round(temp);

Cuando el código se corre, el valor es escrito, leeido y modificado en la memoria asignada.

3. Release memory (Liberación de memoria)

temp is removed from memory

Cuando no sea necesaria la memoria el valor es eliminado de la memoria.

## Donde es designada la memoria

Esta ubicada en diferentes partes de la memoria de JavaScript, esto dependiendo del tipo de datos.

-     Primitives: Number, String, Boolean, Undefined, Null, Symbol, BigInt and References to objects
-     Objects: Object literals, Arrays, Functions, Many more...

Todos los valores primitivos son almacenados en el Call Stack (Pila), mientras que los valores de tipo Objeto son almacenados en el Heap(monton)

## Cómo se elimina la memoria

1. Call stack memory: Variables de entorno simplemente se eliminan cuando se dejan de usar

2. Heap memory: Se usa el modelo de Garbage collection

-     Mark: Marca todos los objetos que son alcanzables (Se estan ejecutando) desde la raiz.
-     Sweep: Elimina los objetos que no estan marcados y libera la memoria para una nueva asignación de esta.

Esto ocurre mientras la funcion, active event, closure or objeto aun esta ejecutandose, cuando termina se debe eliminar automaticamente a través de este proceso.
