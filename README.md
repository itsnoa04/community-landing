# Community Landing Page 🚀

This is a community landing page made for pensil find coder hackathon.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Design

| Desktop                                                    | Mobile                                           |
| :--------------------------------------------------------- | :----------------------------------------------- |
| ![Desktop](https://i.ibb.co/MRxz71z/Mac-Book-Pro-16-4.png) | ![Mobile](https://i.ibb.co/dkJS2pZ/13-Pro-1.png) |

## API Reference 🔗

This project uses a mock API made with next JS to emulate getting data from an external API
This is the schema for

#### Get Users

```http
  GET /api/users
```

Data Schema :

| Parameter   | Type     |
| :---------- | :------- |
| `id`        | `number` |
| `firstName` | `string` |
| `lastName`  | `string` |
| `role`      | `string` |
| `bio`       | `string` |
| `social`    | `object` |
| `icon`      | `URL`    |

social Schema :

| Parameter  | Type  |
| :--------- | :---- |
| `youtube`  | `URL` |
| `twitter`  | `URL` |
| `github`   | `URL` |
| `linkedin` | `URL` |

#### Get Groups

```http
  GET /api/groups
```

| Parameter     | Type     |
| :------------ | :------- |
| `id`          | `number` |
| `name`        | `string` |
| `banner`      | `URL`    |
| `description` | `string` |
| `color`       | `hex`    |
| `textColor`   | `hex`    |

#### Get FAQ

```http
  GET /api/faq
```

| Parameter  | Type     |
| :--------- | :------- |
| `id`       | `number` |
| `question` | `string` |
| `answer`   | `string` |

#### Get Feed

```http
  GET /api/feed
```

| Parameter   | Type     |
| :---------- | :------- |
| `id`        | `number` |
| `author`    | `string` |
| `authorImg` | `string` |
| `authorID`  | `number` |
| `title`     | `string` |
| `body`      | `string` |
| `group`     | `object` |

group schema :

| Parameter   | Type     |
| :---------- | :------- |
| `id`        | `number` |
| `name`      | `string` |
| `banner`    | `URL`    |
| `color`     | `hex`    |
| `textColor` | `hex`    |

#### Get Testimonials

```http
  GET /api/testimonials
```

| Parameter    | Type     |
| :----------- | :------- |
| `id`         | `number` |
| `authorName` | `string` |
| `avatar`     | `URL`    |
| `remark`     | `string` |
