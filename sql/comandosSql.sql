/*################### CURSO SQL COMANDO POR COMANDO ##################*/

/*====================================================================*/
-- 1. CREATE DATABASE
-- COMANDO UTILIZADO PARA CREAR BASES DE DATOS
-- SINTAXIS
CREATE DATABASE NOMBRE_BASE_DE_DATOS;

/*====================================================================*/
-- 2. CREATE TABLE
-- COMANDO UTILIZADO PARA CREAR TABLAS
-- SINTAXIS
CREATE TABLE TABLA_ej(
    -- CAMPOS O COLUMNAS
    ID NUMBER(4),
    NOMBRE VARCHAR2(25),
    EDAD NUMBER(2),
    FECHA_NACIMIENTO DATE
);

/*====================================================================*/
-- 3. SELECT
-- COMANDO UTILIZADO PARA SELECCIONAR LOS CAMPOS QUE QUEREMOS VISUALIZAR
-- SINTAXIS
SELECT CAMPO1, CAMPO2
FROM NOMBRE_TABLA;

-- SINTAXIS PARA VISUALIZAR TODOS LOS CAMPOS
SELECT *
FROM NOMBRE_TABLA;

/*====================================================================*/
-- 4. DISTINCT
-- COMANDO USADO PARA SELECCIONAR LOS CAMPOS DISTINTOS
-- SINTAXIS
SELECT DISTINCT CAMPO
FROM NOMBRE_TABLA;

-- SINTAXIS PARA VISUALIZAR TODOS LOS CAMPOS
SELECT DISTINCT *
FROM NOMBRE_TABLA

/*====================================================================*/
-- 5. WHERE
-- COMANDO USADO PARA FILTRAR LOS REGISTROS BAJO UNA CONDICION ESPECIFICA
-- SINTAXIS
SELECT columnas
FROM tabla
WHERE condición;

-- Operadores comunes usados en WHERE:
-- Operadores de comparación:
    --=: Igual a.
    --<> o !=: Distinto de.
    -->: Mayor que.
    --<: Menor que.
    -->=: Mayor o igual que.
    --<=: Menor o igual que.

-- Operadores lógicos:
    --AND: Ambas condiciones deben cumplirse.
    --OR: Al menos una condición debe cumplirse.
    --NOT: Invierte la condición.

-- Operadores especiales:
    --BETWEEN: Especifica un rango.
    --IN: Busca un valor dentro de una lista.
    --LIKE: Busca patrones.
    --IS NULL: Verifica si un campo está vacío.

--Ejemplo práctico:
SELECT nombre, salario
FROM empleados
WHERE salario > 50000 AND departamento = 'Ventas';


/*====================================================================*/
-- 6. ORDER BY
-- COMANDO USADO PARA ORGANIZAR LOS REGISTROS YA SEA DE FORMAS ASCENDENTE O DESENDENTE
-- LOS REGISTROS POR DEFECTO VIENEN ORGANIZADOS DE FORMA ASCENDNETE
-- SINTAXIS
SELECT columnas
FROM tabla
ORDER BY columna1 [ASC | DESC], columna2 [ASC | DESC];

SELECT nombre, salario
FROM empleados
ORDER BY 2 DESC; -- Ordena por la segunda columna, es decir, salario.

/*====================================================================*/
-- 7. LIKE
-- La cláusula LIKE en SQL se utiliza para buscar patrones en una columna mediante el uso de caracteres comodín
-- SINTAXIS
SELECT columnas
FROM tabla
WHERE columna LIKE patrón;
