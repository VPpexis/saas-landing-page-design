FROM --platform=linux/amd64 node:18

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install && npm install next
COPY . .

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
ENV WATCHPACK_POLLING true
                                                                                                
CMD ["npm", "run", "dev"]