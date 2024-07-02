# Usa la imagen base de Node.js versión LTS
FROM node:lts-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación y las dependencias
COPY package.json package-lock.json ./
RUN npm install --production

# Copia el resto de la aplicación
COPY . .

# Compila la aplicación de React
RUN npm run build

# Expone el puerto 3000 para que la aplicación pueda ser accedida
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]