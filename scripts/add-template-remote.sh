#!/bin/sh

git config remote.template.url >&- || git remote add template git@github.com:cTux/vitejs-react-ts-template.git
