# Utilise l'image officielle Node.js
FROM node:20-alpine

# Crée le dossier de l'application
WORKDIR /app

# Copie les fichiers package
COPY package*.json ./

# Installe les dépendances
RUN npm install --production

# Copie le reste du projet
COPY . .

# Expose le port 3000
EXPOSE 3000

# Définit la variable d'environnement pour le token
ENV PAIR_TOKEN=TERMUX-TOKEN

# Commande pour lancer le serveur
CMD ["node", "index.js"]
