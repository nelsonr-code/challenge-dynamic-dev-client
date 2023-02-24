# Musicfy client

Es una empresa dedicada al rubro de la música contando con diferentes artistas en su plataforma de streaming, actualmente no cuentan con un módulo para el ingreso de los nuevos álbumes de los artistas.

Se requiere crear un panel administrativo de los nuevos álbumes, que permita listar, crear, editar y eliminar, solo pueden existir hasta un máximo de 20 álbumes y en caso de querer registrar otro se debe mostrar un mensaje indicando que ha llegado al máximo de álbumes, lo que si está permitido es eliminar un álbum y de esta manera dejar un espacio libre para poder crear otro sin pasar del límite.

Un álbum cuenta solo con el nombre, nombre del artista, año del álbum (2010 – 2021) y url de la imagen.

### Restricciones:

- Todas las fuentes deben estar almacenadas en algún repositorio GIT.
- El front debe ser desarrollado con Angular o React (Puede ser algo simple, no se evaluará el diseño)
- Puede hacer uso de cualquier framework de css.
- Debe desarrollarse un API rest con un framework de Node (Nest, Express).
- Puede hacer uso de cualquier ORM
- No hacer uso de store procedure ni de query nativo.
- No hacer eliminado físico.

### Opcional:

- Poder ver, agregar, editar eliminar canciones del álbum
- Pruebas unitarias.

### Run project

- Clone this repository
- Go to folder

```
pnpm install
pnpm run dev
```
