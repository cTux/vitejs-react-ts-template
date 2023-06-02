#!/bin/sh

git fetch --all
git merge template/master --allow-unrelated-histories
