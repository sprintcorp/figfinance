FROM node:16.15.0

LABEL version="1.0"
LABEL description="This is the base docker image for the fig-finance backend API."
LABEL maintainer = ["atimileyin388@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
