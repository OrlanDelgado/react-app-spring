# Usa una imagen base de Node
FROM node:14

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Instala el servidor de archivos estáticos "serve"
RUN npm install -g serve

# Expone el puerto que utilizará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["serve", "-s", "build"]
