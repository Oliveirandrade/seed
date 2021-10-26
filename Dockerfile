FROM node:14-alpine
WORKDIR /opt/app
COPY . ./

ARG ENVIRONMENT
RUN echo ${ENVIRONMENT}

RUN yarn audit --level info

RUN yarn add \
    yarn run prune && \
    yarn cache clean

ENV NODE_ENV=${ENVIRONMENT}
ENV APP_PORT=4000

RUN chmod +x init.sh


EXPOSE 4000

CMD [ "./init.sh" ] 