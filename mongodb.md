# MongoDB LINUX (UBUNTU)

## Install

- [Download MongoDB]
    - Version: 4.0.9
    - OS: Linux 64-bit legacy x64
    - Package TGZ

- [Doc Oficial]: Install using .tgz Tarball on Ubuntu

## Errors/Resolve

| Error | Resolve |
| --- | --- |
| ./mongod: /usr/lib/x86_64-linux-gnu/libcurl.so.4: version `CURL_OPENSSL_3' not found (required by ./mongod) | Instalar versão para OS LINUX e não UBUNTU |

## Run

- Create folder data/db/ (To devs):
    ```bash
    cd mongodb-version/bin/
    ./mongod --dbpath=../../data/db/
    ```


[Última Verificação - 20/04/2019]

[Download MongoDB]:<https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.9.tgz>
[Doc Oficial]:<https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu-tarball/>
