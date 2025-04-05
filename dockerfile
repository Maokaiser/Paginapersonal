# Usa una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración del proyecto
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente
COPY . .

# Expone el puerto 3000 (puedes cambiarlo si es necesario)
EXPOSE 3000

# Comando por defecto al iniciar el contenedor
CMD ["npm", "run", "dev"]
