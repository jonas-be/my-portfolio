# My Portfolio

## Technologies

- NextJs
- TailwindCss

## Deployment

The deployment runs with GitHub Actions.<br>
First it's going to create a Docker Container and push it
to [DockerHub](https://hub.docker.com/r/jonasbe25/my-portfolio).
After that it will redeploy on Kubernetes.

### Branches

- **stage** -> deploy in [**test environment**](https://pre.jonasbe.de) ***(Password protected)***
- **main** -> deploy in [**productive environment**](https://jonasbe.de) ***(Available soon)***

### Environments
|                 | Production         | Stage                     |
|-----------------|--------------------|---------------------------|
| **Branch**      | main               | stage                     |
| **NodePort**    | 31500              | 31550                     |
| **Url**         | https://jonasbe.de | https://pre.jonasbe.de    |
| **Open Access** | ✔ *(soon)*         | ❌ *(Password Protection)* |