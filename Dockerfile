FROM node:20
WORKDIR /opt/modal
COPY . .
EXPOSE 3000
CMD [ "sleep", "infinity" ]