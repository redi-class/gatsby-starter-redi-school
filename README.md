# gatsby-starter-default

The default Gatsby starter

Install this starter (assuming Gatsby is installed) by running from your CLI:

```sh
gatsby new gatsby-redi-school gh:olifante/gatsby-starter-redi-school
```

## Build the image

```sh
docker build --tag gatsby-redi-school .
```

or

```sh
docker build \
    --tag gatsby-redi-school \
    .
```

## Run the image

```sh
docker run -it --publish 8000:8000 --rm --name my_gatsby-redi-school gatsby-redi-school
```

or

```sh
docker run \
    --interactive \
    --tty \
    --publish 8000:8000 \
    --rm \
    --name my_gatsby-redi-school \
    gatsby-redi-school
```

## Enter the container

```sh
docker exec -it my_gatsby-redi-school /bin/bash
```

or

```sh
docker exec \
    --interactive \
    --tty \
    my_gatsby-redi-school \
    /bin/bash
```
