## APP CRUD de Prisma con NextJS

ver documento: nextjs-prisma-crud\doc\nextJS-prisma-crud.docx

## Probar APP

•	Mostrar tareas
 ![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/7cd0c489-b47d-43e4-a822-e02922001fac)

•	Agregar Tarea 
![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/606677f4-aff5-4889-9ddc-7cdf7e9599f5)
![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/507d7565-788f-4de1-97b0-4ac4da65ac66)

 
 •	Modificar tarea. Editar tarea 4
![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/aa1a0811-0a40-471f-af5e-695df90bdd7c)
![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/963f285b-b167-4933-9a62-09dc24306aa3)
![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/37fcbf33-8aa1-4f73-8ed4-3c9e4dc552be)

•	Elimininar tarea
 ![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/c110fe34-a288-4718-9012-1e8638c918bc)
![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/a2ccedf2-cf82-4b45-b6ab-7daa4156b7b4)

 •	Acerca de 
 ![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/9003f611-be8d-4396-9845-74d410365eb6)

•	Página de error
 ![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/f29b80ee-78e1-473f-8476-62906d53a14f)

 
## Deploy on Vercel

Para solventar tema de cache.
Ajuste en nextjs-prisma-crud\src\app\page.jsx para solventar tema de cache

   * export const revalidate = 30; // Forzar consulta luego de 60seg de cambio
   * export const dynamic = "force-dynamic"; // Forzar consulta siempre que actualice - no cache - 

NOTA:
 * Si se presenta problemas o warning para vercel. Utilizar CMD si estas trabajando con windows

![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/3d2bf070-fcf7-4f24-ad6b-69749dce1ee9)
![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/27313951-195c-4d0c-b9d1-1afaf5efc75e)
![image](https://github.com/wlopera/nextjs-prisma-crud/assets/7141537/9c791fdf-6964-4635-8efe-bf8a0e248dc8)


