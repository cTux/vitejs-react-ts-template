#!/bin/sh

git fetch --all
git merge template/master -m "chore(template): updated template" --allow-unrelated-histories
