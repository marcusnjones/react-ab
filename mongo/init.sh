#!/bin/bash
set -e

mongosh <<EOF
use $ME_CONFIG_MONGODB_AUTH_DATABASE
db.createUser({
  user:  '$MONGO_INITDB_ROOT_USERNAME',
  pwd: '$MONGO_INITDB_ROOT_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$ME_CONFIG_MONGODB_AUTH_DATABASE'
  }]
})
EOF
