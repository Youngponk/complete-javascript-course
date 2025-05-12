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
