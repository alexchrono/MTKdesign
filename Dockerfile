FROM node:15-alpine3.10 as build


COPY /react-app /react-app


WORKDIR /react-app


RUN npm install && CI=false && npm run build


FROM python:3.9.18-alpine3.18


RUN apk add build-base
RUN apk add postgresql-dev gcc python3-dev musl-dev


ARG FLASK_APP
ARG FLASK_ENV
ARG DATABASE_URL
ARG REACT_APP_BASE_URL
ARG SCHEMA
# ARG S3_BUCKET
# ARG S3_KEY
# ARG S3_SECRET
# ARG GOOGLE_CLIENT_ID

# ARG GOOGLE_CLIENT_SECRET
# ARG GOOGLE_SECRET_JSON
ARG CLIENT_ID
ARG CLIENT_SECRET
ARG BASE_URL


WORKDIR /var/www


COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install psycopg2


COPY . .


COPY --from=build /react-app /var/www/react-app/


RUN flask db upgrade
RUN flask seed all


CMD gunicorn app:app
