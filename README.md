# Full-Stack Assessment

## Description

A FAQ Page based on [this example](https://standfortrees.org/faq/) built with Next.js, fetching its data from a Strapi 4 instance.

## Api Endpoints

```
GET /api/faqs
GET /api/faqs/:id
GET /api/fetch-sample-question
```

The last endpoint fetches an item from [this public API](https://v2.jokeapi.dev/joke/Any?type=twopart) and stores in the database as a FAQ. It's saved as a draft so it has to be manually published from the admin panel.

## Deployment

- [Frontend](https://full-stack-assessment-romanrguez192.vercel.app/)
- [Backend](https://full-stack-assessment-roman.herokuapp.com/)
