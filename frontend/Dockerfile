FROM node:16.15.0

LABEL version="1.0"
LABEL description="This is the base docker image for the fig-finance frontend."
LABEL maintainer = ["atimileyin388@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
