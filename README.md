## Kathondvla Assesment

### Setup

Install dependencies:

```bash
$ npm install
```

Also create .env file if needed although on this case since secret data is required this file will be available on this repo.

After running install, deploy serverless functions following AWS credentials configuration:

```bash
$ serverless
```

### Invocation

After successful deployment, you can invoke the deployed functiosn by using the following command:

```bash
serverless invoke --function sortedTeasers
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function sortedTeasers
```

### Postman testing

Once functions are deployed we can test our endpoints using postman loading the postman collection and environment included on this repo.
